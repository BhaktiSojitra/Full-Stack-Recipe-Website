const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require('body-parser');
const recipeModel = require('./model/recipeModel');
const API = '/api/recipe';

mongoose.connect("mongodb://localhost:27017/RecipeDatabase").then(()=>{
    console.log("connection established successfully");
    const app=express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.json());

    app.get(API + "/list", async(req,res)=>{
        try {
            const recipes = await recipeModel.find({});
            res.json({success:true,data:recipes});
        } catch (error) {
            console.log(error);
            res.json({success:false,data:"error"});
        }
    });

    app.get(API + "/bytitle/:title", async (req, res) =>{
        try {
            const result = await recipeModel.findOne({ title: req.params.title });
            if (result) {
                res.json({ success: true, message: 'Recipe Found', data: result });
            } else {
                res.status(404).json({ success: false, message: 'Recipe Not Found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Cannot get recipe by id' });
        }
    });

    app.post(API + "/add", async (req, res) => {
        try {
            console.log(req.body);  // Log the request body for debugging

            const newRecipe = new recipeModel({
                id: req.body.id,
                image: req.body.image,
                title: req.body.title,
                description: req.body.description,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions,
                notes: req.body.notes
            });

            await newRecipe.save();
            res.json({ success: true, message: 'Recipe Added' });
        } catch (error) {
            console.error('Error adding recipe:', error);
            res.status(500).json({ success: false, message: 'Failed to add recipe' });
        }
    });
        
    app.put(API + "/update/:id",async(req,res)=>{
        try{
            const result = await recipeModel.findOne({id:req.params.id});
            console.log(result);

            const{ingredients,instructions,notes} = req.body;
            result.ingredients = ingredients;
            result.instructions = instructions;
            result.notes = notes;
            await result.save();
            res.json({ success: true, message: "Recipe updated" });
        } 
        catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error updating recipe" });
        }
    });

    app.delete(API + "/remove/:id", async (req, res) => {
        try {
            const result = await recipeModel.deleteOne({ id: req.params.id });
            res.json({ success: true, message: "Recipe Removed",});
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Error removing recipe" });
        }
    });    

    app.listen(4000,()=>{
        console.log("server started...");
    });
});

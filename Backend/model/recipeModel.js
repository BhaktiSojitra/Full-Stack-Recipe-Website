const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    notes: { type: [String], required: true }
});

module.exports = mongoose.model("Recipes",recipeSchema);
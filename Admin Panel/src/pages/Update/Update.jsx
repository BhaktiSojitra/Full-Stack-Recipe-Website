import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Update.css";
import "../Add/Add.css";
import { toast } from "react-toastify";

const Update = ({ url }) => {

  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/recipe/bytitle/${params.title}`);
      if (response.data.success) {
        const recipeData = response.data.data;
        const numberedIngredients = recipeData.ingredients.map((item, index) => `${index + 1}. ${item}`).join('\n');
        const numberedInstructions = recipeData.instructions.map((item, index) => `${index + 1}. ${item}`).join('\n');
        const numberedNotes = recipeData.notes.map((item, index) => `${index + 1}. ${item}`).join('\n');
        setData({
          ...recipeData,
          ingredients: numberedIngredients,
          instructions: numberedInstructions,
          notes: numberedNotes
        });
      } else {
        toast.error("Error fetching recipe");
      }
    } catch (error) {
      toast.error("Error fetching recipe");
    }
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/api/recipe/update/${data.id}`, {
        ingredients: (data.ingredients || "").split('\n'),
        instructions: (data.instructions || "").split('\n'),
        notes: (data.notes || "").split('\n')
      });
      if (response.data.success) {
        toast.success("Recipe updated successfully");
      } else {
        toast.error("Error updating recipe");
      }
    } catch (error) {
      toast.error("Error updating recipe");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({...data,[name]: value}));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="add">
      <form className="flex-col" onSubmit={updateData}>
        <div className="add-recipe-id flex-col">
          <p>Recipe ID</p>
          <input
            value={data.id}
            type="text"
            name="id"
            placeholder="Type here"
            readOnly
          ></input>
        </div>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <img src={data.image}/>
        </div>

        <div className="add-recipe-title flex-col">
          <p>Recipe Title</p>
          <input
            value={data.title}
            type="text"
            name="title"
            placeholder="Type here"
            readOnly
          ></input>
        </div>

        <div className="add-recipe-description flex-col">
          <p>Recipe Description</p>
          <textarea
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            readOnly
          ></textarea>
        </div>

        <div className="add-recipe-ingredients flex-col">
          <p>Recipe Ingredients</p>
          <textarea
            value={data.ingredients}
            onChange={onChangeHandler}
            name="ingredients"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="add-recipe-instructions flex-col">
          <p>Recipe Instructions</p>
          <textarea
            value={data.instructions}
            onChange={onChangeHandler}
            name="instructions"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="add-recipe-notes flex-col">
          <p>Recipe Notes</p>
          <textarea
            value={data.notes}
            onChange={onChangeHandler}
            name="notes"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>

        <div className="div">
            <button type="submit" className="update-button">
            Update
            </button>

            <button type="submit" className="button" onClick={() =>{
                navigate("/list")
            }}
            >
            Back
            </button>
        </div>
      </form>
    </div>
  );
};

export default Update;

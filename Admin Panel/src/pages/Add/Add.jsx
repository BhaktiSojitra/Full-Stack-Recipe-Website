import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [data,setData] = useState({
    id:"",
    image:"",
    title:"",
    description:"",
    ingredients:"",
    instructions:"",
    notes:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    const formData = {
      id: data.id,
      image: data.image,
      title: data.title,
      description: data.description,
      ingredients: (data.ingredients || "").split('\n'),
      instructions: (data.instructions || "").split('\n'),
      notes: (data.notes || "").split('\n')
    };
    try {
      const response = await axios.post(`${url}/api/recipe/add`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.success) {
        setData({
          id: "",
          image: "",
          title: "",
          description: "",
          ingredients: "",
          instructions: "",
          notes: ""
        });
        toast.success(response.data.message);
        //console.log(response.data.message);
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-recipe-id flex-col">
          <p>Recipe ID</p>
          <input onChange={onChangeHandler} value={data.id} type='text' name='id' placeholder='Type here' required></input>
        </div>

        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <input onChange={onChangeHandler} value={data.image} type='text' name='image' placeholder='Type here' required></input>
        </div>

        <div className="add-recipe-title flex-col">
          <p>Recipe Title</p>
          <input onChange={onChangeHandler} value={data.title} type='text' name='title' placeholder='Type here' required></input>
        </div>

        <div className='add-recipe-description flex-col'>
          <p>Recipe Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required></textarea>
        </div>

        <div className='add-recipe-ingredients flex-col'>
          <p>Recipe Ingredients</p>
          <textarea onChange={onChangeHandler} value={data.ingredients} name='ingredients' rows="6" placeholder='Write content here' required></textarea>
        </div>

        <div className='add-recipe-instructions flex-col'>
          <p>Recipe Instructions</p>
          <textarea onChange={onChangeHandler} value={data.instructions} name='instructions' rows="6" placeholder='Write content here' required></textarea>
        </div>

        <div className='add-recipe-notes flex-col'>
          <p>Recipe Notes</p>
          <textarea onChange={onChangeHandler} value={data.notes} name='notes' rows="6" placeholder='Write content here' required></textarea>
        </div>

        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  )
}

export default Add

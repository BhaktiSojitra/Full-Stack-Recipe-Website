import React, { useEffect } from 'react'
import RecipeHeader from '../../components/RecipeHeader/RecipeHeader'
import { useState } from 'react'
import axios from "axios"
import './Recipes.css'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [recipes,setRecipes] = useState([]);

  const URL = "http://localhost:4000/api/recipe";

  const fetchRecipes = async() =>{
    const response = await axios.get(URL + "/list");
    setRecipes(response.data.data);
  };

  useEffect(()=>{
    document.title = 'Recipes - Pinch of Yum';
    fetchRecipes();
  },[]);

  function backTotop(){
    //window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }

    return (
      <>
        <RecipeHeader />
        <div className='card-container'>
          {recipes.map((item, index) => (
            <div key={index} className="card">
              <Link to={`/recipes/${item.title}`}>
                <img src={item.image} alt={item.title} className="card-image" />
              </Link>
              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="view-more">
                  <Link to={`/recipes/${item.title}`}>
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="back-to-top">
          <button onClick={backTotop}>
              <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </>
    )
  }

export default Recipes

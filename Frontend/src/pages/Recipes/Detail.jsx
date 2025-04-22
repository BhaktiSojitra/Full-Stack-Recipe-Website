import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";
import "./Detail.css";

function Detail() {
  const [recipe,setRecipe] = useState([]);
  let params = useParams();

  const URL = "http://localhost:4000/api/recipe";

  const fetchRecipe = async() =>{
    const response = await axios.get(URL + "/bytitle/" + params.title);
    setRecipe(response.data.data);
  };

  useEffect(()=>{
    document.title = params.title;
    fetchRecipe();
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
        <div className='detail-container'>
            <img src={recipe.image} alt='' className='detail-img'/>
            <h2 className='detail-header'>{recipe.title}</h2>
            <div className='detail-desc'>{recipe.description}</div>
        </div>

        <div className='detail-recipe'>
            <h2 className='header-h2'>Ingredients</h2>
            <div className='detail-ingredient'>
                <ul>
                    {recipe.ingredients ? (
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    ) : (
                        <li>No ingredients available</li>
                    )}
                </ul>
            </div>
        </div>

        <br />

        <div className='detail-recipe'>
            <h2 className='header-h2'>Instructions</h2>
            <div className='detail-instruction'>
                <ol>
                    {recipe.instructions ? (
                        recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))
                    ) : (
                        <li>No instructions available</li>
                    )}
                </ol>
            </div>
        </div>

        <br />

        
        <div className='detail-recipe'>
            <h2 className='header-h2'>Notes</h2>
            <div className='detail-notes'>
                <ul>
                    {recipe.notes && recipe.notes.length > 0 ? (
                        recipe.notes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))
                    ) : (
                        <li>No Note available</li>
                    )}
                </ul>
            </div>
        </div>

        <div className="back-to-top">
          <button onClick={backTotop}>
              <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
    </>
  )
}

export default Detail

import React from 'react'

const OldRecipes = () => {
  const recipes = [
    {
        name:"Pongal",
        imgPath:"https://www.yummytummyaarthi.com/wp-content/uploads/2023/10/ven-pongal-1.jpeg",
    },
    {
        name:"Vegan Korma",
        imgPath:"https://www.delishknowledge.com/wp-content/uploads/Easy-Weeknight-vegan-korma_2square.jpg",
    },
    {
        name:"Makki di Roti and Sarson da Saag",
        imgPath:"https://www.thestatesman.com/wp-content/uploads/2019/11/11-1.jpg",
    },
    {
        name:"Litti Chokha",
        imgPath:"https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg",
    },
  ];
    return (
      <div className='all-recipe-container'>
          <h2>Old Recipe</h2>
          <div className="dish-main">
          {recipes.map((recipe, index) => (
            <div className="dish-container" key={index}>
              <div className="img" style={{ backgroundImage: `url(${recipe.imgPath})` }}></div>
              <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
              <p className="dish-name">{recipe.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default OldRecipes

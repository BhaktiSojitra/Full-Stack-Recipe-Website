import React from 'react';
import RecipeHeader from '../../components/RecipeHeader/RecipeHeader';
import { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";

const Detail = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  let params = useParams();

  const dishes = [
    {
      id:1,
      name: "Creamy Kale Pasta",
      description: "This Creamy Kale Pasta is fresh, easy, and DELICIOUS. Chewy bowtie pasta, coated in a light, salty, barely-creamy sauce, flecked with red pepper flakes and little bits of tender sautéed garlic kale.",
      imgPath: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Creamy-Kale-Pasta-2.jpg",
      ingredients: [ "1/4 cup pine nuts",
                     "1/4 cup packed parsley",
                     "1/4 cup packed basil",
                     "2 tablespoons capers or pitted olives",
                     "1 teaspoon salt", 
                     "1/2 teaspoon black pepper",
                     "juice and zest of half a lemon",
                     "2 tablespoons olive oil",
                     "8 ounces farfalle",
                     "2 tablespoons butter or vegan butter",
                     "2 cloves garlic, thinly sliced",
                     "2 stalks kale, stems removed, leaves chopped into bite-sized pieces",
                     "1/2 cup white wine, reserved cooking water, broth, or any combination", 
                     "lemon juice, red pepper flakes, and Parmesan to finish (omit Parmesan if vegan)" ],
      instructions:[ "Make the sauce: Pulse all sauce ingredients together until mostly smooth. (The sauce will be very salty. That’s okay, it’ll tone down once it mixes with everything.)",
                     "Prep the pasta: Cook pasta according to package directions. Drain and set aside.",
                     "Cook down the kale: While the pasta is cooking, melt the butter over medium heat in a large skillet. Add the garlic; sauté for 1-2 minutes. Add the kale; sauté for 1-2 minutes. Add the wine, water, or broth; let it sizzle out for a minute.",
                     "Finish: Add drained, cooked pasta and sauce. Toss to combine. Season to taste with Parmesan, lemon, red pepper flakes, and salt and pepper. Fast, easy, yum." ]
    },
    {
      id:2,
      name: "Fancy Glazed Dounts",
      imgPath: "/img/img2.webp"
    },
    {
      id:3,
      name: "Mighty Cheesy Breakfast Burger",
      imgPath: "/img/img3.avif" 
    },
    {
      id:4,
      name:"Pizza Margarita",
      imgPath:"/img/img4.avif",
      notes:"hii"
    }
  ];

  const getDishByName = () => {
    const result = dishes.find(dish => dish.name === params.name);
    console.log("result:- " + result);
    if (result) {
      setSelectedDish(result);
      return { success: true, message: 'Dish Found', data: result };
    } else {
      return { success: false, message: 'Dish Not Found' };
    }
  };

  useEffect(() => {
    getDishByName();
  }, []);

  if (selectedDish === null) {
    return <div>Dish not found or loading...</div>;
  }
  console.log('Selected Dish:', selectedDish);

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
            <img src={selectedDish.imgPath} alt='' className='detail-img'/>
            <h2 className='detail-header'>{selectedDish.name}</h2>
            <div className='detail-desc'>{selectedDish.description}</div>
        </div>

        <div className='detail-recipe'>
            <h2 className='header-h2'>Ingredients</h2>
            <div className='detail-ingredient'>
                <ul>
                    {selectedDish.ingredients ? (
                        selectedDish.ingredients.map((ingredient, index) => (
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
                    {selectedDish.instructions ? (
                        selectedDish.instructions.map((instruction, index) => (
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
                    {selectedDish.notes && recipe.notes.length > 0 ? (
                        selectedDish.notes.map((note, index) => (
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
  );
}

export default Detail

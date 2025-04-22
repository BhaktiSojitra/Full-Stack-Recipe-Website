import React from "react";
import "./SuperDelicious.css";
import { Link } from "react-router-dom";

const SuperDelicious = () => {
  const dishes = [
    {
      id:1,
      name: "Creamy Kale Pasta",
      imgPath: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Creamy-Kale-Pasta-2.jpg"
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

  return (
    <div className="all-recipe-container">
      <h2>Super Delicious</h2>
      <div className="dish-main">
        {dishes.map((dish, index) => (
          <div className="dish-container" key={index}>
            <Link to={`/recipes/super-delicious/${dish.name}`}>
              <div className="img" style={{ backgroundImage: `url(${dish.imgPath})` }}></div>
            </Link>
            <div className='icons'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p className="dish-name">{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperDelicious;

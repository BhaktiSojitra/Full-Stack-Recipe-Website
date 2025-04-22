import React, { useState } from "react";
import './LatestRecipes.css';

const LatestRecipes = () => {
    const data = [
        { name: "Cashew Vegan Rice", imgPath: "/img2/img1.jfif" },
        { name: "Crispy Orange Chips", imgPath: "/img2/img2.jfif" },
        { name: "Blue Velvet Brownies", imgPath: "/img2/img3.jfif" },
        { name: "Birthday Cupcakes", imgPath: "/img2/img4.jfif" },
        { name: "Blueberry Carrot Cake", imgPath: "/img2/img5.jfif" },
        { name: "Healthy Jam Waffle Breakfast", imgPath: "/img2/img6.jfif" },
        { name: "Roasted Red Peppersoup", imgPath: "/img2/img7.jfif" },
        { name: "Vegan Cauliflower Salad", imgPath: "/img2/img8.png" },
        { name: "Tomato Pizza", imgPath: "/img2/img9.avif" },
        { name: "Hawaiian Chicken PizzaSmoked", imgPath: "/img2/img10.avif" }
    ];
    
    const [element, setElement] = useState(3);
    const slice = data.slice(0, element);

    const loadMore = () => {
        setElement(prevElement => prevElement + 3);
    };

    return (
        <>
            <h2>Latest Recipes</h2>
            <div className="latest-main">
                {slice.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="img" style={{ backgroundImage: `url(${item.imgPath})` }}></div>
                        <p className="text">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="div-btn">
                <button className="btn" onClick={loadMore}>LOAD MORE</button>
            </div>
        </>
    );
};

export default LatestRecipes;

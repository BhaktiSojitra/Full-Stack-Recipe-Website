import React from 'react'
import '../SuperDelicious/SuperDelicious.css';

const SweetTooth = () => {
  const sweet = [
    {
        name:"Strawberry Milkshake",
        imgPath:"/img/img5.jfif",
    },
    {
        name:"Chocolate Banana Jar Cake",
        imgPath:"/img/img6.jfif",
    },
    {
        name:"Berry Maddness Biscuts",
        imgPath:"/img/img7.avif",
    },
    {
        name:"Berry Ice-Cream",
        imgPath:"/img/img8.avif",
    },
  ];
  return (
    <div className='all-recipe-container'>
      <h2>Sweet Tooth</h2>
      <div className="dish-main">
        {sweet.map((sweet, index) => (
          <div className="dish-container" key={index}>
            <div className="img" style={{ backgroundImage: `url(${sweet.imgPath})` }}></div>
            <div className='icons'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p className="dish-name">{sweet.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SweetTooth

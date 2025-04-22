import React from "react";
import "./RecipeHeader.css";

const RecipeHeader = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-header">
        <h2>Recipes</h2>
      </div>
      <div className="recipe-content">
        We've organized these recipes every way we could think of so you don't
        have to! Dietary restrictions, weeknight dinners, meal prep recipes,
        some of our most tried-and-true… no matter how you browse, we're sure
        you'll find just what you were looking for.
      </div>
    </div>
  );
};

export default RecipeHeader;

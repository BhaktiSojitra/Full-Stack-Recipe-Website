import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  const getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
  }

  return (
    <div className="navbar">
      <img src={assets.logo} alt="pinch of yum logo" className="logo" />
      <ul className="navbar-menu">
        <Link to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >HOME</Link>

        <Link to="/recipes"
          onClick={() => setMenu("recipes")}
          className={menu === "recipes" ? "active" : ""}
        >
          RECIPES
        </Link>

        <Link to="/team"
          onClick={() => setMenu("team")}
          className={menu === "team" ? "active" : ""}
        >
          TEAM
        </Link>
        
        <Link to="/about"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          ABOUT
        </Link>
      </ul>
      <div className="navbar-right">
        <form className="search-box" onSubmit={getRecipe}>
          <input type="text" placeholder="Search here" name="recipeName" />
          <button className="btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;

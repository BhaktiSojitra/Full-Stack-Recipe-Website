import React from "react";
import Aboutme from "./Aboutme";
import "./About.css";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    document.title = 'About Me - Pinch of Yum';
  }, []);

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
      <Aboutme />
      <div className="div">
        <h2>I Love Food!</h2>
        <div>
          In this space, I am always sharing fresh, flavorful, (mostly) healthy
          recipes that I love to make and eat in my real, actual, every day
          life. If I wouldn't eat it in real life, I won't put in on the blog.
          My goal is to inspire you with food that is both approachable AND
          exciting, whether you're cooking for yourself, your family, your
          roommates, or your friends. I want you to be so excited about these
          recipes that you eagerly await 5pm when you can go home from work and
          start cooking.
        </div>
        <div>
          On a related note, I absolutely LOVE seeing the food that you're
          making. It will make my day if you tag @pinchofyum in your Instagram
          photos and stories! We love to shout out our favorites on Fridays with
          our Reader Awards on Instagram Stories.
        </div>
        <img src="https://pinchofyum.com/wp-content/uploads/Bjork-Lindsay-Afton-960x960.png"/>
      </div>

      <div className="back-to-top">
        <button onClick={backTotop}>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default About;

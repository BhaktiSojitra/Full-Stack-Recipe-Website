import React, { useEffect } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import SuperDelicious from '../../components/SuperDelicious/SuperDelicious'
import SweetTooth from '../../components/SweetTooth/SweetTooth'
import Intro from '../../components/Intro/Intro'
import LatestRecipes from '../../components/LatestRecipes/LatestRecipes'
import OldRecipes from '../../components/OldRecipes/OldRecipes'

const Home = () => {

  useEffect(() => {
    document.title = 'Pinch Of Yum - A food blog with simple and tasty recipes.';
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
      <Header />
      <SuperDelicious />
      <SweetTooth />
      <OldRecipes />
      <Intro />
      <LatestRecipes />
      
      <div className="back-to-top">
        <button onClick={backTotop}>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  )
}

export default Home

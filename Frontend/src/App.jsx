import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Team from './pages/Team/Team';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Detail from './pages/Recipes/Detail';

const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return(
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/recipes/:title" element={<Detail/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App

import React from 'react'
import './intro.css'
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate=useNavigate();
  return (
    <div className='main-container'>

      <div className="container-1">
        <div>Hi! I’m Lindsay.</div>
        <div className='home-you'>Nice to Meet You!</div>
        <p className='para'>
          I'm a former 4th grade teacher, now full time blogger. 
          My husband Bjork and I live in Minnesota. Favorite things include my camera, 
          lake days, and dark chocolate.
        </p>
        <button className='learn-more' onClick={()=>{
          navigate("/about")
        }}>LEARN MORE</button>
      </div>
      
      <div className="container-2"></div>
      <div className="container-3"></div>
    </div>
  )
}

export default Intro

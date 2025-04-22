import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="section">
        <p>Tastebite</p>
        <div className='div-title'>
            "On the other hand, we denounce with righteous indignation and dislike 
            men who are so beguiled and demoralized by the charms of pleasure of the moment
        </div>
      </div>

      <div className='section'>
        <p>Pinch Of Yum</p>
        <ul className='ul'>
            <li><a href="">About us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Blog</a></li>
        </ul>
      </div>

      <div className='section'>
        <p>Legal</p>
        <ul className='ul'>
            <li><a href="">Terms</a></li>
            <li><a href="">Conditions</a></li>
            <li><a href="">Cookies</a></li>
            <li><a href="">Copyright</a></li>
        </ul>
      </div>

      <div className='section'>
        <p>Folllow</p>
        <ul className='ul'>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Youtube</a></li>
        </ul>
      </div>

      <div className='last-section'>
        <p className='last-section-p'>© 2023 Pinch of Yum. All Rights Reserved.</p>
        <div className='social-media-icons'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
      </div>

    </div>
  )
}

export default Footer

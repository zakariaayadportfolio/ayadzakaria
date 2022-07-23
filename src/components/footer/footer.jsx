import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Ayad </a>

      <ul className='permalinks'> 
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#Experience">Experience</a></li>
        <li> <a href="#Services">Services</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/zakaria.ayad.332/" target='_blank'> <FaFacebookF /></a>
        <a href="https://www.instagram.com/zakaria._.ayad/" target='_blank'> <FiInstagram /></a>
        <a href="https://twitter.com/ayad__zakaria" target='_blank'><IoLogoTwitter /></a>
      </div>

      
      <div className="footer__copyright">
        <small>&copy; Ayad Zakaria. All right reserved</small>
      </div>

    </footer>
  )
}

export default footer
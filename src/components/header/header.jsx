import React from 'react'
import './header.css'
import Cta from './cta'
import Me from '../../assets/Main-Pic.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World, I'm</h5>
        <h1> Ayad Zakaria </h1>
        <h5 className="text-light">FullStack Developer</h5>
        <Cta />
        <HeaderSocials />


        <div className="me">
          <img src={Me} alt='Main Picture ' />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header
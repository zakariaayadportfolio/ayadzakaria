import React from 'react'
import cv from '../../assets/Ayad_Zakaria_Développeur_FullStack.pdf'
const cta = () => {
  return (
    <div className="cta">
        <a href={cv} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'> Lets's Talk !</a>
    </div>
  )
}

export default cta
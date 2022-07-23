import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ayad-zakaria-399150236/' target="_blank" > <BsLinkedin /> </a>
        <a href='https://github.com/AyadZakaria' target="_blank" > <BsGithub /> </a>
        <a href='https://dribbble.com/Ayad123' target="_blank" > <FiDribbble /> </a>

    </div>
  )
}

export default HeaderSocials
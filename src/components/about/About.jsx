import React from 'react'
import './about.css'
import ME from '../../assets/about-Pic.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about' >
      <h5> Get To Know</h5>
      <h2> About Me</h2>


      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small> 2+ Years Working</small>
            </article>


            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small> 90+ Worldwide</small>
            </article>
          


            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small> 20+ Completed</small>
            </article>
          </div>

          <p>
           Hello there! I'm Zakaria, a Professional Fullstack developer.
           I am experienced in developing web and desktop applications including The DataBase & All The Backend Systeme.
           This includes brand identity, graphics and illustrations. 
           I'm a professional and highly dedicated to my work. 
           Hope my work help's you. Feel free to contact me for any questions. Thanks in advance.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
          </div>

      </div>
    </section>
  )
}

export default About
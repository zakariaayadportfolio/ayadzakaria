import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5> What I Offer </h5>
      <h2> Services </h2>

      <div className="container sercives__container">
        <artical className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
        </artical>

        {/* end of first service */}

        <artical className="service">
          <div className="service__head">
            <h3> Web Developpement</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
        </artical>

        {/* end of Second service */}

        <artical className="service">
          <div className="service__head">
            <h3> Content Creation</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
        </artical>

        {/* end of third service */}

      </div>
    </section>
  )
}

export default services
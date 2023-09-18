import React from 'react'
import './reusable.css'
import Griff from '../../Assets/griff.png'
import Profil from '../../Assets/Ellipse 9.png'

const TestimonialCard = () => {
  return (
    <div id='carte-temoin' className='rounded-5 p-3'>
      <div>
        <img src={Griff} alt="" />
        <p className="text-center text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita praesentium deleniti voluptas, neque sunt quia optio dolorem consequuntur maxime?</p>
        <div className='text-light'>
            <div className='d-flex justify-content-center mb-2'>
            <img src={Profil} alt="" />
            </div>
            <p className="text-uppercase text-center">john smith</p>
            <p className="text-capitalize text-center">foundr of awesomeux technology</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

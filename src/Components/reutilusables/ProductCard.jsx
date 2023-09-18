import React from 'react'
import './reusable.css'
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineMessage } from 'react-icons/ai'

const ProductCard = (props) => {
  return (
    <div className='card shadow rounded-5 mb-3'>
      <div className="card-body p-0">
        <div id='carte-produit'>
        <img src={props.image} alt="" className='img-fluid ImgProductCard'/>
        </div>
        <div className='bg-dark text-light px-2'>
            <p className='text-capitalize fw-bold fs-5'>{props.title}</p>
            <p></p>
        </div>
        <div className='d-flex
        justify-content-around align-items-center'>
            <p className='text-danger'><AiOutlineHeart className='me-2'/>20K</p>
            <p className='text-danger'><AiOutlineShareAlt className='me-2'/>34</p>
            <p className='text-danger'><AiOutlineMessage className='me-2'/>567</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

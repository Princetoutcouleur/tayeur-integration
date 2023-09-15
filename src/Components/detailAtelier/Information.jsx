import React from 'react'
import profil from '../../Assets/6-point-9.png'
import {AiFillPhone} from 'react-icons/ai'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'

const Information = () => {
  return (
    <div id='information'>
      <div className="card p-3 rounded-5 shadow">
        <div className="card-body">
            <p className="fw-bold text-uppercase">information</p>
            <hr />
            <div className="text-center">
                <div className='d-flex justify-content-center align-items-center mb-3'>
                <div className='w-50 py-5 rounded-circle  d-flex justify-content-center align-itens-center bordRouge'>
                    <img src={profil} alt="img-fluid profil" />
                </div>
                </div>
                <p className='fw-bold text-uppercase'>6 point 9</p>
                <div className="d-flex justify-content-center">
                <ul className="list-unstyled d-flex gap-3">
                    <li className='p-3 bg-body-secondary rounded-circle'><a href=""><AiFillPhone className='fs-4 fw-bold text-secondary'/></a></li>
                    <li className='p-3 bg-body-secondary rounded-circle'><a href=""><FaFacebookF className='fs-4 fw-bold text-secondary'/></a></li>
                    <li className='p-3 bg-body-secondary rounded-circle'><a href=""><FaInstagram className='fs-4 fw-bold text-secondary'/></a></li>
                </ul>
                </div>
                <div className="text-center">
                    <p className='fs-5'>Rejoint: 07 Septembre 2023</p>
                    <p className='fs-5'>ville: Dakar</p>
                </div>
                <button className="btn btn-danger text-uppercase rounded-pill px-3">
                    partager
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Information

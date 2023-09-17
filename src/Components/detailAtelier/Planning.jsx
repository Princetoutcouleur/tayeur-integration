import React from 'react'
import {BsCheckSquareFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'

const Planning = () => {
  return (
    <div className='card shadow rounded-5'>
      <div className="card-body">
      <p className="text-uppercase fw-bold">emploi du temps</p>
      <hr />
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">lundi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">mardi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">mercredi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">jeudi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">vendredi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">samedi</p>
        <p className="fw-bold"><span className='text-success'>Ouvert</span> de 8h à 20</p>
        <p><BsCheckSquareFill className='text-success fw-bold'/></p>
      </div>
      <div className='d-flex justify-content-between mb-2'>
        <p className="text-capitalize fw-bold">dimanche</p>
        <p className="fw-bold"><span className='text-danger'>fermé</span> toute la journée</p>
        <p><ImCross className='text-danger fw-bold'/></p>
      </div>
      </div>
    </div>
  )
}

export default Planning

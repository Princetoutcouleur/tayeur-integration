import React from 'react'
import Navigation from '../reutilusables/Navigation'
import Filtre from '../reutilusables/Filtre'

const ProductPage = () => {
  return (
    <div className='container-fluid pt-5'>
      <Navigation/>
      <div className='container pt-5'>
        <p className='fw-bold'>Tous les items</p>
        <p className='fs-6'>Nos <span className='fw-bold'>Produits</span></p>
        <div className="row">
        <div className="col-xl-3 col-lg-3">
          <Filtre />
        </div>
        <div className="col-xl-9 col-lg-9">
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

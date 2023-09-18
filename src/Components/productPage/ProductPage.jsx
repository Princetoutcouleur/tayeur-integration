import React from 'react'
import Navigation from '../reutilusables/Navigation'
import Filtre from '../reutilusables/Filtre'
import ProductList from '../reutilusables/ProductList'
import Pagination from '../reutilusables/Pagination'
import Footer from '../reutilusables/Footer'

const ProductPage = () => {
  return (
    <div className='container-fluid pt-5 px-0'>
      <Navigation/>
      <div className='container pt-5'>
        <p className='fw-bold'>Tous les items</p>
        <p className='fs-6'>Nos <span className='fw-bold'>Produits</span></p>
        <div className="row">
        <div className="col-xl-3 col-lg-3">
          <Filtre />
        </div>
        <div className="col-xl-9 col-lg-9">
        <ProductList/>
        <ProductList/>
        <Pagination className="mt-5"/>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductPage

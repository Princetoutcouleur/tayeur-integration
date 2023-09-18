import React from 'react'
import Navigation from '../reutilusables/Navigation'
import Localisation from '../detailAtelier/Localisation'
import ContactForm from '../detailAtelier/ContactForm'
import Note from '../detailAtelier/Note'
import Footer from '../reutilusables/Footer'

const ContactPage = () => {
  return (
    <div className='container-fluid pt-5'>
      <Navigation/>
      <div className="container py-5">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 pt-3">
                <Localisation/>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
                <ContactForm/>
                <Note/>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage

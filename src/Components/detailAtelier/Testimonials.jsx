import React from 'react'
import TestimonialCard from '../reutilusables/TestimonialCard'

const Testimonials = () => {
  return (
    <div id='temoignage' className='p-5 d-flex justify-content-between align-items-center'>
        <div className="row py-5">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <TestimonialCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <TestimonialCard/>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <TestimonialCard/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials

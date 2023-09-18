import React from 'react'
import TestimonialCard from '../reutilusables/TestimonialCard'

const Testimonials = () => {
  return (
    <div id='temoignage' className='p-5 d-flex justify-content-between align-items-center'>
        <div className="row">
            <div className="col-4">
                <TestimonialCard/>
            </div>
            <div className="col-4">
                <TestimonialCard/>
            </div>
            <div className="col-4">
                <TestimonialCard/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials

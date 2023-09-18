import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import Profil1 from '../../Assets/avatar.png.png'
import Profil2 from '../../Assets/avatar.png (1).png'

const Comment = () => {
  return (
    <div className='card shadow rounded-5'>
      <div className="card-body">
        <p className="text-uppercase fw-bold">commentaires</p>
        <hr />
        <div className="py-3 px-5 bg-secondary-subtle rounded-4 mb-3">
            <div className='d-flex gap-2'>
                <div>
                    <img src={Profil1} alt="" className='border border-danger border-3 rounded-circle' />
                </div>
                <div>
                    <ul className='list-unstyled'>
                        <li className='fw-bold'>M****E</li>
                        <li className='fw-bold'>Date - 14 Nov.2022</li>
                        <li className='d-flex gap-1 mt-2'><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="commentaire">
                    Trés bonne qualité franchement .
                </p>
            </div>
        </div>
        <div className="py-3 px-5 bg-secondary-subtle rounded-4 mb-3">
            <div className='d-flex gap-2'>
                <div>
                    <img src={Profil2} alt="" className='border border-danger border-3 rounded-circle' />
                </div>
                <div>
                    <ul className='list-unstyled'>
                        <li className='fw-bold'>T****I</li>
                        <li className='fw-bold'>Date - 21 Juin.2022</li>
                        <li className='d-flex gap-1 mt-2'><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/><AiFillStar className='text-warning'/></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="commentaire">
                    I like.
                </p>
            </div>
        </div>

        <div className='w-auto bg-secondary-subtle py-2 px-3 rounded-4'>
           <input type="text" placeholder='Ecrivez un commentaire' className='w-100 border border-0 bg-secondary-subtle'/> 
        </div>
      </div>
    </div>
  )
}

export default Comment

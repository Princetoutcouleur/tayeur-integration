import React from 'react'
import {
    BsWhatsapp,
    BsTelephoneFill,
    BsFillChatLeftTextFill,
    BsFillHeartFill,
  } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contactButtonOption'>
      <p className="text-secondary pPrincipal">Contacter par téléphone</p>
      <div>
        <button id='whpButton' className='d-flex gap-5 align-items-baseline ps-3 pe-5 pt-3 text-light rounded-pill border-0 fs-5 mb-3'>
            <BsWhatsapp className='icons'/>
            <p>WhatsApp</p>
        </button>
      </div>
      <div>
        <button className='bg-danger d-flex gap-5 align-items-baseline ps-3 pe-5 pt-3 text-light rounded-pill border-0 fs-5 mb-3'>
            <BsTelephoneFill className='icons'/>
            <p>Afficher le numéro</p>
        </button>
      </div>
      <p className="text-secondary pPrincipal">Contacter via chat</p>
      <div>
        <button className='bg-danger d-flex gap-5 align-items-baseline ps-3 pe-5 pt-3 text-light rounded-pill border-0 fs-5 mb-3'>
            <BsFillChatLeftTextFill className='icons'/>
            <p>Commencer à discuter</p>
        </button>
      </div>
      <div>
        <button id='favButton' className='d-flex gap-5 align-items-baseline ps-3 pe-5 pt-3 text-light rounded-pill border-0 fs-5 mb-3'>
            <BsFillHeartFill className='icons'/>
            <p>Ajouter aux favoris</p>
        </button>
      </div>
    </div>
  )
}

export default Contact

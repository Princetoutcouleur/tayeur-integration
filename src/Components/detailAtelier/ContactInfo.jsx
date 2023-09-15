import React from "react";
import {AiFillPhone} from 'react-icons/ai'
import {TbWorld, TbMailFilled, TbMessageDots} from 'react-icons/tb'

const ContactInfo = () => {
  return (
    <div class="card shadow rounded-5">
      <div class="card-body">
        <p className="text-uppercase fw-bold">information contact</p>
        <hr />
        <ul className="list-unstyled">
            <li className="fw-medium"><AiFillPhone className="text-danger fw-bold fs-5"/> +221773771010</li>
        </ul>
        <ul className="list-unstyled">
            <li className="fw-medium"><TbWorld className="text-danger fw-bold fs-5"/> www.6Point9.com</li>
        </ul>
        <ul className="list-unstyled">
            <li className="fw-medium"><TbMailFilled className="text-danger fw-bold fs-5"/> 6point9@gmail.com</li>
        </ul>
        <ul className="list-unstyled">
            <li className="fw-medium"><TbMessageDots className="text-danger fw-bold fs-5"/> Envoyer un message</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;

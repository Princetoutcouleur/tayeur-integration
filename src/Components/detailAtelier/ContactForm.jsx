import React from "react";
import {BsFillDropletFill} from 'react-icons/bs'

const ContactForm = () => {
  return (
    <div id="Form" className="card shadow rounded-5 mt-3">
      <div className="card-body">
        <p className="text-uppercase fw-bold">contactez nous</p>
        <hr />
        <div className="mt-3 d-flex justify-content-between gap-4 mb-4">
          <div className="bg-secondary-subtle px-3 py-2 border-3 border-bottom w-50">
            <input
              type="text"
              placeholder="Nom"
              className="form-control border border-0 bg-secondary-subtle w-100"
            />
          </div>
          <div className="bg-secondary-subtle px-3 py-2 border-3 border-bottom w-50">
            <input
              type="email"
              placeholder="Email"
              className="form-control border border-0 bg-secondary-subtle w-100"
            />
          </div>
        </div>
        <div className="bg-secondary-subtle px-3 py-2 border-3 border-bottom mb-4">
            <textarea
              class="form-control border border-0 bg-secondary-subtle"
              placeholder="Votre message"
              id="floatingTextarea2"
            ></textarea>
        </div>
        <div>
        <button type="button" class="btn btn-danger w-100 rounded-pill text-uppercase"><BsFillDropletFill className='me-2'/>envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

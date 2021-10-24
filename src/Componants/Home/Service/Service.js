import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
     const { _id, img, price, name, description } = service;
     const history = useHistory();

     const url = `/booking/${_id}`

     const handleBooking = () => {
          history.push(url);
     }

     return (
          <div>
               <div className="service-container">
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <h5>price:{price}</h5>
                    <p>{description}</p>
                    <button onClick={handleBooking} className="btn btn-primary">Booking</button>
               </div>
          </div>
     );
};

export default Service;
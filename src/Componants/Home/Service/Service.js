import React from 'react';
import './Service.css'

const Service = ({ service }) => {
     const { id, img, price, name, description } = service
     return (
          <div>
               <div className="service-container">
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <h5>price:{price}</h5>
                    <p>{description}</p>
               </div>
          </div>
     );
};

export default Service;
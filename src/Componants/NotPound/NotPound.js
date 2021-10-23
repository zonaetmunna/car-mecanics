import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404/error-404.jpg'

const NotPound = () => {
     return (
          <div>
               <img src={img} alt="" />
               <Link to="/home">Go back</Link>

          </div>
     );
};

export default NotPound;
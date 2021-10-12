import React from 'react';
import Banner from '../Banner/Banner';
import Expertices from '../Expertices/Expertices';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Services></Services>
               <Expertices></Expertices>
          </div>
     );
};

export default Home;
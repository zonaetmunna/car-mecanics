import React from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Expertices = () => {

     const experitces = [
          {
               name: 'munna',
               id: 1,
               img: 'https://image.freepik.com/free-photo/man-black-shirt-grey-uniform-stands-garage-after-repairing-broken-car_146671-21583.jpg'
          },
          {
               name: 'zonet',
               id: 2,
               img: 'https://image.freepik.com/free-photo/car-joy-smiling-spanner-occupation_1134-982.jpg'
          },
          {
               name: 'hossain',
               id: 3,
               img: 'https://image.freepik.com/free-photo/smiling-mechanic-with-arms-crossed-spanner_1170-1699.jpg'
          }

     ]


     return (
          <div id="expertices" className="m-5">
               <h1 className="text-center text-primary">our expertics</h1>
               <Row xs={1} md={2} className="g-4">
                    {
                         experitces.map(expert => <Expert
                              expert={expert}
                         ></Expert>)
                    }
               </Row>

          </div>
     );
};

export default Expertices;
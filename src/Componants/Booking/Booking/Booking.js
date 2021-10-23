import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Booking = () => {
     const { id } = useParams();
     const history = useHistory()


     const [details, setDetails] = useState({})
     useEffect(() => {
          fetch('/services.json')
               .then(res => res.json())
               .then(data => setDetails(data[0]))
     }, [])

     const handleBack = () => {
          history.push('/home')
     }

     console.log(details)

     return (
          <div>
               <h1>this is {id}</h1>
               <Col md={6}>
                    <Card>
                         <Card.Img variant="top" src={details.img} className="img-fluid" />
                         <Card.Body>
                              <Card.Title>{details?.name}</Card.Title>
                              <Card.Text>
                                   {details.description}
                              </Card.Text>
                              <Button onClick={handleBack} >GO Home</Button>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default Booking;
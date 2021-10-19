import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
        fetch('./FakeServices.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])

    return (
        <>
            <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5 ">
                    Our <span className="supports-Name">Services</span>
                </h1>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </Row>
            </Container>

           
        </>
    );
};

export default Services;

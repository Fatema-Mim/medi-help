import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetails , setServiceDetails] = useState([]);
    useEffect(()=>{
        fetch(`/FakeServices.json`)
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])
    const findService = serviceDetails.find(detail => detail.id == serviceId)


    return (
        <>
            <Container className=" mt-5 mb-5 ">
                <h1 className="text-center mt-5 mb-5 ">
                    Welcom to <span className="supports-Name">{findService?.name}</span> service
                </h1>
                <div className="justify-content-center d-flex  ">
                    <Card style={{ width: '20rem' }} className="text-center custom-card ">
                        <Card.Img variant="top" src={findService?.img} className="img-border-set" />
                        <Card.Body>
                            <Card.Title> <h2 className="card-title supports-Name ">{findService?.name}</h2></Card.Title>
                            <Card.Text>
                                <p className="card-text p-3">{findService?.description}</p>
                                <h4 className="card-text ">Contact : <span className="supports-Name">+{findService?.contact}</span></h4>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                        
            </Container>
        </>
    );
};

export default ServiceDetail;
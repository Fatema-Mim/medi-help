import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const { id, name, description, img} = service;
    return (
        <>
            <Col>
                <Card className="custom-card">
                    <Card.Img variant="top" src={img} className="img-border-set" />
                    <Card.Body className="text-center">
                        <Card.Title className="supports-Name ">
                            <h2 className="card-title">{name}</h2>
                        </Card.Title>
                        <Card.Text>
                            <p className="card-text p-3">{description}</p>
                            <Link to={`/service/${id}`} style={{ textDecoration: 'none' }} >
                                <div className="d-grid gap-2">
                                    <button className="btn custom-btn" type="button">See More</button>
                                </div>
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </>
    );
};

export default Service;

 

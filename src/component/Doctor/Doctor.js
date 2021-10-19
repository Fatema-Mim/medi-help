import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const { name, img, specialized} = doctor ;
    return (
        <div>
            <Col>
                <Card className="custom-card">
                    <Card.Img variant="top" src={img} className="img-border-set" />
                    <Card.Body className="text-center">
                        <Card.Title className="supports-Name ">
                            <h3>{name}</h3>
                        </Card.Title>
                        <Card.Text>
                            <h4>Specialized in <span className="supports-Name">{specialized}</span></h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './EmargencySupport.css';

const EmargencySupport = ({ support}) => {
    const { name,icon,contact } = support;
    return (
        <>
            <Col>
                <Card className="custom-card p-4">
                    <span className="card-icon m-auto text-center">
                        <i className={icon}></i>
                    </span>
                    <Card.Body className="text-center">
                        <Card.Title>
                            <h4 className="card-title custom-card-title">{name} </h4>
                        </Card.Title>
                        <Card.Text>
                            <h5 className="card-text">Contact : <span className="custom-card-title">+{contact}</span></h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default EmargencySupport;

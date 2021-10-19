import React from 'react';
import { Container } from 'react-bootstrap';
import './Appoinment.css';

const Appointment = () => {
    return (
        <>
            <Container fluid className="mt-5 custom-bg">
                <div className="text-center  p-5">
                    <h1 className="appoinment-title">Need A <span className="supports-Name">Doctor ?</span></h1>
                    <h2>Book An Appoinment</h2>
                    <h1 className="supports-Name">+09933993999</h1>
                </div>
            </Container>
        </>
    );
};

export default Appointment;
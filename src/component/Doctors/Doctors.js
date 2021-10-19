import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./FakeDoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <Container>
                <h1 className="text-center mt-5 mb-5">
                    Meet Our <span className="supports-Name">Doctors</span>
                </h1>
                <Row xs={1} md={2} lg={3} className="g-4 mb-5">
                    
                        {
                            doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor = {doctor}
                            ></Doctor>)
                        }
                
                </Row>
            </Container>
        </>
    );
};

export default Doctors;
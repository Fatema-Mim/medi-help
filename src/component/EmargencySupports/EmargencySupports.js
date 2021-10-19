import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import EmargencySupport from '../EmargencySupport/EmargencySupport';
import './EmargencySupports.css';

const EmargencySupports = () => {
    const [supports ,setSupports] = useState([]);
    useEffect(()=>{
        fetch('./FakeEmargency.json')
        .then(res => res.json())
            .then(data => setSupports(data))
    },[])
    return (
        < >
            <Container className="mt-5 mb-5">
                <h1 className="text-center mt-5 mb-5">
                    Emargency <span className="supports-Name">Support You Need</span>
                </h1>
                <Row xs={1} md={2} lg={2} className="g-4">

                    {
                     supports.map(support => <EmargencySupport
                     key={support.id}
                     support ={support}
                     ></EmargencySupport>)
                 }

                </Row>
            </Container>
        </>
    );
};

export default EmargencySupports;


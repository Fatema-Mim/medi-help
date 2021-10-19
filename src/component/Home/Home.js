import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import EmargencySupports from '../EmargencySupports/EmargencySupports';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <EmargencySupports></EmargencySupports>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;
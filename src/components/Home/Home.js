import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Navbar></Navbar>
            <About></About>
        </div>
    );
};

export default Home;
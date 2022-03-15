import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Navbar></Navbar>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
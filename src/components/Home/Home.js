import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Navbar></Navbar>
            <About></About>
            <Experience></Experience>
            <ProfessionalExperience></ProfessionalExperience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
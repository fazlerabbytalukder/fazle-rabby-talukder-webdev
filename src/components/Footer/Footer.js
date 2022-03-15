import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container-fluid footer-background'>
            <div className='text-center py-5'>
                <a className='text-center h3 footer-logo' href="https://www.facebook.com/frtfazlerabby/">Fazle Rabby Talukder</a>
                <ul className='footer-nav mt-4'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='footer-icons'>
                    <a href="https://www.facebook.com/frtfazlerabby/" target="_blank" rel="noreferrer"><i style={{color:'black'}} class="fa-brands fa-facebook fa-2x me-3"></i></a>
                    <a href="https://github.com/fazlerabbytalukder" target="_blank" rel="noreferrer"><i style={{color:'black'}} class="fa-brands fa-github fa-2x me-3"></i></a>
                    <a href="https://www.linkedin.com/in/fazle-rabby-talukder/" target="_blank" rel="noreferrer"><i style={{color:'black'}} class="fa-brands fa-linkedin fa-2x me-3"></i></a>
                </div>
                <div className='pb-5'>
                    <small className='text-secondary'>&copy; fazlerabbytalukder. All rights received</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
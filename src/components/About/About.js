import React from 'react';
import './About.css';
import aboutImg from '../../images/about-me.png';

const About = () => {
    return (
        <div id='about' className='container'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Get To Know</p>
                <h2 style={{ color: '#4FB4F2' }}>About Me</h2>
            </div>
            <div className="row mb-5">
                <div className="col-md-6">
                    <img className='img-fluid w-75 text-sm-center' src={aboutImg} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 text-center about-card d-flex justify-content-center align-items-center me-2 ms-2">
                            <div>
                                <i style={{ color: '#4FB4F2' }} class="fa-solid fa-certificate"></i>
                                <h5 className='mt-2'>Experience</h5>
                                <p className='text-secondary'>2+ Years (WebDev)</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center about-card d-flex justify-content-center align-items-center me-2">
                            <div>
                                <i style={{ color: '#4FB4F2' }} class="fa-solid fa-certificate"></i>
                                <h5 className='mt-2'>Connection</h5>
                                <p className='text-secondary'>500+ connection</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 text-center about-card d-flex justify-content-center align-items-center">
                            <div>
                                <i style={{ color: '#4FB4F2' }} class="fa-solid fa-certificate"></i>
                                <h5 className='mt-2'>Projects</h5>
                                <p className='text-secondary'>50+ Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <p className='pe-5 mt-4 mb-5'>
                            I am enthusiastic about web development with excellent developing skills and want to work in an innovative company where my creative work will be appreciated.
                            </p>
                            <a className='button1' href="https://wa.me/8801739719796">Let't Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
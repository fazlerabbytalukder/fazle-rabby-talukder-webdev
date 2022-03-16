import React from 'react';
import './ProfessionalExperience.css';
import pe from '../../images/professional.png';

const ProfessionalExperience = () => {
    return (
        <div className='container'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Professional Experience?</p>
                <h2 style={{ color: '#4FB4F2' }}>My Professional Experience</h2>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 mb-3">
                    <div className="card pe-card">
                        <div className="card-body text-center">
                            <p>2022 - Present</p>
                            <h2 className='mb-3 job-title'>Any Time Office</h2>
                            <p>Docklands, Victoria, Australia</p>
                            <p>Software Developer (Intern)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <img className='img-fluid' src={pe} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
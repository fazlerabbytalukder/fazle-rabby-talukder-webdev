import React from 'react';
import { useHistory } from 'react-router-dom';
import './Project.css';

const Project = ({ project }) => {
    const { id, img1, ProjectName, description, liveSite } = project;
    const history = useHistory();

    const handleProjectClick = () => {
        history.push(`/projectsDetails/${id}`);
    }

    return (
        <div>
            <div class="col">
                <div class="card h-100 card-design">
                    <img src={img1} class="card-img-top p-2 card-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{ProjectName}</h5>
                        <p class="card-text text-secondary">{description}</p>
                        <div className='py-3'>
                            <a className='button1 me-2' href={liveSite} target="_blank" rel="noreferrer">Live Demo</a>
                            <button style={{color:'white'}} onClick={handleProjectClick} className='button2'>Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
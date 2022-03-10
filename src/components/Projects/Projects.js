import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fazlerabbytalukder/portfolio-client/main/public/projectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    })
    return (
        <div id='projects' className='container'>
            <div className="text-center mt-5 mb-5">
                <div className='my-5'>
                    <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>My Recent Work</p>
                    <h2 style={{ color: '#4FB4F2' }}>Portfolio</h2>
                </div>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            projects.map(project => <Project key={project.id} project={project}></Project>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
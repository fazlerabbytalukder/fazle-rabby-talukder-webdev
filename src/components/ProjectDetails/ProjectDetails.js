import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { projectId } = useParams();
    // console.log(projectId);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/fazlerabbytalukder/portfolio-client/main/public/projectsData.json`)
            .then(res => res.json())
            .then(data => setProjects(data.find(single => single.id == projectId)));
    }, [projectId])

    const history = useHistory();

    const handleHomeClick = () => {
        history.push(`/home`);
    }
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <img className='img-fluid' src={projects.fullImg} alt="" />
                </div>
                <div className="col-md-8 mb-4 d-flex justify-content-center">
                    <div className="card card-background" style={{ width: '40rem' }}>
                        <div className="card-body">
                            <p className='text-center'>Professional Website</p>
                            <h1 className='text-center project-name'>{projects.ProjectName}</h1>
                            <h5 className='text-center'>({projects.ProjectTitleName})</h5>
                            <p className='text-center my-4 text-secondary'>{projects.description}</p>
                            <p><span className='technology'>Technology Used:</span> {projects.technology}</p>
                            <p className='mt-5 technology'>Features:</p>
                            <ul className='mb-4'>
                                <li>{projects.aboutProject1}</li>
                                <li>{projects.aboutProject2}</li>
                                <li>{projects.aboutProject3}</li>
                                <li>{projects.aboutProject4}</li>
                                <li>{projects.aboutProject5}</li>
                            </ul>
                            <div className='mb-5 mt-4 d-flex justify-content-center align-items-center'>
                                <a style={{color:'white'}} className='button2 me-3' href={projects.serverSite} target="_blank" rel="noreferrer">Server Side Code</a>
                                <a className='button1 me-3' href={projects.ClientSite} target="_blank" rel="noreferrer">Client Side Code</a>
                                <a style={{color:'white'}} className='button2 me-3' href={projects.liveSite} target="_blank" rel="noreferrer">Live Side</a>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 mb-4">
                                    <img className='img-fluid' src={projects.img1} alt="" />
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <img className='img-fluid' src={projects.img2} alt="" />
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <img className='img-fluid' src={projects.img3} alt="" />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <button className='button2' onClick={handleHomeClick}>Go Back To Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
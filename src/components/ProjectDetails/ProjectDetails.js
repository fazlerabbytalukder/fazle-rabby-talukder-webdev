import React, { useEffect, useState } from 'react';
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


    return (
        <div>
            <h1>{projects.ProjectName}</h1>
        </div>
    );
};

export default ProjectDetails;
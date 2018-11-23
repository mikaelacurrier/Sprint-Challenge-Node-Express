import React from 'react';
import { Link } from 'react-router-dom';
const AllProjects = props => {
    return ( 
        <div className="projects">
         Projects:
         {props.projects.map((project, key) => {
           return (
             <div key={key}>
              <Link to={`./projects/${project.id}`}>
                <h4>{project.name}</h4>
              </Link>
             <p>{project.description}</p>
             </div>
           )
         })}
         </div>
     );
}
 
export default AllProjects;
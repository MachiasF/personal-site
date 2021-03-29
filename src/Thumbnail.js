import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link className="project-link" to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-year">Y. {props.year}</div>
        <div className="project-category">C. {props.category}</div>
        <div className="project-techstack">T. {props.techstack}</div>
      </Link>
    </div>

  );
}
 
export default Thumbnail;
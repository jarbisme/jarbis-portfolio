/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function ProjectTile(props) {
  const skills = [...props.skills];

  return (
    <div className="project-tile row g-0">
      <div className="project-image col-lg-6">
        <div style={props.imgBackground}>
          <img src={props.imgURL} alt="" />
        </div>
      </div>
      <div className="project-description col-lg-6">
        <div className=" ">
          <h3>{props.title}</h3>
          <p className="subtitle">{props.startDate}</p>
          <h4>Description</h4>
          <p style={{ whiteSpace: "pre-wrap" }}>{props.description}</p>
          <h4>Skills Applied</h4>
          <ul className="skills-applied">
            {skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <ul className="description-links">
            {props.links.map((link, i) => {
              return (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;

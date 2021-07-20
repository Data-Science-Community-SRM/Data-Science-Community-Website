import React from "react";
import { Card } from "react-bootstrap";
import "../Projects/Projects.css";
import logo1 from "../Projects/logocopy.png";
import logo2 from "../Projects/git.png";
import img1 from "../Projects/dsc-projectcover.png";
import { useState, useEffect } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const fetchData = () => {
    return fetch("https://dsc-admin.herokuapp.com/api/v1/project/")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.data[0]);
        console.log(data);
        console.log(data.data[0][0]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getProjects = () => {
    let projectCards = [];
    for (let projects of projectData) {
      console.log(projects);
      projectCards.push(
        <div>
          <div className="card-container">
            <Card className="Card">
              <Card.Body className="Lower">
                <Card.Title className="title">{projects.title}</Card.Title>
                <div className="upper">
                  <Card.Img
                    className="project-img"
                    variant="top"
                    src={projects.img}
                  />
                </div>
                <p>{projects.description}</p>
                <div className="logos">
                  <img className="ico" src={logo1} alt="" />
                  <a href={projects.link} target="_blank">
                    <img className="ico" src={logo2} id="git" alt="" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
    
    return projectCards;
  };

  return (
    <div>
      <div className="maincont">
        <div className="upperbd">
          <h1 className="head">Projects</h1>
          <p className="head">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            voluptatem ullam nobis, quisquam, corrupti autem officiis tempore
            consectetur laudantium cum debitis sit hic minus. Odio pariatur sed
            deleniti eius natus?
          </p>
        </div>
        <div className="sidebd">
          <img
            src="https://image.freepik.com/free-vector/space-tour-illustration_153233-85.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="cardsPlacement">{getProjects()}</div>
    </div>
  );
}
export default Projects;

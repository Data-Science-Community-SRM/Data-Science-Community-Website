import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./People.css";

const People = (props) => {
  return (
    <React.Fragment>
      <div className={"members"} data-aos="fade-up">
        <img
          className={"photo"}
          alt={props.name + " image"}
          src={require(`../../assets/images/team/${props.image}`)}
        />
        <br />
        <div className={"memberName"}>
          {props.fname}
          <br />
          {props.lname}
        </div>
        <br />
        <div className={"role"}>{props.role}</div>
        <div className={"links row mt-md-3"}>
          <div className="mx-auto text-right col-5">
            <a
              href={`https://linkedin.com/in/${props.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="mx-auto text-left col-5">
            {props.github ? (
              <a
                href={`https://github.com/${props.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            ) : (
              <a
                href={`mailto:${props.mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default People;

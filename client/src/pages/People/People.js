import React, { Component } from "react";

import PeopleComponent from "../../components/People/People";
import {
  presidents,
  board,
  leads,
  techmembers,
  designmembers,
  mgmtmembers,
} from "./PeopleList";

class People extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-lg-9 mx-auto">
          <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
            People
          </h1>
          <p style={{ margin: "30px auto" }}>
            The ones who make our community worth it!
          </p>
          <br />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>T</span>HE{" "}
              <span style={{ color: "#6F389F" }}>B</span>OARD.
            </h3>
            <br />
            {presidents.map((president) => (
              <PeopleComponent
                key={president.fname}
                fname={president.fname}
                lname={president.lname}
                role={president.role}
                image={president.image}
                github={president.github}
                linkedin={president.linkedin}
              />
            ))}
          </div>
          <div className="row text-center d-block">
            {board.map((board) => (
              <PeopleComponent
                key={board.fname}
                fname={board.fname}
                lname={board.lname}
                role={board.role}
                image={board.image}
                github={board.github}
                linkedin={board.linkedin}
              />
            ))}
          </div>
          <div className="row text-center d-block">
            {leads.map((board) => (
              <PeopleComponent
                key={board.fname}
                fname={board.fname}
                lname={board.lname}
                role={board.role}
                image={board.image}
                github={board.github}
                linkedin={board.linkedin}
              />
            ))}
          </div>
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>T</span>ECHNICAL{" "}
              <span style={{ color: "#6F389F" }}>T</span>EAM.
            </h3>
          </div>
          <br />
          <div className="row text-center d-block">
            {techmembers.map((member) => (
              <PeopleComponent
                key={member.fname}
                fname={member.fname}
                lname={member.lname}
                role={member.role}
                image={member.image}
                github={member.github}
                linkedin={member.linkedin}
              />
            ))}
          </div>
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>D</span>ESIGN{" "}
              <span style={{ color: "#6F389F" }}>T</span>EAM.
            </h3>
          </div>
          <br />
          <div className="row text-center d-block">
            {designmembers.map((member) => (
              <PeopleComponent
                key={member.fname}
                fname={member.fname}
                lname={member.lname}
                role={member.role}
                image={member.image}
                github={member.github}
                linkedin={member.linkedin}
              />
            ))}
          </div>
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>M</span>ANAGEMENT{" "}
              <span style={{ color: "#6F389F" }}>T</span>EAM.
            </h3>
          </div>
          <br />
          <div className="row text-center d-block">
            {mgmtmembers.map((member) => (
              <PeopleComponent
                key={member.fname}
                fname={member.fname}
                lname={member.lname}
                role={member.role}
                image={member.image}
                mail={member.mail}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default People;

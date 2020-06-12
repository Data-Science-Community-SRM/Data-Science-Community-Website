import React, { Component } from "react";

import PeopleComponent from "../../components/People/People";

class People extends Component {
  state = {
    presidents: [
      {
        fname: "Avirup",
        lname: "Chattaraj",
        role: "PRESIDENT",
        image: "avirup",
        github: "severussnape123",
        linkedin: "avirupchattaraj",
      },
      {
        fname: "Hritik",
        lname: "Bhandari",
        role: "PRESIDENT",
        image: "hritik",
        github: "hritikbhandari",
        linkedin: "hritikbhandari",
      },
    ],
    board: [
      {
        fname: "Anush",
        lname: "Bhatia",
        role: "TECHNICAL DIRECTOR",
        image: "anush",
        github: "anushbhatia",
        linkedin: "anush-bhatia-aa500a158",
      },
      {
        fname: "Hariom",
        lname: "Palkar",
        role: "CORPORATE DIRECTOR",
        image: "hariom",
        github: "aannuuj",
        linkedin: "hariompalkar",
      },
      {
        fname: "Takshil",
        lname: " Mittal",
        role: "EVENTS DIRECTOR",
        image: "takshil",
        github: "takshilmittal",
        linkedin: "takshil-mittal",
      },
      {
        fname: "Pratyaksh",
        lname: "Bhalla",
        role: "EXECUTIVE DIRECTOR",
        image: "pratyaksh",
        github: "pratyaksh64",
        linkedin: "pratyaksh-bhalla-96871b186",
      },
    ],
    members: [
      {
        fname: "Abhinav",
        lname: "Verma",
        role: "WEB DEVELOPMENT",
        image: "abhinav",
        github: "abhinav565",
        linkedin: "abhinav-verma-3752701a2",
      },
      {
        fname: "Abhishek",
        lname: "Saxena",
        role: "ML",
        image: "abhishek",
        github: "saxenabhishek",
        linkedin: "abhibored",
      },
      {
        fname: "K.",
        lname: "Aditya",
        role: "ML",
        image: "aditya",
        github: "i-am-aditya",
        linkedin: "iamadityak",
      },
      {
        fname: "Akshat",
        lname: "Anand",
        role: "BLOCKCHAIN & ML",
        image: "akshat",
        github: "cipheraxat",
        linkedin: "akshatanand1999",
      },
      {
        fname: "Bhavya",
        lname: "Chhabra",
        role: "ML",
        image: "bhavya",
        github: "bhavya1600",
        linkedin: "bhavya-chhabra-1600",
      },
      {
        fname: "Devansh",
        lname: "Goswami",
        role: "MANAGER",
        image: "devansh",
        github: "",
        linkedin: "devansh-goswami-74590a187",
      },
      {
        fname: "Gayathri",
        lname: "Seetharaman",
        role: "BLOCKCHAIN & ML",
        image: "gayathri",
        github: "Gayathri621",
        linkedin: "gayathri-seetharaman-964986158",
      },
      {
        fname: "Himanshu",
        lname: "Tiwari",
        role: "CORPORATE",
        image: "himanshu",
        github: "",
        linkedin: "",
      },
      {
        fname: "Karan",
        lname: "Sharma",
        role: "CONTENT",
        image: "karan",
        github: "",
        linkedin: "",
      },
      {
        fname: "Kartik",
        lname: "Mohan",
        role: "ML",
        image: "kartik",
        github: "kartikmohan123",
        linkedin: "kartik-mohan",
      },
      {
        fname: "Rushil",
        lname: "Rai",
        role: "UI",
        image: "rushil",
        github: "rushilrai",
        linkedin: "rushil-rai-07363116a",
      },
      {
        fname: "Sampada",
        lname: "Bareja",
        role: "ANALYTICS",
        image: "sampada",
        github: "",
        linkedin: "sampada-bareja-43930818b",
      },
      {
        fname: "Shubhangi",
        lname: "Soni",
        role: "ML",
        image: "shubhangi",
        github: "ShubhangiSoni1603",
        linkedin: "shubhangi-soni",
      },
      {
        fname: "Sourjayon",
        lname: "Nath",
        role: "GRAPHIC DESIGNER",
        image: "sourjayon",
        github: "insistence-essenn",
        linkedin: "sourjayon-nath-557a43174",
      },
      {
        fname: "Tejas",
        lname: "Chintala",
        role: "ML",
        image: "tejas",
        github: "arcado10",
        linkedin: "tejas-chintala-752918188",
      },
      {
        fname: "Utkarsh",
        lname: "Chaurasia",
        role: "ML",
        image: "utkarsh",
        github: "UtkarshChaurasia",
        linkedin: "utkarsh-chaurasia-a4b76a17b",
      },
      {
        fname: "Yashvardhan",
        lname: "Jagnani",
        role: "WEB DEVELOPMENT",
        image: "yashvardhan",
        github: "jagnani73",
        linkedin: "yashvardhan-jagnani",
      },
    ],
  };

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
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>T</span>HE{" "}
              <span style={{ color: "#6F389F" }}>B</span>OARD.
            </h3>
            {this.state.presidents.map((president) => (
              <PeopleComponent
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
            {this.state.board.map((board) => (
              <PeopleComponent
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
              <span style={{ color: "#6F389F" }}>T</span>HE{" "}
              <span style={{ color: "#6F389F" }}>T</span>EAM.
            </h3>
          </div>
          <div className="row text-center d-block">
            {this.state.members.map((member) => (
              <PeopleComponent
                fname={member.fname}
                lname={member.lname}
                role={member.role}
                image={member.image}
                github={member.github}
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

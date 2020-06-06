import React, { Component } from "react";

import PeopleComponent from "../../components/People/People";

class People extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-lg-9 mx-auto">
          <h1 data-aos="flip-up">People</h1>
          <p>The ones who make our community worth it!</p>
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>T</span>HE{" "}
              <span style={{ color: "#6F389F" }}>B</span>OARD.
            </h3>
            <PeopleComponent
              fname="Avirup"
              lname="Chattaraj"
              role="PRESIDENT"
              image="avirup"
              github="severussnape123"
              linkedin="avirupchattaraj"
            />
            <PeopleComponent
              fname="Hritik"
              lname="Bhandari"
              role="PRESIDENT"
              image="hritik"
              github="hritikbhandari"
              linkedin="hritikbhandari"
            />
          </div>
          <div className="row text-center d-block">
            <PeopleComponent
              fname="Anush"
              lname="Bhatia"
              role="TECHNICAL DIRECTOR"
              image="anush"
              github="anushbhatia"
              linkedin="anush-bhatia-aa500a158"
            />
            <PeopleComponent
              fname="Hariom"
              lname="Palkar"
              role="CORPORATE DIRECTOR"
              image="hariom"
              github="aannuuj"
              linkedin="hariompalkar"
            />
            <PeopleComponent
              fname="Takshil"
              lname=" Mittal"
              role="EVENTS DIRECTOR"
              image="takshil"
              github="takshilmittal"
              linkedin="takshil-mittal"
            />
            <PeopleComponent
              fname="Pratyaksh"
              lname="Bhalla"
              role="EXECUTIVE DIRECTOR"
              image="pratyaksh"
              github="pratyaksh64"
              linkedin="pratyaksh-bhalla-96871b186"
            />
          </div>
          <hr />
          <div className="row text-center d-block">
            <h3 style={{ fontWeight: "700" }}>
              <span style={{ color: "#6F389F" }}>T</span>HE{" "}
              <span style={{ color: "#6F389F" }}>T</span>EAM.
            </h3>
          </div>
          <div className="row text-center d-block">
            <PeopleComponent
              fname="Abhinav"
              lname="Verma"
              role="WEB DEVELOPMENT"
              image="abhinav"
              github="abhinav565"
              linkedin="abhinav-verma-3752701a2"
            />
            <PeopleComponent
              fname="Abhishek"
              lname="Saxena"
              role="ML"
              image="abhishek"
              github="saxenabhishek"
              linkedin="abhibored"
            />
            <PeopleComponent
              fname="K."
              lname="Aditya"
              role="ML"
              image="aditya"
              github="i-am-aditya"
              linkedin="iamadityak"
            />
            <PeopleComponent
              fname="Akshat"
              lname="Anand"
              role="BLOCKCHAIN & ML"
              image="akshat"
              github="cipheraxat"
              linkedin="akshatanand1999"
            />
            <PeopleComponent
              fname="Bhavya"
              lname="Chhabra"
              role="ML"
              image="bhavya"
              github="bhavya1600"
              linkedin="bhavya-chhabra-1600"
            />
            <PeopleComponent
              fname="Devansh"
              lname="Goswami"
              role="MANAGER"
              image="devansh"
              github=""
              linkedin="devansh-goswami-74590a187"
            />
            <PeopleComponent
              fname="Gayathri"
              lname="Seetharaman"
              role="BLOCKCHAIN & ML"
              image="gayathri"
              github="Gayathri621"
              linkedin="gayathri-seetharaman-964986158"
            />
            <PeopleComponent
              fname="Himanshu"
              lname="Tiwari"
              role="CORPORATE"
              image="himanshu"
              github=""
              linkedin=""
            />
            <PeopleComponent
              fname="Karan"
              lname="Sharma"
              role="CONTENT"
              image="karan"
              github=""
              linkedin=""
            />
            <PeopleComponent
              fname="Kartik"
              lname="Mohan"
              role="ML"
              image="kartik"
              github="kartikmohan123"
              linkedin="kartik-mohan"
            />
            <PeopleComponent
              fname="Rushil"
              lname="Rai"
              role="UI"
              image="rushil"
              github="rushilrai"
              linkedin="rushil-rai-07363116a"
            />
            <PeopleComponent
              fname="Sampada"
              lname="Bareja"
              role="ANALYTICS"
              image="sampada"
              github=""
              linkedin="sampada-bareja-43930818b"
            />
            <PeopleComponent
              fname="Shubhangi"
              lname="Soni"
              role="ML"
              image="shubhangi"
              github="ShubhangiSoni1603"
              linkedin="shubhangi-soni"
            />
            <PeopleComponent
              fname="Sourjayon"
              lname="Nath"
              role="GRAPHIC DESIGNER"
              image="sourjayon"
              github="insistence-essenn"
              linkedin="sourjayon-nath-557a43174"
            />
            <PeopleComponent
              fname="Tejas"
              lname="Chintala"
              role="ML"
              image="tejas"
              github="arcado10"
              linkedin="tejas-chintala-752918188"
            />
            <PeopleComponent
              fname="Utkarsh"
              lname="Chaurasia"
              role="ML"
              image="utkarsh"
              github="UtkarshChaurasia"
              linkedin="utkarsh-chaurasia-a4b76a17b"
            />
            <PeopleComponent
              fname="Yashvardhan"
              lname="Jagnani"
              role="WEB DEVELOPMENT"
              image="yashvardhan"
              github="jagnani73"
              linkedin="yashvardhan-jagnani"
            />
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default People;

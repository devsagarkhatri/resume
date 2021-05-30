import React, { Component } from "react";
import Grid from "./Grid";
import "./about.css";
import "./../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { getTech } from "./AboutData.js";
import { getCert } from "./AboutData.js";

class About extends Component {
  state = {
    techs: getTech(),
    certs: getCert(),
  };

  render() {
    return (
      <div className="aboutFull main_wrap row">
        <div className="col-sm-4 bg-about"></div>
        <div className="col-sm-8 bg-dark">
          <div className="backTextAb">About</div>
          <div className="z2">
            <div className="heading">About</div>
            <div className="section">
              I'm currently pursuing my Masters degree in Computer Applications
              from Madan Mohan Malaviya University of Technology, Gorakhpur. I'm
              keen about Technology, hence is easily motivated to develop
              projects in various fields to try and learn.
              {"  "}
              <a
                href="https://media-exp1.licdn.com/dms/document/C4E2DAQHcS7wWz4CN2g/profile-treasury-document-pdf-analyzed/0/1622403049414?e=1622491200&v=beta&t=niYoTx60TWQ5xeXvLnMwwQ4ZCqgRP-REs9rAqhJVSS0"
                target="_blank"
                style={{ color: "lightblue" }}
              >
                Download my resume here.
              </a>
            </div>
            <br />

            <br />
            <br />
            <br />
            <div className="Languages">
              <div className="heading1">Technologies</div>
              <br />
              <br />
              <div className="row">
                <Grid data={this.state.techs} />
              </div>
            </div>
            <br />
            <br />
            <div className="Certify">
              <div className="heading1">Certified By</div>
              <br />
              <br />
              <div className="row">
                <Grid data={this.state.certs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      // var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
      <div id="About" className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r to-green-400 from-blue-500">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">{}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
        <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="500px"
                    width="500px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>
        </div>
        <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
    );
  }
}

export default About;

import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        // const mainTechnologies = work.mainTech;
        const responsibilities = work.responsibilities
        const icon = work.icon;

        var responsibile = responsibilities.map((technology, i) => {
          return (
            
              <ul class="list-disc list-inside">
                <li key={i}>{technology}</li>
              </ul>
              
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{
              background: "white",
              color: "#000",
              textAlign: "center",
            }}
            icon={<i className={icon}></i>}
            key={i}
          >
            {/* <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div> */}

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.title}
              
            </h4>
            <h6
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.years}
              
            </h6>
            <div style={{ textAlign: "left", marginTop: "15px", marginBottom: "15px"}}>{tech}</div>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {responsibile}
            </h5>
            
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="experience">
        <div className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r to-green-400 from-blue-500">
        <div className="col-md-12 mx-auto ">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto ">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "white",
                color: "black",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
        </div>
      </section>
    );
  }
}

export default Experience;

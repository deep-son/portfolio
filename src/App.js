import React, { Component } from "react";
import "./App.scss";
// import Top from "./components/Top";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import shared_data from "./public/portfolio_shared_data.json";
import resume_data from "./public/res_primaryLanguage.json";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount() {
    this.loadSharedData();
  }

  loadSharedData() {
    this.setState({ sharedData: shared_data, resumeData:resume_data });
  }

  render() {
    return (
      
      <div>
        {/* <Top/> */}
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        {/* <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        /> */}
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;

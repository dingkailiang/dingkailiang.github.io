import React, { Component } from 'react';
import HeaderBar from "./HeaderBar"
import PersonalInfo from "./PersonalInfo"
import WorkingExperience from "./WorkingExperience"
import Education from "./Education"
import Projects from "./Projects"
import Skills from "./Skills"
import ContactMe from "./ContactMe"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <PersonalInfo></PersonalInfo>
        <WorkingExperience></WorkingExperience>
        <Education></Education>
        <Projects></Projects>
        <Skills></Skills>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

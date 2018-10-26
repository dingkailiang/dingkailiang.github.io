import React, { Component } from 'react';
import data from "./json/Education.json"
class Education extends Component { 
    constructor(props){
        super(props);
        this.state = data;
    }
    render() {
      return (
        <section className="resume-section with-bg spad" id="education">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-7 offset-xl-2">
                        <div className="section-title">
                            <h2>{this.state.title}</h2>
                        </div>
                        <ul className="resume-list">
                        {
                            this.state.schools.map((s,i)=>(
                                <li key={i}>
                                    <h2>{s.finishYear}</h2>
                                    <h3>{s.degree}</h3>
                                    <h4>{s.name}</h4>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default Education;
  
import React, { Component } from 'react';
import data from "./json/WorkingExperience.json"
class WorkingExperience extends Component { 
    constructor(props){
        super(props);
        this.state = data;
    }
    render() {
      return (
        <section className="resume-section spad" id="experience">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-7 offset-xl-2">
                        <div className="section-title">
                            <h2>{this.state.title}</h2>
                        </div>
                        <ul className="resume-list">
                        {
                            this.state.experiences.map((e,i)=>(
                                <li key={i}>
                                    <h2>{e.title}</h2>
                                    <h3>{e.period}</h3>
                                    <h4>{e.company}</h4>
                                    {
                                        e.contributes.map((c,i)=>(
                                            <p key={i}>•	{c}</p>
                                        ))
                                    }
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
  
  export default WorkingExperience;
  
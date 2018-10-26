import React, { Component } from 'react';
import data from "./json/Skills.json"
class Skills extends Component { 
    constructor(props){
        super(props);
        this.state = data;
    }

    render() {
      return (
    	<section className="skill-section with-bg spad pb-0" id="skills">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                        {
                            Object.entries(this.state).map(([key,val])=>(
                                <div key={key}>
                                    <div className="row category mb-3">
                                        <h3>{key}:</h3>
                                    </div>
                                    <div className="row icons">
                                    {
                                        val.map((s,i)=>(
                                            <div key={i} className="skill-icon">
                                                <i className={s.icon}></i>
                                                <p>{s.name}</p>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default Skills;
  
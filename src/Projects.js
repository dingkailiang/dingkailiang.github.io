import React, { Component } from 'react';
import data from "./json/Projects.json"
class Projects extends Component { 
    constructor(props){
        super(props);
        this.state = data;
    }

    setBg(url){
        return {
            "backgroundImage" : `url(${url})`
        }
    }
    render() {
      return (
        <section className="portfolio-section spad pb-0" id="projects">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-md-8 offset-xl-2 ">
                        <div className="section-title">
                            <h2>{this.state.title}</h2>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-right">
                        <a href={this.state.repositories} className="site-btn mb-5">See All Projects</a>
                    </div>
                </div>
                <div className="portfolio-warp offset-xl-2">
                    <div className="row">
                    {
                        this.state.projects.map((p,i)=>(
                            <div key={i} className="col-xl-3 col-lg-6 col-md-12">
                                <div className="portfolio-item">
                                    <a href={p.target} className="set-bg port-pic" style={this.setBg(p.img)}></a>
                                    <h2>{p.name}</h2>
                                    <h6>{p.finishTime}</h6>
                                    {
                                        p.contributes.map((c,i)=>(
                                            <p key={i}>•	{c}</p>
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
  
  export default Projects;
  
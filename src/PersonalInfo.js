import React, { Component } from 'react';
import data from "./json/PersonalInfo.json"
class PersonalInfo extends Component { 
    constructor(props){
        super(props);
        this.state = data;
    }
    render() {
      return (
    	<section className="hero-section spad">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="hero-text">
                                    <h2>{this.state.name}</h2>
                                    <p className="ml-5">{this.state.description}</p>
                                </div>
                                <div className="hero-info">
                                {
                                    Object.entries(this.state.infos).map(([key,val]) => (
                                        <div  key={key}>
                                            <h2>{key}</h2>
                                            <ul className="ml-5">
                                            {
                                                Object.entries(val).map(([key,val])=>(
                                                    <li key={key}><span>{key}</span>{val}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                    ))
                                }
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
  
  export default PersonalInfo;
  
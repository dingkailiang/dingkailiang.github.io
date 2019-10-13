import React, { Component } from 'react';
import data from "./json/HeaderBar";
class HeaderBar extends Component { 
    constructor(props){
        super(props)
        this.state = data;
    }
    render() {
      return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{this.state.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		        </button>    
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {this.state.navs.map((nav_item,i)=> 
                            <li className="nav-item" key={i}>
                                <a className="nav-link" href={nav_item.target}>{nav_item.name}</a>
                            </li>)
                        }
                    </ul>
                    <ul className="navbar-nav">
                    {
                        this.state.toolbar.map((nav_item,i)=>{
                            switch(nav_item.type){
                                case "link":
                                    return (
                                        <li className="nav-item" key={i}>
                                            <a className="nav-link" href={nav_item.target}><i className={nav_item.icon}> {nav_item.name}</i></a>
                                        </li>)
                                case "dropdown":
                                    return (
                                    <li className="nav-item dropdown" key={i}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className={nav_item.icon}></i> {nav_item.name}
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        {
                                            nav_item.menu.map((nav_item,i)=>{
                                                switch (nav_item.type){
                                                    case "download":
                                                        return (
                                                            <a key={i} className="dropdown-item" href={nav_item.target} download><i className={nav_item.icon}></i> {nav_item.name}</a>
                                                        )
                                                    case "divider":
                                                        return (<div key={i} className="dropdown-divider"></div>)
                                                    default:
                                                        return (<span></span>)
                                                }
                                            
                                            })
                                        }
                                    </div>
                                </li>)
                                default:
                                    return (<span></span>)
                            }
                            
                        })
                    }
                    </ul>
                </div>
            </nav>
        </header>
      );
    }
  }
  
  export default HeaderBar;
  
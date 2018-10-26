import React, { Component } from 'react';
class Footer extends Component { 
    render() {
      return (
        <footer className="footer-section">
            <div className="container text-center">
                <div className="copyright">
                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>     
                </div>
            </div>
        </footer>
      );
    }
  }
  
  export default Footer;
  
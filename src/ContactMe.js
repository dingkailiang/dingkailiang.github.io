import React, { Component } from 'react';
class ContactMe extends Component { 
    render() {
      return (
        <section className="contact-section spad" id="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="section-title">
                            <h2>Contact Me</h2>
                        </div>
                        <form className="contact-form" action="https://formspree.io/dingkailiang@gmail.com" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name" name="name"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="E-mail" name="_replyto"/>
                                </div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Subject" name="subject"/>
                                    <textarea placeholder="Message" name="message"></textarea>
                                </div>
                            </div>
                            <div className="text-md-right">
                                <button type="submit" value="Send" className="site-btn">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default ContactMe;
  
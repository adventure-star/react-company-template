import React from 'react';

import '../About.css';

import business from '../media/business.jpg';


const About = () => {
  return (
    <div className="about-page">
      <header id="page-header">
        <div className="about-overlay"> 
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center ">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h1>What We Do</h1>
              <p>Sandbox Tech is a research and technology company dedicated to the analysis and advancement of technology. The company was founded on the principles of determination and passion for knowledge.</p>              
              <p></p>
            </div>
            <div className="col-md-6">
              <img src={business} alt="business" className="d-none d-md-block about-img img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section>

      <section id="icon-boxes" className="p-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-building"></i>
                  <h3>Build</h3>
                  Create the future of technology.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-flask"></i>
                  <h3>Discover</h3>
                  Make progress and change through research.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-comments"></i>
                  <h3>Collaborate</h3>
                  Discuss and research with leading experts.
                </div>
              </div>
            </div> 
          </div>

          <div className="row second-row-icons">
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-line-chart"></i>
                  <h3>Growth</h3>
                  Top 5 in fastest growing technology companies.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-lightbulb-o"></i>
                  <h3>Innovation</h3>
                  Develop new methods and ideas.
                </div>
              </div>
            </div> 
            <div className="col-md-4">
              <div className="card bg-danger text-center text-white">
                <div className="card-block">
                  <i className="fa fa-usb"></i>
                  <h3>Advancement</h3>
                  Dedicated to defining and revolutionizing technology.
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default About;
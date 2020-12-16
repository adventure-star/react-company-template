import React from 'react';

import Gallery from './Gallery';

import graph from '../media/graph.jpeg';

const Landing = () => {
  return (
    <div id="landing">
      <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Sandbox Tech</h1>
                <p className="lead">Research &amp; Technology</p>
                <a href="/about" className="btn btn-primary">Learn More <span><i className="fa fa-chevron-right"></i></span></a>
              </div>
            </div>

          </div>
          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <h1 className="display-3">Progress</h1>
                <p className="lead">Work with some of the most advanced technology</p>
                <p>One of the top contributors in the field or research and technology</p>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block">
                <h1 className="display-3">Community</h1>
                <p className="lead">Join our community and be surrounded by people passionate about technology</p>
              </div> 
            </div>
          </div>
          
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </section>

      <section id="home-icons" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-wrench mb-2"></i>
              <h3>Development</h3>
              <p>Making advancements in the field of technology and providing unparalled information on the latest research</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-cogs mb-2"></i>
              <h3>Solutions</h3>
              <p>Specialize in problem solving and providing analytical services in the largest growing industry.</p>
            </div>
            <div className="col-md-4 mb-4 text-center">
              <i className="fa fa-commenting-o mb-2"></i>
              <h3>Support</h3>
              <p>Align with the leading experts in technology. Join our team and be surrounded by people with the desire for excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-heading">
        <div className="home-overlay p-5">
          <div className="row">
            <div className="col">
              <div className="container pt-3">
                <h1>Are You Ready To Reach New Heights?</h1>
                <p className="d-none d-sm-block">Sandbox Tech is the leading company in research and technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <h3>Our Mission</h3>
              <p>Here at Sandbox Tech our goal is the pursuit of cutting-edge technology and growing the industry.</p>
              <a href="/about" className="btn btn-outline-danger btn-lg mb-2">Learn More</a>
            </div>
            <div className="col-sm-6">
              <img src={graph} className="graph img-fluid" alt="graph"/>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-component">
        <Gallery />
      </section>

      <section id="newsletter" className="text-center p-4 bg-dark text-white">
        <div className="container">
          <div className="row newsletter-row">
            <div className="col">
              <h1>Signup For Our Newsletter</h1>
              <p>Stay up to date with the latest groudbreaking advancements</p>
              <form action="" className="form-inline justify-content-center">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Name" />
                <label className="sr-only" htmlFor="Email">Email</label>
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Enter Email" />
                <button className="btn btn-primary" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  
    </div>
  )
}

export default Landing;
import React, { Component } from 'react';

import blogInfo from '../media/bloginfo.json';

import city from '../media/blogimages/city.jpeg';
import achieve from '../media/blogimages/achieve.jpeg';
import work from '../media/blogimages/work.jpeg';

let images = [
  city,
  achieve,
  work
]

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: blogInfo
    }
  }
  render() {

    return (
      <div className="card-deck post-row justify-content-center">
        {
          this.state.blog.map((info, index) => {
            return (
              <div key={index} className="card">
                <img className="card-img-top img-fluid blog-image" src={images[index]} alt={info.title} />
                <div className="card-block p-1">
                  <h4 className="card-title">{info.title}</h4>
                  <small className="text-muted">Written by {info.author}</small>
                  <hr/>
                  <p className="card-text p-2">{info.post}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}  
export default BlogPost;
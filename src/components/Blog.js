import React from 'react';

import '../Blog.css';

import BlogCards from './BlogCards';

const Blog = () => {
  return (
    <div>
      <header id="blog-header">
        <div className="blog-overlay"> 
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center">
                <h1>Blog</h1>
                <p>See what is happening</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="blog" className="p-5">
        <div className="container">
          <BlogCards />
        </div> 
      </section>
    </div>
  )
}

export default Blog;
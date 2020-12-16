import React, { Component } from 'react';

import BlogPost from './BlogPost';


class BlogCards extends Component {
  render() {
    return (
      <div className="container blog-cards">
        <BlogPost />
      </div>
    );
  }
}

export default BlogCards;
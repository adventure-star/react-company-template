import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <div>
            <Route path exact="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />            
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

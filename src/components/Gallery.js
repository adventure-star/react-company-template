import React, { Component } from 'react';

import gallery1 from '../media/galleryImages/CEO.jpeg';
import gallery2 from '../media/galleryImages/discussion.jpeg';
import gallery3 from '../media/galleryImages/manager.jpeg';
import gallery4 from '../media/galleryImages/handshake.jpeg';
import gallery5 from '../media/galleryImages/meeting.jpeg';
import gallery6 from '../media/galleryImages/business-table.jpeg';

let images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6
];

class Gallery extends Component {
  render() {

    return (
      <div className="container gallery-container py-5">
        <h1 className="text-center">Photo Gallery</h1>
        <p className="text-center">Checkout our photos</p>
        <div className="row gallery-row">
            {
              images.map((image, index) => {
                
                return (
                  
                  <div key={index} className="col-md-4 gallery-image-column">
                    <img className="gallery-image" data-toggle="modal" data-target="#myModal" src={image} alt={index}/>
                  </div>


                )
              })
              
            }

            
        </div>
      </div>
    );
  }
}

export default Gallery;
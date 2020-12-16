import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container justify-content-center">
        <h1 className="py-5">Get in touch with us</h1>
        <div className="row">
          <div className="col">
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control my-2" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control my-2" placeholder="Last name" />
              </div>
            </div>
            <div className="row">
              <div class="col">
                <input type="text" className="form-control my-2" placeholder="Email" />
              </div>
              <div className="col">
                <input type="text" className="form-control my-2" placeholder="Phone number" />
              </div>
            </div>
            
            <textarea name="" id="" className="form-control my-2" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="btn btn-success btn-lg" type="submit">Submit</button>
          </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
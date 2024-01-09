import React from 'react'
import Notes from './Notes';
const About = () => {

  return (
    <div>
      <div className="container my-3">
        <form className="my-3">
        <h2 className="mx-3">Add notes</h2>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" className="btn btn-primary my-3">Primary</button>
          </div>
        </div>
        </form>
      </div>
      <Notes/>
      
    </div>
  );
};

export default About;

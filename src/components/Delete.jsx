import React from 'react';
import Navigation from './Navigation';

const Delete = () => {
  return (
    <div>
      <Navigation />
      <div style={{
        backgroundImage: `url("https://media.istockphoto.com/id/637508072/photo/blue-dotted-grunge-texture-background.jpg?s=612x612&w=0&k=20&c=U19ml5ebklh5wesrWvEWBvLuo6fpotJuRU2P6HoOnxw=")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px'
      }}  className="container d-flex justify-content-center align-items-center" >
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 bg-light p-4 rounded shadow">
          <h2 className="text-center">Delete Item</h2>
          <div className="mb-3">
            <label htmlFor="deleteName" className="form-label">Name</label>
            <input type="text" className="form-control" id="deleteName" placeholder="Enter item name" />
          </div>
          <div className="text-center">
            <button className="btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;

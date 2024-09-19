import React from 'react'
import {FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Notfound() {
  
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl">Oooops!!! 404</h1>
          <p  className='my-8'>Page Not Found</p>
          <Link to='/' className="btn btn-primary btn-lg btn-ghost btn-outline"><FaHome />Back Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound
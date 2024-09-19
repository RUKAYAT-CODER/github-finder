import React from 'react'
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa'

function Navbar() {
  return (
    <div>
      <nav className="navbar shadow-lg mb-12  text-neutral ">
        <div className="container mx-auto">
          <div className="flex-col px-2 mx-2">
            <Link to={"/"} className="font-bold align-middle text-lg text-gray-900">
              <FaGithub className="inline pr-2 text-3xl" /> Github Finder
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
              <Link to='/' className="btn btn-ghost btn-sm rounded">Home</Link>
              <Link  to='/about'className="btn btn-ghost btn-sm rounded">About</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar

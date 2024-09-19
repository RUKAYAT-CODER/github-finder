import React from 'react'
import { useState, useContext } from 'react';
import GithubContext from "../../Context/GithubContext";

const UserSearch = () => {
 
  const { users, text, setText, clearUsers , handleSubmit} = useContext(GithubContext)
  
  const onHandleChange = (e) => {
    setText(e.target.value)
  }

  
 

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-2 gap-8">
      <div className="">
        <div className="form-control">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="search"
                value={text}
                id="search"
                className=" w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search.."
                onChange={onHandleChange}
              />

              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </form>
        </div>

        {users.length > 0 && (
          <div className="">
            <button className="btn btn-ghost btn-lg mt-2 " onClick={clearUsers}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch

import React from 'react'
import {useEffect,  useState, useContext} from 'react'
import Spinner from '../Layouts/Spinner'
import GithubContext from '../../Context/GithubContext'
import User from './User'



const UsersResults = () => {
  const { loading, users, fetchUsers } = useContext(GithubContext)

  //     useEffect(() => {
  //    fetchUsers()
  // }, [])

  
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <ul className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols -3 md:grid-cols-2">
            {users.map((user) => (
              <User key={user.id} user={user} />
              
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UsersResults


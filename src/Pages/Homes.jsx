import React from 'react'
import UsersResults from '../Component/users/UsersResults'
import UserSearch from '../Component/Layouts/UserSearch'

function Homes() {
  const githubkey = process.env.REACT_APP_GITHUBKEY
  return (
    
    <div>
      {/* Search componet goes in here */}
      <UserSearch />
      <h1 className="font-bold text-4xl mb-4">Welcome to Github Finder</h1>
      <UsersResults />
    </div>
  )
}

export default Homes

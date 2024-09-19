import React from 'react'


function User({user}) {
  return (
    <div>
      
      <li> <img src={user.avatar_url} alt="user-image" className="w-6 h-6 rounded-full"/> {user.login} </li>
    </div>
  )
}

export default User

import React from 'react'
import { useState, useEffect, useReducer } from 'react'


function Counter() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')
  
  
  return (
    <div>
      <h1 className="my-6 font-bold">Simple Counters :{count}</h1>
      {error && <h1>{error}</h1>}
      
      
{/* 
      <button
        onClick={() => setCount(count < 5 ? count + 1 : "Limit Exceeded")}
        className="btn btn-outline btn-ghost mr-6"
      >
        Increment
      </button> */}
      <button
        onClick={() => setCount(count > 0 ? count - 1 : "Limit Exceeded")}
        className="btn btn-outline btn-ghost"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter

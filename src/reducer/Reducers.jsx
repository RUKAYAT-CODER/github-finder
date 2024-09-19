import React from 'react';
import { useReducer } from 'react';


const initialState = { count: 0, error: null };


function reducer (state, action) {

  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1
      }

    case "Decrement":
      return {
        count: state.count - 1 
      }
    case "Reset":
      return {
        count:initialState.count
      }
    default:
      return state;

    // return {
    //  hase? state.count : newcount;
    // haserror ? 'Max Limit Reached' : null;
    // const newcount = state.count + 1
    // const haserror = newcount > 5
  }
}

function Reducers() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Simple Counter!</h1>
      <p>Count: {state.count}</p>
      <button className="btn btn-outline btn-ghost mr-6" onClick={() => dispatch({type: 'Increment' })}>
        Increment
      </button>
      <button className="btn btn-outline btn-ghost mr-6" onClick={() => dispatch({type: 'Decrement'})}>
        Decrement
      </button>
      <button className="btn btn-outline btn-ghost mr-6" onClick={() => dispatch({type: 'Reset'})}>
        Reset
      </button>
      {/* Display error message if there's any */}
      {/* {state.error && <p className="text-[red]">{state.error}</p>} */}
    </div>
  );
}

export default Reducers
import { createContext, useReducer, useState } from "react";
import GithubReducer from "./GithubReducer";
// import UserSearch from "./UserSearch"

const GithubContext = createContext()
const initialState = {
  users: [],
  loading: false,
  error: null
};

export const GithubProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(GithubReducer, initialState)
   const [text, setText] = useState("");
   
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please type something");
    } else {
      fetchUsers();
      setText("");
    }
  };
  const setLoading = () => {
     dispatch({ type: "GETLOADING" });
  }
    
    const clearUsers = () =>{
     dispatch({type:'CLEAR'})
  }
const params = new URLSearchParams({q:text})
//search users same as fetch usrs
  const fetchUsers = async () => {
    try {
     setLoading()
      const response = await fetch(
        `${process.env.REACT_APP_GITHUBKEY_ENDPOINT}/search/users?${params}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUBKEY}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      const { items } =data

      dispatch({ type: "FETCHUSERS", payload: items });
      
      
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.log(error);
    }
   
  };

   
  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        text,
        setText, fetchUsers, handleSubmit,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}


export default GithubContext




  const GithubReducer = (state, action) => {
  // const { type, payload } = action
  switch (action.type) {
    case 'FETCHUSERS':
      return {
        ...state, users:action.payload, loading:false, 
      }
    case 'ERROR': 
      return {
        ...state, users: [],
        loading: false,
        error: action.payload
    }
    case 'GETLOADING' :
      return {
        ...state, loading: true
      }
    case 'CLEAR':
      return {
        ...state, users:[]
      }
  
    default:
      return state
  }
}
export default GithubReducer
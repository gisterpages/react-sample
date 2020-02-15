import userState from '../state/userState'
  
  const userReducer = (state = userState, action) => {
    switch (action.type){
      case "GET_USERS": 
        return state.users
      case "ADD_USER": 
        state = {
          ...state,
          users: [...state.users, action.payload],
          lastRandomUsers: [...state.lastRandomUsers, action.payload]
        }
        break;
      case "GET_RANDOM_USER": 
      let userLength = state.lastRandomUsers.length> 0 ? state.lastRandomUsers.length : state.users.length
      let index = Math.floor(Math.random() * userLength)
      state={
        ...state,
        randomUser: state.lastRandomUsers.length> 0 ? state.lastRandomUsers[index] : state.users[index],
        lastRandomUsers: state.lastRandomUsers.length> 0 ? [...state.lastRandomUsers.slice(0, index), ...state.lastRandomUsers.slice(index+1)] : [...state.users.slice(0, index), ...state.users.slice(index+1)]
      }
        
        break;
      case "DELETE_USER": 
        let deleteIndex = action.payload
        state = {
          ...state,
          users: [
            ...state.users.slice(0, deleteIndex), 
            ...state.users.slice(deleteIndex+1)
          ],
          lastRandomUsers: [],
          randomUser: {}
        }
        break;
      default: 
        return state
    }
    return state
  }

  export default userReducer
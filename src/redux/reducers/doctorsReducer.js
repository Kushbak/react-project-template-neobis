const initialState = {
  doctors: [],
  isLogedIn: false,
}

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'doctors/get':
      return {
        ...state,
        doctors: action.payload
      }
    case 'login':
      return {
        ...state,
        isLogedIn: true
      }
    case 'logout':
      return {
        ...state,
        isLogedIn: false
      }
    default:
      return state
  }
}

export default doctorsReducer
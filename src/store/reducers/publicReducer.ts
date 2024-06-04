const publicReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case 'LOGGING_OUT':
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
}

export default publicReducer;
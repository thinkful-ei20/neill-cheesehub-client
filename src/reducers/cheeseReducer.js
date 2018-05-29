const initialState = {
  cheeses: []
};

const cheeseReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_CHEESES_SUCCESS':
    return {
        ...state,
        cheeses: action.cheeses
    };
    
  default:
    return state;
  }
};

export default cheeseReducer;
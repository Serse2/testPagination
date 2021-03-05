const initialState = {
    people: [],
    pageSize: 4,
    currentPage: 1
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PEOPLE': {
        return {
            ...state,
            people: action.data
        };
      }
      case 'SET_CURRENT_PAGE': {
        return {
            ...state,
            currentPage: action.data
        };
      }
      case 'SET_PREV_PAGE': {
        return {
            ...state,
            currentPage: state.currentPage - action.data
        };
      }
      case 'SET_NEXT_PAGE': {
        return {
            ...state,
            currentPage: state.currentPage + action.data
        };
      }
      default: {
        return state;
      }
    }
  };
export default dataReducer
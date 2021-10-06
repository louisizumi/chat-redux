import { GET_MESSAGES } from '../actions';

const getMessageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default getMessageReducer;

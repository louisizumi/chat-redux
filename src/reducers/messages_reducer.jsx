import { GET_MESSAGES, CREATE_MESSAGE } from '../actions';

const MessagesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const stateCopy = state.slice(0);
      stateCopy.push(action.payload);
      return stateCopy;
    default:
      return state;
  }
};

export default MessagesReducer;

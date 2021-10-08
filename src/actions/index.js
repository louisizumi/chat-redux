export const GET_MESSAGES = 'GET_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

const url = "https://wagon-chat.herokuapp.com/";

const getMessages = (channel) => {
  const promise = fetch(`${url}${channel}/messages`)
    .then(r => r.json());

  return {
    type: GET_MESSAGES,
    payload: promise
  };
};

const createMessage = (channel, author, content) => {
  const body = {
    author: author,
    content: content
  };
  const promise = fetch(`${url}${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
};

export { getMessages, createMessage };

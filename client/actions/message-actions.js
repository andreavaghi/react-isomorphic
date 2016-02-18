export const UPDATE_MESSAGE = 'update-message';
export const ADD_MESSAGE = 'add-message';

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message
  };
}

export function addMessage(message) {
  return { type: ADD_MESSAGE };
}

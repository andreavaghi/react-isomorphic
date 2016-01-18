import * as actions from 'actions/message-actions';
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (socket && action.type === actions.ADD_MESSAGE) {
      let messages = store.getState().messages;
      socket.emit('message', messages[messages.length -1]);
    }

    return result;
  };
}

export default function (store) {
  socket = io.connect(`${location.protocol}//${location.host}`);

  socket.on('start', data => {
    store.dispatch(actions.setUserId(data.userId));
  })

  socket.on('message', data => {
    store.dispatch(actions.addResponse(data));
  });
}

import React, { Component } from 'react';

class MessageList extends Component {
  const messageItems = this.props.messages.map((message, index) => {
    return (
      <li key={`message-${index}`}>
        {message.text}
      </li>
    )
  });

  render() {
    return (
      <ol className="message-list">
        {messageItems}
      </ol>
    )
  }
}

export default MessageList;

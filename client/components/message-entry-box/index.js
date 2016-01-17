import React, {Component} from 'react';

class MessageEntryBox extends Component {
  render() {
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          placeholder='Enter a message...'
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)} />
      </div>
    );
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleKeyPress(e) {
    if(e.which === 13) {
      this.props.onSubmit();
      e.preventDefault();
    }
  }
}

export default MessageEntryBox;

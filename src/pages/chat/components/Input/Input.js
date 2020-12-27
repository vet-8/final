import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <div>
    <form className="form-chat">
      <input
        className="kolom-teks-chat"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
    </form>
    <button className='sendButton' onClick={e => sendMessage(e)}>Send</button>
  </div>
)

export default Input;
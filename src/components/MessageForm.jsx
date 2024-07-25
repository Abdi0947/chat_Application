import React, { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import './MessageForm.css';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatID, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatID, { text });
      setValue('');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatID); // Call isTyping on every character change
  };

  const handleUpload = (event) => {
    const file = event.target.files[0]; // Access the first selected file
    if (file) {
      sendMessage(creds, chatID, { files: [file], text: '' });
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="message-input"
          placeholder="Type a message..."
          value={value}
          onChange={handleChange}
        />
        
        <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined className="picture-icon" />
          </span>
        </label>
        <input
          type="file"
          accept="image/*" // Restrict file types (optional)
          id="upload-button"
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
        <button  type='submit' className='send-button'>
        <SendOutlined className = "send-icon"/>
      </button>
      </div>
      
    </form>
  );
};

export default MessageForm;

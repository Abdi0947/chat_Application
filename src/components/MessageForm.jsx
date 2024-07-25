import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const { chatID, creds } = props;
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) {
            sendMessage(creds, chatID, { text });
        }
        setValue('');
    }
    const handleUpload = e => {
        sendMessage(creds, chatID, { files: e.target.files, text: '' });
    }
    const handleChange = (e) => {
        setValue(e.target.value);
        isTyping(props, chatID);
    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input onSubmit={handleSubmit} type="text" value={value} placeholder="Send a Message" onChange={handleChange} className="message-input" />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }} onChange={handleUpload} />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm
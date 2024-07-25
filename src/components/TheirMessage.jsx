import React from 'react';
import './TheirMessage.css';
const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const attachmentUrl = message?.attachments?.[0]?.file; // Access the first attachment URL

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
      )}
      {attachmentUrl ? (
        <img
          src={attachmentUrl}
          alt="Message attachment"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' }}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;

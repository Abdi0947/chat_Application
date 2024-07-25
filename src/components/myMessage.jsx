import React from 'react';

const MyMessage = ({ message }) => {
  // Handle potential errors and empty attachments
  const attachmentUrl = message?.attachments?.[0]?.file; // Access the first attachment URL

  if (attachmentUrl) {
    return (
      <div className="message my-message" style={{ float: 'right', marginRight: '18px' }}>
        <img src={attachmentUrl} alt="Message attachment" />
      </div>
    );
  } else {
    // Render text message
    return (
      <div className="message my-message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text}
      </div>
    );
  }
};

export default MyMessage;

import React from 'react';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import MyMessage from './myMessage';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={index} style={{ width: '100%' }}>
          <div className='message-block'>
            {isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className='read-receipts' style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            read-receipts
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {chat && <div className="chat-title">{chat.title}</div>}
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

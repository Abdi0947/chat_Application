import React from 'react';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import MyMessage from './myMessage';
import './chatFeed.css';
const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    // Check if messages exist and is an array before mapping
    return messages && Array.isArray(messages) ? messages.map((message, index) => {
      const isMyMessage = userName === message.sender.username;
      const lastMessage = messages[index - 1];

      return (
        <div key={message.id} className="message-container">
          <div className={`message-block ${isMyMessage ? 'my-message' : 'their-message'}`}>
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage message={message} lastMessage={lastMessage} />
            )}
          </div>
          {isMyMessage && (
            <div className="read-receipts">read-receipts</div>
          )}
        </div>
      );
    }) : (
      <div>No messages yet.</div>
    );
  };

  return (
    <div className="chat-feed">
      {chat && <div className="chat-title">{chat.title}</div>}
      <div className="message-list">{renderMessages()}</div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

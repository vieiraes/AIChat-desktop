import React, { useState } from 'react';
import styled from '@emotion/styled';

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #343541;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const InputContainer = styled.div`
  padding: 20px;
  background-color: #343541;
  border-top: 1px solid #4d4d4f;
`;

const MessageInput = styled.textarea`
  width: 100%;
  padding: 12px;
  background-color: #40414f;
  border: 1px solid #4d4d4f;
  border-radius: 5px;
  color: #fff;
  resize: none;
  min-height: 50px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #5b5c6a;
  }
`;

const Message = styled.div`
  padding: 20px;
  margin: 10px 0;
  background-color: ${props => props.isUser ? '#40414f' : 'transparent'};
  border-radius: 5px;
`;

const ChatArea = () => {
  const [message, setMessage] = useState('');

  return (
    <ChatContainer>
      <MessagesContainer>
        <Message>Hello! How can I help you today?</Message>
        <Message isUser>Can you help me with some code?</Message>
      </MessagesContainer>
      
      <InputContainer>
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              // Handle send message
            }
          }}
        />
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatArea; 
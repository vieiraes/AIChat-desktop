import React from 'react';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #202123;
  border-right: 1px solid #4d4d4f;
  display: flex;
  flex-direction: column;
`;

const NewChatButton = styled.button`
  margin: 8px;
  padding: 12px;
  background-color: transparent;
  border: 1px solid #4d4d4f;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2d2d30;
  }
`;

const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`;

const ChatItem = styled.div`
  padding: 10px;
  margin: 2px 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #2d2d30;
  }
`;

const SettingsButton = styled.button`
  margin: 8px;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid #4d4d4f;

  &:hover {
    background-color: #2d2d30;
  }
`;

const Sidebar = ({ onNewChat, onOpenSettings }) => {
  return (
    <SidebarContainer>
      <NewChatButton onClick={onNewChat}>
        + New Chat
      </NewChatButton>
      
      <ChatList>
        <ChatItem>Chat 1</ChatItem>
        <ChatItem>Chat 2</ChatItem>
      </ChatList>

      <SettingsButton onClick={onOpenSettings}>
        ⚙️ Settings
      </SettingsButton>
    </SidebarContainer>
  );
};

export default Sidebar; 
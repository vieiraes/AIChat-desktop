import React from 'react';
import { createRoot } from 'react-dom/client';
import ModelConfig from './components/ModelConfig';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #343541;
`;

const App = () => {
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <AppContainer>
      <Sidebar 
        onNewChat={() => {}} 
        onOpenSettings={() => setShowSettings(true)} 
      />
      <ChatArea />
      
      {showSettings && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <ModelConfig onClose={() => setShowSettings(false)} />
        </div>
      )}
    </AppContainer>
  );
};

const container = document.getElementById('root');
console.log('Root element found:', container);
const root = createRoot(container);
root.render(<App />); 
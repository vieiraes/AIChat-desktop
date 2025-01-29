import React, { useState } from 'react';
import styled from '@emotion/styled';

const SettingsContainer = styled.div`
  background-color: #2D2D2D;
  border-radius: 8px;
  padding: 20px;
  width: 600px;
  color: #fff;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #404040;
  padding-bottom: 10px;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  color: ${props => props.active ? '#fff' : '#888'};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  background-color: #383838;
  color: #fff;
  border: 1px solid #404040;
  border-radius: 4px;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #383838;
  color: #fff;
  border: 1px solid #404040;
  border-radius: 4px;
  margin: 10px 0;
`;

const SliderContainer = styled.div`
  margin: 20px 0;
`;

const Slider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.primary ? '#0D6EFD' : '#383838'};
  color: #fff;
`;

const ModelConfig = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('MODEL');
  const [modelProvider, setModelProvider] = useState('DEEPSEEK API');
  const [selectedModel, setSelectedModel] = useState('deepseek-coder');
  const [messageCount, setMessageCount] = useState(20);
  const [temperature, setTemperature] = useState(0.7);

  return (
    <SettingsContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
      </div>
      <TabContainer>
        <Tab active={activeTab === 'MODEL'} onClick={() => setActiveTab('MODEL')}>
          🤖 MODEL
        </Tab>
        <Tab active={activeTab === 'DISPLAY'} onClick={() => setActiveTab('DISPLAY')}>
          🖥️ DISPLAY
        </Tab>
        <Tab active={activeTab === 'CHAT'} onClick={() => setActiveTab('CHAT')}>
          💬 CHAT
        </Tab>
        <Tab active={activeTab === 'ADVANCED'} onClick={() => setActiveTab('ADVANCED')}>
          ⚙️ ADVANCED
        </Tab>
      </TabContainer>

      {activeTab === 'MODEL' && (
        <>
          <div>
            <label>Model Provider:</label>
            <Select 
              value={modelProvider}
              onChange={(e) => setModelProvider(e.target.value)}
            >
              <option value="DEEPSEEK API">DEEPSEEK API</option>
              <option value="CLAUDE API">CLAUDE API</option>
            </Select>
          </div>

          <div>
            <label>API Key:</label>
            <Input type="password" placeholder="Enter your API key" />
          </div>

          <div>
            <label>Model:</label>
            <Select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="deepseek-coder">deepseek-coder</option>
              <option value="claude-3-sonnet">claude-3-sonnet</option>
              <option value="claude-3-opus">claude-3-opus</option>
            </Select>
          </div>

          <SliderContainer>
            <label>Max Message Count in Context:</label>
            <Slider
              type="range"
              min="1"
              max="50"
              value={messageCount}
              onChange={(e) => setMessageCount(e.target.value)}
            />
            <span>{messageCount}</span>
          </SliderContainer>

          <SliderContainer>
            <label>Temperature:</label>
            <Slider
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
            <span>{temperature}</span>
          </SliderContainer>

          <ButtonContainer>
            <Button onClick={() => {}}>CANCEL</Button>
            <Button primary onClick={() => {}}>SAVE</Button>
          </ButtonContainer>
        </>
      )}
    </SettingsContainer>
  );
};

export default ModelConfig; 
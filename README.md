# AI Chat Desktop (em desenvolvimento)

Uma aplicação desktop para interagir com modelos de linguagem como Claude AI e DeepSeek, construída com Electron e React.

## 🚀 Funcionalidades

- Interface similar ao ChatGPT
- Suporte para múltiplos modelos de IA:
  - Claude API
  - DeepSeek API
- Configurações personalizáveis:
  - Temperatura do modelo
  - Número máximo de mensagens no contexto
  - Chaves de API configuráveis
- Interface moderna e responsiva
- Histórico de conversas

## 🛠️ Tecnologias

- Electron
- React
- Emotion (Styled Components)
- Webpack
- Electron Builder

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ai-chat-app.git
   cd ai-chat-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o app em modo desenvolvimento
- `npm start` - Inicia o app em modo produção
- `npm run build` - Gera builds para Windows e Linux
- `npm run build:win` - Gera build apenas para Windows
- `npm run build:linux` - Gera build apenas para Linux
- `npm run clean` - Limpa arquivos de build
- `npm run clean:all` - Limpa todos os arquivos gerados e node_modules
- `npm run rebuild` - Limpa tudo e faz o build novamente

## 📦 Build

Para gerar os executáveis:

### Windows
```bash
npm run build:win
```
Gera um arquivo .exe em `dist/`

### Linux
```bash
npm run build:linux
```
Gera arquivos .deb e .AppImage em `dist/`

## 🗂️ Estrutura do Projeto

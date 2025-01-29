const Store = (await import('electron-store')).default;

const store = new Store({
  defaults: {
    modelConfig: {
      provider: 'DEEPSEEK API',
      apiKey: '',
      model: 'deepseek-coder',
      messageCount: 20,
      temperature: 0.7
    },
    displayConfig: {
      theme: 'dark',
      fontSize: 14
    }
  }
});

export default store; 
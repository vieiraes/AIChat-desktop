const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Store = require('electron-store');

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

function createWindow() {
    console.log('Creating window...');
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        backgroundColor: '#343541',
        icon: path.join(__dirname, '../assets/icon.png')
    });

    console.log('Loading file from:', path.join(__dirname, '../renderer/index.html'));
    win.loadFile(path.join(__dirname, '../renderer/index.html'));
    
    // Abrir DevTools em desenvolvimento
    if (process.env.NODE_ENV !== 'production') {
        win.webContents.openDevTools();
    }
    
    // Log de erros
    win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('Failed to load:', errorCode, errorDescription);
    });
}

// IPC handlers
ipcMain.handle('get-settings', () => {
    return store.get('modelConfig');
});

ipcMain.handle('save-settings', (event, settings) => {
    store.set('modelConfig', settings);
    return true;
});

// Log de erros do app
app.on('render-process-gone', (event, webContents, details) => {
    console.error('Render process gone:', details);
});

app.on('child-process-gone', (event, details) => {
    console.error('Child process gone:', details);
});

app.whenReady().then(() => {
    console.log('App is ready');
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
}); 
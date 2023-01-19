const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)

app.on('ready', () => { 
  globalShortcut.register('Control+Shift+I', () => {
    return false;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
const { app, BrowserWindow, shell } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Cliptool - Cross platform clipboard manager",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  win.on('closed', () => {
    win = null
  })

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    shell.openExternal(url);
  })

  win.removeMenu()

  // win.webContents.on("devtools-opened", () => { win.webContents.closeDevTools() })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// click from dock
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
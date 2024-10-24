import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import { fileURLToPath } from 'url';

// If you need __dirname in an ES module:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the React app from the appropriate source
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000/");
    console.log("Running in development mode");
  } else {
    mainWindow.loadFile(path.join(__dirname, 'form-validation/build/index.html'));
    console.log("Running in production mode");
  }

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();
  console.log("DevTools opened");
}

app.on('ready', createWindow);
console.log("Application is ready");


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

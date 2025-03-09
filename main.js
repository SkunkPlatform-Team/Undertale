const { app, BrowserWindow, globalShortcut, Menu } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    fullscreen: true, // Iniciar en fullscreen
    resizable: false, // Bloquear redimensionado
    frame: false, // Ocultar la barra superior
    webPreferences: {
      nodeIntegration: true,
      devTools: false // Bloquear DevTools
    }
  });

  win.loadFile('index.html');

  // 🔹 Minimizar si la app pierde el foco
  win.on('blur', () => win.minimize());

  // 🔹 Volver a fullscreen si se restaura desde la barra de tareas
  win.on('restore', () => win.setFullScreen(true));
  win.on('focus', () => win.setFullScreen(true));

  // 🔹 Bloquear DevTools
  globalShortcut.register('CommandOrControl+Shift+I', () => {});
  globalShortcut.register('F12', () => {});

  // 🔹 Ocultar el menú de la aplicación
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 🔹 En macOS, volver a abrir la ventana si la app sigue activa
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

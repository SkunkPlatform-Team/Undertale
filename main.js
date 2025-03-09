const { app, BrowserWindow, globalShortcut, Menu } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    fullscreen: true, // Iniciar en fullscreen
    resizable: false, // Bloquear redimensionado
    fullscreenable: false, // Evitar salida de fullscreen con ESC
    frame: false, // ❌ Ocultar la barra superior (topbar)
    webPreferences: {
      nodeIntegration: true,
      devTools: false // ❌ Bloquea DevTools
    }
  });

  win.setFullScreen(true);

  win.loadFile('index.html');

  // 🔹 Si la app pierde el foco (presiona tecla Windows o cambia de ventana), se minimiza
  win.on('blur', () => {
    win.minimize();
  });

  // 🔹 Si el usuario toca el ícono de la app en la barra de tareas, la app se maximiza y vuelve a fullscreen
  win.on('restore', () => {
    win.setFullScreen(true);
  });

  win.on('focus', () => {
    win.setFullScreen(true);
  });

  // 🔹 Bloquear atajos de teclado para abrir DevTools
  globalShortcut.register('CommandOrControl+Shift+I', () => {}); // Bloquea Ctrl+Shift+I
  globalShortcut.register('F12', () => {}); // Bloquea F12

  // 🔹 Eliminar el menú de la aplicación para bloquear la topbar
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  // Bloquear atajos después de que la ventana esté lista
  globalShortcut.register('CommandOrControl+Shift+I', () => {});
  globalShortcut.register('F12', () => {});
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

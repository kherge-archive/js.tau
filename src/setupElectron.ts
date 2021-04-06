import is from "electron-is";
import path from "path";
import { BrowserWindow, app } from "electron";

// NOTE: Assume that `__dirname` is the root of the `build/` folder.

/**
 * The application window.
 */
let window: BrowserWindow;

// Wait until Electron is ready.
app.whenReady().then(() => {
  window = createWindow();
});

/**
 * Creates and configures a new window containing the React application.
 */
const createWindow = (): BrowserWindow => {
  const window = new BrowserWindow({
    icon: getIconPath(),
  });

  // Set the initial size of the window.
  window.setContentSize(500, 500);

  // If in development mode, use the running React app.
  if (is.dev()) {
    window.loadURL("http://localhost:3000");
    window.webContents.openDevTools({ mode: "detach" });
  } else {
    window.loadURL(`file://${path.join(__dirname, "index.html")}`);
  }

  return window;
};

/**
 * Determines the appropriate icon to use and returns its path.
 *
 * @return The icon path.
 */
const getIconPath = (): string => {
  let icon: string = "logo512.png";

  if (is.macOS()) {
    icon = "favicon.icns";
  } else if (is.windows()) {
    icon = "favicon.ico";
  }

  return path.join(__dirname, icon);
};

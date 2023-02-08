"use strict";
var require$$1 = require("electron");
var require$$1$1 = require("path");
require("url");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
const isSingleInstance = require$$1.app.requestSingleInstanceLock();
if (!isSingleInstance) {
  require$$1.app.quit();
  process.exit(0);
}
require$$1.app.disableHardwareAcceleration();
const env = { "VITE_DEV_SERVER_URL": "http://localhost:3000/", "BASE_URL": "/", "MODE": "development", "DEV": true, "PROD": false };
{
  require$$1.app.whenReady().then(() => Promise.resolve().then(function() {
    return /* @__PURE__ */ _interopNamespace(require("electron-devtools-installer"));
  })).then(({ default: installExtension, VUEJS3_DEVTOOLS }) => installExtension(VUEJS3_DEVTOOLS, {
    loadExtensionOptions: {
      allowFileAccess: true
    }
  })).catch((e) => console.error("Failed install extension:", e));
}
let mainWindow = null;
const createWindow = async () => {
  mainWindow = new require$$1.BrowserWindow({
    show: false,
    vibrancy: "under-window",
    visualEffectState: "active",
    webPreferences: {
      preload: require$$1$1.join(__dirname, "../../preload/dist/index.cjs"),
      contextIsolation: env.MODE !== "test",
      enableRemoteModule: env.MODE === "test"
    },
    icon: "../assets//code.svg"
  });
  mainWindow.on("ready-to-show", () => {
    if (!(mainWindow == null ? void 0 : mainWindow.isVisible())) {
      mainWindow == null ? void 0 : mainWindow.show();
    }
    {
      mainWindow == null ? void 0 : mainWindow.webContents.openDevTools();
    }
  });
  const pageUrl = env.VITE_DEV_SERVER_URL;
  await mainWindow.loadURL(pageUrl);
};
require$$1.app.on("second-instance", () => {
  if (mainWindow) {
    if (mainWindow.isMinimized())
      mainWindow.restore();
    mainWindow.focus();
  }
});
require$$1.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    require$$1.app.quit();
  }
});
require$$1.app.whenReady().then(createWindow).catch((e) => console.error("Failed create window:", e));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJztcblxuXG5jb25zdCBpc1NpbmdsZUluc3RhbmNlID0gYXBwLnJlcXVlc3RTaW5nbGVJbnN0YW5jZUxvY2soKTtcblxuaWYgKCFpc1NpbmdsZUluc3RhbmNlKSB7XG4gIGFwcC5xdWl0KCk7XG4gIHByb2Nlc3MuZXhpdCgwKTtcbn1cblxuYXBwLmRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbigpO1xuXG4vKipcbiAqIFdvcmthcm91bmQgZm9yIFR5cGVTY3JpcHQgYnVnXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvNDE0NjgjaXNzdWVjb21tZW50LTcyNzU0MzQwMFxuICovXG5jb25zdCBlbnYgPSBpbXBvcnQubWV0YS5lbnY7XG5cblxuLy8gSW5zdGFsbCBcIlZ1ZS5qcyBkZXZ0b29sc1wiXG5pZiAoZW52Lk1PREUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgYXBwLndoZW5SZWFkeSgpXG4gICAgLnRoZW4oKCkgPT4gaW1wb3J0KCdlbGVjdHJvbi1kZXZ0b29scy1pbnN0YWxsZXInKSlcbiAgICAudGhlbigoeyBkZWZhdWx0OiBpbnN0YWxsRXh0ZW5zaW9uLCBWVUVKUzNfREVWVE9PTFMgfSkgPT4gaW5zdGFsbEV4dGVuc2lvbihWVUVKUzNfREVWVE9PTFMsIHtcbiAgICAgIGxvYWRFeHRlbnNpb25PcHRpb25zOiB7XG4gICAgICAgIGFsbG93RmlsZUFjY2VzczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSkpXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRmFpbGVkIGluc3RhbGwgZXh0ZW5zaW9uOicsIGUpKTtcbn1cblxubGV0IG1haW5XaW5kb3c6IEJyb3dzZXJXaW5kb3cgfCBudWxsID0gbnVsbDtcblxuY29uc3QgY3JlYXRlV2luZG93ID0gYXN5bmMgKCkgPT4ge1xuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHNob3c6IGZhbHNlLCAvLyBVc2UgJ3JlYWR5LXRvLXNob3cnIGV2ZW50IHRvIHNob3cgd2luZG93XG4gICAgdmlicmFuY3k6ICd1bmRlci13aW5kb3cnLFxuICAgIHZpc3VhbEVmZmVjdFN0YXRlOiAnYWN0aXZlJyxcbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgcHJlbG9hZDogam9pbihfX2Rpcm5hbWUsICcuLi8uLi9wcmVsb2FkL2Rpc3QvaW5kZXguY2pzJyksXG4gICAgICBjb250ZXh0SXNvbGF0aW9uOiBlbnYuTU9ERSAhPT0gJ3Rlc3QnLCAgIC8vIFNwZWN0cm9uIHRlc3RzIGNhbid0IHdvcmsgd2l0aCBjb250ZXh0SXNvbGF0aW9uOiB0cnVlXG4gICAgICBlbmFibGVSZW1vdGVNb2R1bGU6IGVudi5NT0RFID09PSAndGVzdCcsIC8vIFNwZWN0cm9uIHRlc3RzIGNhbid0IHdvcmsgd2l0aCBlbmFibGVSZW1vdGVNb2R1bGU6IGZhbHNlXG4gICAgfSxcbiAgICBpY29uOiAnLi4vYXNzZXRzLy9jb2RlLnN2ZydcbiAgfSk7XG5cbiAgLyoqXG4gICAqIElmIHlvdSBpbnN0YWxsIGBzaG93OiB0cnVlYCB0aGVuIGl0IGNhbiBjYXVzZSBpc3N1ZXMgd2hlbiB0cnlpbmcgdG8gY2xvc2UgdGhlIHdpbmRvdy5cbiAgICogVXNlIGBzaG93OiBmYWxzZWAgYW5kIGxpc3RlbmVyIGV2ZW50cyBgcmVhZHktdG8tc2hvd2AgdG8gZml4IHRoZXNlIGlzc3Vlcy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24vZWxlY3Ryb24vaXNzdWVzLzI1MDEyXG4gICAqL1xuICBtYWluV2luZG93Lm9uKCdyZWFkeS10by1zaG93JywgKCkgPT4ge1xuICAgIGlmICghbWFpbldpbmRvdz8uaXNWaXNpYmxlKCkpIHtcbiAgICAgIG1haW5XaW5kb3c/LnNob3coKTtcbiAgICB9XG5cbiAgICBpZiAoZW52Lk1PREUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIG1haW5XaW5kb3c/LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVSTCBmb3IgbWFpbiB3aW5kb3cuXG4gICAqIFZpdGUgZGV2IHNlcnZlciBmb3IgZGV2ZWxvcG1lbnQuXG4gICAqIGBmaWxlOi8vLi4vcmVuZGVyZXIvaW5kZXguaHRtbGAgZm9yIHByb2R1Y3Rpb24gYW5kIHRlc3RcbiAgICovXG4gIGNvbnN0IHBhZ2VVcmwgPSBlbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50J1xuICAgID8gZW52LlZJVEVfREVWX1NFUlZFUl9VUkxcbiAgICA6IG5ldyBVUkwoJy4uL3JlbmRlcmVyL2Rpc3QvaW5kZXguaHRtbCcsICdmaWxlOi8vJyArIF9fZGlybmFtZSkudG9TdHJpbmcoKTtcblxuXG4gIGF3YWl0IG1haW5XaW5kb3cubG9hZFVSTChwYWdlVXJsKTtcbn07XG5cblxuYXBwLm9uKCdzZWNvbmQtaW5zdGFuY2UnLCAoKSA9PiB7XG4gIC8vIFNvbWVvbmUgdHJpZWQgdG8gcnVuIGEgc2Vjb25kIGluc3RhbmNlLCB3ZSBzaG91bGQgZm9jdXMgb3VyIHdpbmRvdy5cbiAgaWYgKG1haW5XaW5kb3cpIHtcbiAgICBpZiAobWFpbldpbmRvdy5pc01pbmltaXplZCgpKSBtYWluV2luZG93LnJlc3RvcmUoKTtcbiAgICBtYWluV2luZG93LmZvY3VzKCk7XG4gIH1cbn0pO1xuXG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgIGFwcC5xdWl0KCk7XG4gIH1cbn0pO1xuXG5cbmFwcC53aGVuUmVhZHkoKVxuICAudGhlbihjcmVhdGVXaW5kb3cpXG4gIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcignRmFpbGVkIGNyZWF0ZSB3aW5kb3c6JywgZSkpO1xuXG5cbi8vIEF1dG8tdXBkYXRlc1xuaWYgKGVudi5QUk9EKSB7XG4gIGFwcC53aGVuUmVhZHkoKVxuICAgIC50aGVuKCgpID0+IGltcG9ydCgnZWxlY3Ryb24tdXBkYXRlcicpKVxuICAgIC50aGVuKCh7IGF1dG9VcGRhdGVyIH0pID0+IGF1dG9VcGRhdGVyLmNoZWNrRm9yVXBkYXRlc0FuZE5vdGlmeSgpKVxuICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcignRmFpbGVkIGNoZWNrIHVwZGF0ZXM6JywgZSkpO1xufVxuXG4iXSwibmFtZXMiOlsiYXBwIiwiQnJvd3NlcldpbmRvdyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLE1BQU0sbUJBQW1CQSxXQUFBQSxJQUFJO0FBRTdCLElBQUksQ0FBQyxrQkFBa0I7QUFDckJBLGFBQUEsSUFBSSxLQUFLO0FBQ1QsVUFBUSxLQUFLLENBQUM7QUFDaEI7QUFFQUEsV0FBQSxJQUFJLDRCQUE0QjtBQU1oQyxNQUFNLE1BQU0sRUFBQSx1QkFBQSwwQkFBQSxZQUFBLEtBQUEsUUFBQSxlQUFBLE9BQUEsTUFBQSxRQUFBLE1BQUE7QUFJb0I7QUFDOUJBLGFBQUFBLElBQUksVUFBVSxFQUNYLEtBQUssTUFBTSxRQUFBLFFBQUEsRUFBQSxLQUFBLFdBQUE7QUFBQSxXQUFBLGtDQUFBLFFBQU8sNkJBQThCLENBQUE7QUFBQSxFQUFBLENBQUEsQ0FBQSxFQUNoRCxLQUFLLENBQUMsRUFBRSxTQUFTLGtCQUFrQixnQkFBZ0IsTUFBTSxpQkFBaUIsaUJBQWlCO0FBQUEsSUFDMUYsc0JBQXNCO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUFBLENBQ0QsQ0FBQyxFQUNELE1BQU0sT0FBSyxRQUFRLE1BQU0sNkJBQTZCLENBQUMsQ0FBQztBQUM3RDtBQUVBLElBQUksYUFBbUM7QUFFdkMsTUFBTSxlQUFlLFlBQVk7QUFDL0IsZUFBYSxJQUFJQyxXQUFBQSxjQUFjO0FBQUEsSUFDN0IsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsbUJBQW1CO0FBQUEsSUFDbkIsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTQyxhQUFBQSxLQUFLLFdBQVcsOEJBQThCO0FBQUEsTUFDdkQsa0JBQWtCLElBQUksU0FBUztBQUFBLE1BQy9CLG9CQUFvQixJQUFJLFNBQVM7QUFBQSxJQUNuQztBQUFBLElBQ0EsTUFBTTtBQUFBLEVBQUEsQ0FDUDtBQVFVLGFBQUEsR0FBRyxpQkFBaUIsTUFBTTtBQUMvQixRQUFBLEVBQUMseUNBQVksY0FBYTtBQUM1QiwrQ0FBWTtBQUFBLElBQ2Q7QUFFZ0M7QUFDOUIsK0NBQVksWUFBWTtBQUFBLElBQzFCO0FBQUEsRUFBQSxDQUNEO0FBT0QsUUFBTSxVQUNGLElBQUk7QUFJRixRQUFBLFdBQVcsUUFBUSxPQUFPO0FBQ2xDO0FBR0FGLFdBQUFBLElBQUksR0FBRyxtQkFBbUIsTUFBTTtBQUU5QixNQUFJLFlBQVk7QUFDZCxRQUFJLFdBQVcsWUFBWTtBQUFHLGlCQUFXLFFBQVE7QUFDakQsZUFBVyxNQUFNO0FBQUEsRUFDbkI7QUFDRixDQUFDO0FBR0RBLFdBQUFBLElBQUksR0FBRyxxQkFBcUIsTUFBTTtBQUM1QixNQUFBLFFBQVEsYUFBYSxVQUFVO0FBQ2pDQSxlQUFBLElBQUksS0FBSztBQUFBLEVBQ1g7QUFDRixDQUFDO0FBR0RBLFdBQUEsSUFBSSxVQUFVLEVBQ1gsS0FBSyxZQUFZLEVBQ2pCLE1BQU0sQ0FBQyxNQUFNLFFBQVEsTUFBTSx5QkFBeUIsQ0FBQyxDQUFDOyJ9

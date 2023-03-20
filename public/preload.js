// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require("electron");

// As an example, here we use the exposeInMainWorld API to expose the browsers
// and node versions to the main window.
// They'll be accessible at "window.versions".
process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
  contextBridge.exposeInMainWorld("dialog", {
    open: () => {
      ipcRenderer.send("open-file-dialog");
    },
    getFileData: (setState) => {
      ipcRenderer.on("selected-file", (event, data) => {
        setState(data);
      });
    },
    removeEventListener: () => {
      ipcRenderer.removeAllListeners("selected-file");
    },
    alertErrorNotification: () =>
    new Notification(
      "Erreur !",
      {
      body: "Le fichier audio n'a pas pu être ajouté",
    }),
    alertSuccessNotification: () =>
    new Notification(
      "Bien joué !",
      {
      body: "Le fichier audio a été ajouté avec succès",
    }),
  });
});
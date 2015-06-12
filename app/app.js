var app = require('app');
var BrowserWindow = require('browser-window');
var config = require('./config.json'); //TODO: do something if no config

//initialize...
var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {

    //communication channel with renderer process
    var ipc = require('ipc');

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1000, height: 1000});

    // and load the index.html of the app.
    mainWindow.loadUrl('file://' + __dirname + '/views/index.html');

    // Open the devtools.
    mainWindow.openDevTools();

    // Emitted when the window is closed
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.webContents.on('did-finish-load', function(){
        console.log("Loaded web contents!");
    });
});
const {app,BrowserWindow}=require('electron');
const path=require('path');
function createWindow(){
 const win=new BrowserWindow({width:1280,height:800,autoHideMenuBar:true});
 win.loadFile('src/index.html');
}
app.whenReady().then(createWindow);

function doFirst(){
    //先跟HTML畫面產生關聯, 再建事件聆聽功能
   document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
    let file = document.getElementById('theFile').files[0];
    let message = '';

    message += `檔案名稱: ${file.name}\n`;
    message += `檔案大小: ${file.size} byte(s)\n`;
    message += `檔案型態: ${file.type}\n`;
    message += `最後更新日期: ${file.lastModifiedDate}\n`;
    // message += `最後更新日期: ${file.lastModifiedDate.toDateString()}\n`;

    document.getElementById('fileInfo').value = message;

    //===================
    let readFile = new FileReader();
    readFile.readAsText(file);
    readFile.addEventListener('load',function(e){
        // document.getElementById('fileContent').value = readFile.result;
        // document.getElementById('fileContent').value = e.target.result;
        document.getElementById('fileContent').value = this.result;
    });
}
window.addEventListener('load',doFirst);
function doFirst(){
    //先跟HTML畫面產生關聯, 再建事件聆聽功能
   document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
    let files = document.getElementById('theFile').files;
    let message = '';

    for(let i = 0; i < files.length; i++){
        message += `檔案名稱: ${files[i].name}\n`;
        message += `檔案大小: ${files[i].size} byte(s)\n`;
        message += `檔案型態: ${files[i].type}\n`;
        message += `最後更新日期: ${files[i].lastModifiedDate}\n`;
        message += `==================\n`;

        document.getElementById('fileInfo').value = message;
    }
}
window.addEventListener('load',doFirst);
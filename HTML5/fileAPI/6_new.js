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
    readFile.readAsDataURL(file);
    readFile.addEventListener('load',function(e){
        let image = document.getElementById('image');
        image.src = readFile.result;
        image.style.maxWidth = '500px';
        image.style.maxHeight = '500px';
    });
}
window.addEventListener('load',doFirst);
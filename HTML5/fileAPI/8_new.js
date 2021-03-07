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
        let myMovie = document.getElementById('myMovie');
        myMovie.src = readFile.result;
        myMovie.controls = true;
        myMovie.width = 510;
        myMovie.poster = '../../images/Hoozuki/Hoozuki8.gif';
    });
}
window.addEventListener('load',doFirst);
function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = limitedText;
}
function limitedText(){
    let comment = document.getElementById('comment').value;
    // alert(comment)
    // let result;

    document.getElementById('count').value = comment.length;
    document.getElementById('result').innerText = comment;

    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
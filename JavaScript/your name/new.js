function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = format;
}
function format(){
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;
    
    let formatted = `${last.toUpperCase()}, ${first.substr(0,3).toUpperCase()}`;
    
    document.getElementById('formatted').value = formatted;
    
    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
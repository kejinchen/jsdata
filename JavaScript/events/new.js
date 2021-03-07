function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = setEvent;
}
function setEvent(){
    let events = ['click','select','contextmenu','change','resize','keyup','input','scroll'];

    for(let i = 0; i < events.length; i++){
        let yourCheck = document.getElementById(events[i]);
        if(yourCheck.checked){
            document.addEventListener(events[i],report);
            // window.addEventListener(events[i],report);   //for resize事件
        }else{
            document.removeEventListener(events[i],report);
        }
    }
    
    result = document.getElementById('result');
    result.value = '';

    return false;
}
function report(e){
    result.value += `${e.target.nodeName} : ${e.type}\n`;
    // result.value += `${e.target} : ${e.type}\n`;    //for resize事件
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
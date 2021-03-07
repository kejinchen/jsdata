function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = addTask;
}

tasks = [];

function addTask(){
    let task = document.getElementById('task');    
    let feedback = '';

    tasks.push(task.value);
    task.value = '';
    
    feedback += `You have ${tasks.length} task(s) in your to-do list.<hr>`;    
    feedback += `<h3 style="color: steelblue;">To-Do List</h3>`;
    feedback += `<ol><li>`;
        feedback += tasks.join(`</li><li>`);
    feedback += `</li></ol>`;
    
    document.getElementById('feedback').innerHTML= feedback;
    
    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
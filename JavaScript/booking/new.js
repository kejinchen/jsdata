

setTimeout(function(){
    alert(`It's been 2000 milliseconds.`);
},2000);

function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
}

function calculate(){
    let start = document.getElementById('start');    
    let end = document.getElementById('end');    
    let feedback = '';
    let day = 24 * 60 * 60 * 1000;  //一天的總毫秒數

    let startDate = new Date(start.value);
    let endDate = new Date(end.value);

    // alert(endDate - startDate);

    if(startDate.getTime() && endDate.getFullYear()){   
        if(startDate <= endDate){
            let diff = endDate - startDate;

            if(diff <= day){
                interval = '1 day';
            }else{
                // interval = diff / day + ' day';
                interval = Math.round(diff / day) + ' day';
            }
            feedback += `The room has been scheduled starting on ${startDate.toLocaleDateString()}
             and ending on ${endDate.toLocaleDateString()}, which is a period of ${interval}.`;
        }else{
            feedback += `The start date must come before the end date.`;
        }
    }else{
        feedback += `Please enter valid dates in the format MM/DD/YYYY.`;
    }


    
    
    document.getElementById('feedback').innerHTML= feedback;
    
    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
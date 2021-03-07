function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = validate;
}
function validate(){
    let first = document.getElementById('first');
    let last = document.getElementById('last');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let city = document.getElementById('city');
    let gender = document.getElementById('gender');


    if(/^[A-Z]{2,20}$/i.test(first.value)){
        removeErrorMessage('first');
    }else{
        addErrorMessage('first','Please enter your first name.');
    }
    if(/^[A-Z]{2,20}$/i.test(last.value)){
        removeErrorMessage('last');
    }else{
        addErrorMessage('last','Please enter your last name.');
    }

    // email
    if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        removeErrorMessage('email');
    }else{
        addErrorMessage('email','Please enter your email address.');
    }

    // phone  09xx xxx xxx or 09xx-xxx-xxx or 09xxxxxxxx
    if(/^09[0-9]{2}[ -]?[0-9 -]{6,}$/.test(phone.value)){
        removeErrorMessage('phone');
    }else{
        addErrorMessage('phone','Please enter your phone number.');
    }

    // city
    if(/^[a-zA-Z]{5,20}$/.test(city.value)){
        removeErrorMessage('city');
    }else{
        addErrorMessage('city','Please enter your city.');
    }

    //gender
    if(gender.selectedIndex != 0){
        removeErrorMessage('gender');
    }else{
        addErrorMessage('gender','Please select your gender.');
    }

    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = calculate;
}
function calculate(){
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
    let tax = document.getElementById('tax').value;
    let discount = document.getElementById('discount').value;
    // alert(quantity)
    let result;
    if(isNaN(price)){
        alert('請輸入數字!');
    }else{
        result = quantity * price;
    }

    
    tax = tax / 100;  //tax /= 100;
    tax = tax + 1;
    result = result * tax;
    result = result - discount;
    result = result.toFixed(2);


    document.getElementById('result').innerText = result;

    return false;
}
window.addEventListener('load',doFirst);
// window.onload = doFirst;
// window.onload = function(){};
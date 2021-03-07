//自己建立驗證表單時候的錯誤訊息
function addErrorMessage(id,message){   //一個完整的task就切成一個函數
    let element = document.getElementById(id);

    let errorId = id + 'Error';  //aaaError

    addSpan = document.createElement('span');
    addSpan.id = errorId;
    addSpan.className = 'error';
    addSpan.appendChild(document.createTextNode(message));

    element.parentNode.appendChild(addSpan);
    
}

function removeErrorMessage(id){
    let theSpan = document.getElementById(`${id}Error`);
    if(theSpan){
        theSpan.parentNode.removeChild(theSpan);
    }
}
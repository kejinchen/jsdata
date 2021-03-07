var storage = sessionStorage;
function doFirst(){
	let itemString = storage.getItem('addItemList');
    let items = itemString.substr(0, itemString.length-2).split(', ');
    console.log(items); //["A1001", "A1005", "A1006", "A1002"]

    newDiv = document.createElement('div');
    newTable = document.createElement('table');

    //先將table放進div，再將div放進cartList裡
    newDiv.appendChild(newTable);
    document.getElementById('cartList').appendChild(newDiv);

    total = 0;
    for(let key in items){  // use items[key]
        let itemInfo = storage.getItem(items[key]);
        let itemPrice = parseInt(itemInfo.split('|')[2]);

        createCartList(items[key], itemInfo);  //呼叫createCartList()建立<tr>

        total += itemPrice;
        document.getElementById('total').innerText = total;
    }

}
function createCartList(itemId, itemValue){
    // alert(`${itemId} : ${itemValue}`);
    let itemTitle = itemValue.split('|')[0];
    let itemImage = 'imgs/' + itemValue.split('|')[1];
    let itemPrice = parseInt(itemValue.split('|')[2]);

    // 建立每個品項的清單區域 -- tr
    let trItemList = document.createElement('tr');
    trItemList.className = 'item';      //trItemList.setAttribute('class','item');

    newTable.appendChild(trItemList);

    // 建立商品圖片 -- 第一個td
    let tdImage = document.createElement('td');
    tdImage.style.width = '200px';

    let image = document.createElement('img');
    image.src = itemImage;
    image.width = 80;

    tdImage.appendChild(image);
    trItemList.appendChild(tdImage);

    // 建立商品名稱和刪除按鈕 -- 第二個td
    let tdTitle = document.createElement('td');
    tdTitle.style.width = '280px';
    tdTitle.id = itemId;

    let pTitle = document.createElement('p');
    pTitle.innerText = itemTitle;

    let delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.addEventListener('click', deleteItem);

    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(delButton);

    trItemList.appendChild(tdTitle);

    // 建立商品價格 -- 第三個td
    let tdPrice = document.createElement('td');
    tdPrice.style.width = '170px';
    tdPrice.innerText = itemPrice;

    trItemList.appendChild(tdPrice);

    // 建立商品數量 -- 第四個td
    let tdItemCount = document.createElement('td');
    tdItemCount.style.width = '60px';

    let itemCount = document.createElement('input');
    itemCount.type = 'number';
    itemCount.value = 1;
    itemCount.min = 0;
    itemCount.addEventListener('input', changeItemCount);

    tdItemCount.appendChild(itemCount);
    trItemList.appendChild(tdItemCount);
}
function deleteItem(){
    let itemId = this.parentNode.id;    // let itemId = this.parentNode.getAttribute('id');

    // 1.先扣除總金額
    let itemValue = storage.getItem(itemId);
    total = total - parseInt(itemValue.split('|')[2]);

    document.getElementById('total').innerText = total;

    // 2.清除storage
    storage.removeItem(itemId);
    // storage.getItem('addItemList') == storage['addItemList']
    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, '');

    // 3.刪除該筆<tr>
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    // document.getElementById(itemId).parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
function changeItemCount(){
    // 作業
}
window.addEventListener('load', doFirst);
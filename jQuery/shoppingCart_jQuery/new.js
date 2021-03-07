// 定義一個商品清單的物件
let shopList = {};
// let shopList = {
//     name: "Shopping List",
//     list: [{name: "泡麵", price: 20},{name: "帽子", price: 1200},{},{},{}],
// };
shopList.name = "Shopping List";
// 商品清單的內容是陣列，而裡面放的是一個一個物件
shopList.list = [
    // {name: "泡麵", price: 20},
    // {name: "帽子", price: 1200},
    // {name: "MAC", price: 38500},
    // {name: "筆", price: 35},
];

// 定義一個html template, {{名稱}}
let item_html = "<li id={{id}} class='buy_item'>{{num}}. {{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-delId={{del_item_id}} class='deleteButton'>X</div></li>";
let total_html = "<li class='buy_item total'>Total<div class='price'>{{price}}</div></li>";

function showList(){
    $('#items_list').html('');
    let total_price = 0;

    for(let i = 0; i < shopList.list.length; i++){
        let item = shopList.list[i];
        let item_id = 'buyItem_' + i;
        let del_item_id = 'del_buyItem_' + i;
        total_price += parseInt(item.price);

        let current_item_html = 
            item_html.replace("{{num}}", i + 1)
                     .replace("{{item}}", item.name)
                     .replace("{{id}}", item_id)
                     .replace("{{price}}", item.price)
                     .replace("{{del_id}}", del_item_id)
                     .replace("{{del_item_id}}", i)
                     ;
        
        $('#items_list').append(current_item_html);
        
        $('#'+ del_item_id).click(function(){
            remove_item(parseInt($(this).attr('data-delId')));
        });
    }
    //新增Total
    let current_total_html = 
    total_html.replace("{{price}}",total_price);

    $('#items_list').append(current_total_html);
}
showList();
// 新增資料，呼叫函數(showList)去渲染list
$('.addButton').click(function(){
    shopList.list.push({
        name: $('#input_item').val(),
        price: $('#input_price').val(),
    });
    $('#input_item').val('');
    $('#input_price').val('');
    showList();
});

//刪除該筆商品: 陣列.splice(index,刪除的個數);
function remove_item(idNum){
    shopList.list.splice(idNum, 1);
    showList();
}


// <li id="buyItem_0" class="buy_item">
//     1. 泡麵<div class="price">20</div>
//     <div id="del_buyItem_0" data-delId="0" class="deleteButton">X</div>
// </li>
// <li id="buyItem_1" class="buy_item">
//     2. 帽子<div class="price">1200</div>
//     <div id="del_buyItem_1" data-delId="1" class="deleteButton">X</div>
// </li>
// <li class="buy_item total">
//     Total<div class="price">20</div>
// </li>
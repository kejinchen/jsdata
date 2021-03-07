window.onload = function(){
    if(typeof window.print == 'function'){       //先判斷瀏覽器是否有列印功能?
        //如果有列印功能，就新增一個列印按鈕

        let printButton = document.createElement('button');
        printButton.innerText = 'Print';
        printButton.style.fontSize = 'x-large';
        printButton.style.color = 'maroon';
        printButton.style.width = '100px';
        printButton.style.borderRadius = '8px';
        printButton.addEventListener('click',function(){
            window.print();
        });

        // document.body.appendChild(printButton);
        // document.body.insertBefore(printButton,document.body.firstChild);
        // document.getElementById('skin').insertBefore(printButton,document.querySelector('div p:nth-child(2)'));
        document.getElementById('skin').replaceChild(printButton,document.querySelector('div h1:nth-child(1)'));

        // createTextNode()
        let text = document.createTextNode('This is some text.');
        //appendChild()、insertBefore()、replaceChild()
        //將text當成以上三個方法的第一個參數

        document.body.insertBefore(text,document.body.firstChild);

        // cloneNode()
        let newDiv = document.getElementById('skin').cloneNode();
        let otherDiv = document.querySelector('div p:nth-child(2)').cloneNode();


    }
};
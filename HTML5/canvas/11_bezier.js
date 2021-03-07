function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // 格線
    context.beginPath();    
    for(let i=0; i<30; i++){
        let position = i * 50;
        // 垂直線
        context.moveTo(position, 0);
        context.lineTo(position, canvas.height);
        context.fillText(position, position, 10);        
        
        // 水平線
        context.moveTo(0, position);
        context.lineTo(canvas.width, position);
        context.fillText(position, 0, position);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';    
    context.stroke();
    // 格線結束
   
    context.strokeStyle = 'red';
    context.lineWidth = 5;       
   
    context.beginPath();
    context.moveTo(200, 400);
    // context.bezierCurveTo(300,275, 450,225, 550,450); 
    context.bezierCurveTo(300,225, 450,550, 550,450); 
    context.stroke();

    // 輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;       
   
    context.beginPath();
    context.moveTo(200, 400);
    // context.lineTo(300,275);
    // context.lineTo(450,225);
    context.lineTo(300,225);
    context.lineTo(450,550);
    context.lineTo(550, 450);
    context.stroke();

    
}
window.addEventListener('load',doFirst);


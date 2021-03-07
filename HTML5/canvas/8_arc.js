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

    // 四分之一線
    context.beginPath();    

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);

    context.moveTo(           0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);

    context.strokeStyle = 'rgba(0,0,0,0.7)';    
    context.stroke();
    // 四分之一線結束

    context.strokeStyle = 'red';
    context.lineWidth = 5;
       
    //左上角
    context.beginPath();
    context.arc(250, 200, 150, 0, Math.PI, 0);
    context.stroke();

    //右上角
    context.beginPath();
    context.arc(750, 200, 150, 0, Math.PI, 1);
    context.stroke();

    //左下角
    context.beginPath();
    context.arc(250, 600, 150, 0, 2*Math.PI, 1);
    context.stroke();

    //右下角
    context.beginPath();
    context.arc(750, 600, 150, 0.3*Math.PI, 1.6*Math.PI, 0);
    context.stroke();

    

    

    
}
window.addEventListener('load',doFirst);


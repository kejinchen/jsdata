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
    context.fillStyle = 'red';
    context.lineWidth = 10;  

    context.translate(300, 300);  //重點在這裡!!
   
    context.beginPath();
    context.arc(0, 0, 180, 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(0, 0, 15, 0, 2*Math.PI);
    context.fill();
    
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -130);
    context.lineCap='round';
    
    // context.moveTo(300, 300);
    // context.lineTo(300, 170);
    context.stroke();

    // circle

    context.beginPath(); 
    context.translate(750-300, 550-300);

    let circleGradient = context.createRadialGradient(0, 0, 180 - 10, 0, 0, 180 + 10);
    circleGradient.addColorStop(  0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(  1, '#666');

    context.beginPath();
    context.strokeStyle = circleGradient;
    context.lineWidth = 20;    
    context.arc(0, 0, 180, 0, 2  *Math.PI);
    context.stroke();
}
window.addEventListener('load',doFirst);


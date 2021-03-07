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
   
    
    let gradient = context.createRadialGradient(350, 250, 50, 300, 250, 150);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    // gradient.addColorStop(0.5, 'yellow');    
    
    context.fillStyle = gradient;    
    // context.fillStyle = 'yellow';    
    context.fillRect(100, 100, 450, 300);

// circle
    let circleGradient = context.createRadialGradient(750, 550, 180 - 10, 750, 550, 180 + 10);
    circleGradient.addColorStop(  0, '#666');
    circleGradient.addColorStop(0.5, '#fff');
    circleGradient.addColorStop(  1, '#666');


    context.beginPath();
    context.strokeStyle = circleGradient;
    context.lineWidth = 20;    
    context.arc(750, 550, 180, 0, 2*Math.PI);
    context.stroke();
    
}
window.addEventListener('load',doFirst);


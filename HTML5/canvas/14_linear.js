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
   
    // let gradient = context.createLinearGradient(100, 100, 600, 400);
    let gradient = context.createLinearGradient(100, 250, 600, 250);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    gradient.addColorStop(0.5, 'yellow');
    
    
    context.fillStyle = gradient;    
    // context.fillStyle = 'yellow';    
    context.fillRect(100, 100, 500, 300);
    
}
window.addEventListener('load',doFirst);


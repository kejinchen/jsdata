function doFirst(){
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

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
   
  
    canvas.addEventListener('mousemove',usePen);
}
function usePen(e){
    context.fillStyle='maroon';
    context.strokeStyle='maroon';
    
    // context.fillRect(e.clientX, e.clientY, 5, 5);
    // context.strokeRect(e.clientX, e.clientY, 5, 5);

    context.beginPath();
    context.arc(e.clientX, e.clientY, 1, 0, 2*Math.PI);
    context.fill();
}
window.addEventListener('load',doFirst);


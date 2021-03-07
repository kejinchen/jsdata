function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    for(let i=0; i<30; i++){
        let position = i * 50;
        // 垂直線
        // context.moveTo(50, 0);
        // context.lineTo(50, 800);
        // context.fillText(50, 50, 10);
        // context.moveTo(100, 0);
        // context.lineTo(100, 800);
        // context.fillText(100, 100, 10);

        context.moveTo(position, 0);
        context.lineTo(position, canvas.height);
        context.fillText(position, position, 10);        
        
        // 水平線
        // context.moveTo(0, 50);
        // context.lineTo(1000, 50);
        // context.fillText(50, 0, 50);
        // context.moveTo(0, 100);
        // context.lineTo(1000, 100);
        // context.fillText(100, 0, 100);

        context.moveTo(0, position);
        context.lineTo(canvas.width, position);
        context.fillText(position, 0, position);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';    
    context.stroke();
    
}
window.addEventListener('load',doFirst);
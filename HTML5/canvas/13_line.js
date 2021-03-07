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
    context.lineWidth = 20;

    context.beginPath();

// lineCap
    context.lineCap='butt';
    context.beginPath();    
    context.moveTo(150, 150);
    context.lineTo(350, 150);
    context.stroke();

    context.lineCap='round';   
    context.beginPath();
    context.moveTo(150, 200);
    context.lineTo(350, 200);
    context.stroke();

    context.lineCap='square';
    context.beginPath();
    context.moveTo(150, 250);
    context.lineTo(350, 250);
    context.stroke();

// lineJoin
    context.lineJoin='miter';
    context.strokeRect(150, 400, 150, 200);

    context.lineJoin='bevel';
    context.strokeRect(400, 400, 150, 200);

    context.lineJoin='round';
    context.strokeRect(650, 400, 150, 200);
}
window.addEventListener('load',doFirst);


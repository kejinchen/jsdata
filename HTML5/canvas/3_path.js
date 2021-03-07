function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.fillStyle = 'pink';
    
    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(350, 50);
    context.lineTo(50, 200);
    context.closePath();
    
    context.fill();
    context.stroke();
}
window.addEventListener('load',doFirst);
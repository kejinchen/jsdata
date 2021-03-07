function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    // context.rect(100,100,250,200);
    // context.fill();
    // context.stroke();

    context.fillRect(100,100,250,200);
    // context.strokeRect(100,100,250,200);
    context.clearRect(150,150,50,50);

    // 橡皮擦
    // context.clearRect(0,0,canvas.width,canvas.height);
}
window.addEventListener('load',doFirst);
function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let pic = new Image();
    pic.src = '../../images/demo/field.jpg';
    pic.addEventListener('load',function(){
        // context.drawImage(pic, 100, 100);
        context.drawImage(pic, 0, 0, canvas.width, canvas.height);
    });
}
window.addEventListener('load',doFirst);
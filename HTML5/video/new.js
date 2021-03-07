function doFirst(){
    // barsize = 640;
    //先跟HTML畫面產生關聯
    myMovie = document.getElementById('myMovie');
    playButton = document.getElementById('playButton');
    defaultBar = document.getElementById('defaultBar');
    progress = document.getElementById('progress');

    // stopButton = document.getElementById('stopButton');

    barsize = parseInt(window.getComputedStyle(defaultBar).width);


    //再建事件聆聽功能
    playButton.addEventListener('click',playOrPause);
    myMovie.addEventListener('click',playOrPause);
    defaultBar.addEventListener('click',clickedBar);
    // stopButton.addEventListener('click',fullScreen);
}
// function fullScreen(){
//     myMovie.webkitEnterFullScreen();
// }
function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){ //影片正在跑
        myMovie.pause();
        playButton.innerText = 'Play';
    }else{
        myMovie.play();
        playButton.innerText = 'Pause';
        setInterval(update,300);
    }
}
function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime;
        progress.style.width = `${size}px`;
    }else{
        progress.style.width = `0px`;
        playButton.innerText = 'Play';
    }
}
function clickedBar(e){
    let mouseX = e.clientX - defaultBar.offsetLeft;
    progress.style.width = `${mouseX}px`;

    let newTime = mouseX / (barsize / myMovie.duration);
    myMovie.currentTime = newTime;
}
window.addEventListener('load',doFirst);
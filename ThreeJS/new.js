let scene,camera,renderer;
let cube;

function doFirst(){
    // 1.建立場景
    scene = new THREE.Scene();
    // 2.建立renderer: CSS | SVG | Canvas | WebGL
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);   //設定場景被渲染的大小
    renderer.setClearColor(0xdddddd,1);  //背景色
    renderer.shadowMap.enabled = true;      //設定陰影效果

    //將渲染器綁定到網頁(DOM)上
    document.body.appendChild(renderer.domElement);

    // 3.建立攝影機
    // camera = new THREE.PerspectiveCamera(FOV angle, ratio(長寬比), near , far);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 100);
    camera.position.set(10,10,10);
    // camera.position.z = 10;
    camera.lookAt(scene.position);

    // 4.建立光源
    let light = THREE.PointLight(0xffffff);
    // light.position.set(10,10,-10);
    scene.add(light);

    // 5.建立物件和材質
    let geometry = new THREE.BoxGeometry( 1, 1, 1 );   //物件是幾何形狀
    let material = new THREE.MeshPhysicalMaterial({
        color: 0x00ff00,
        wireframe: true,
    });  //材質
    cube = new THREE.Mesh( geometry, material );
    // cube.position.set(0,0,0);
    scene.add(cube);

    let helper = new THREE.AxesHelper(3);
    scene.add(helper);

    render();
}
function animate(){
    // cube.rotation.x += 1;
    // cube.rotation.z += 0.5;
}
function render(){
    animate();
    requestAnimationFrame(render);
    renderer.render(scene,camera);
}

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
});
window.addEventListener('load',doFirst);
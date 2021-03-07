function doFirst(){
    let area = document.getElementById('map');
    // let position = new google.maps.LatLng(24.939724800000004, 121.2153856);
    let position = new google.maps.LatLng(24.9677358,121.1918582);

    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    let map = new google.maps.Map(area,options);

    let marker = new google.maps.Marker({
        position,
        map,
        title: '這位置怪怪的!@@',
        icon: '../../images/number/dgtp.gif',
    });
    // let marker = new google.maps.Marker({
    //     position: position,
    //     map: map,
    // });
}
window.addEventListener('load',doFirst);
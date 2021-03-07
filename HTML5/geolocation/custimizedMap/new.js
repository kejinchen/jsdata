function doFirst(){
    navigator.geolocation.getCurrentPosition(succCallback);
}
function succCallback(e){
    // let lati = e.coords.latitude;
    // let longi = e.coords.longitude;

    // HOME
    let lati = 25.0393312;
    let longi = 121.5573764;

    let area = document.getElementById('mapBoard');
    let position = new google.maps.LatLng(lati, longi);

    let options = {
        zoom: 16,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(area,options);

    let marker = new google.maps.Marker({
        position,
        map,
        
    });
    marker.setTitle('我家附近');
    marker.setIcon('../../../images/home/32_32.png');
}
function showInfo(shop){
    switch(shop.id){
        case 'sb': 
            getLocation(sb,'STARBUCKS');
            break;
        case 'seven': 
            getLocation(seven,'7-11');
            break;
        case 'family': 
            getLocation(family,'全家');
            break;
        case 'md': 
            getLocation(md,'麥當勞');
            break;
    }
}
let markers = [];
function getLocation(location,title){
    let i = 0;
    for(let key in markers){
        markers[key].setVisible(false);
    }

    for(let key in location){  //use location[key]
        let lati = location[key].split(',')[0];
        let longi = location[key].split(',')[1];
        // console.log(lati +' | '+ longi);    

        let xy = new google.maps.LatLng(lati, longi);

        let marker = new google.maps.Marker({
            position: xy,
            map,
        });
        marker.setTitle(title);
        markers[i] = marker;
        i++;
    }
}
window.addEventListener('load',doFirst);

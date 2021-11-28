const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";
const map = L.map('map').setView([0,0], 1);
const marker = L.marker([0, 0]).addTo(map);
 
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(map);

async function getISS(){
    const response = await fetch(apiURL);
    const data = await response.json();
    const {latitude,longitude }= data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    marker.setLatLng([latitude,longitude]);
    map.setView([latitude,longitude],4); // zoom on the satellites position

}

setInterval(getISS,2000);


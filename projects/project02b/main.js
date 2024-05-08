var map = L.map('map').setView([35.555, -82.575], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([35.6155, -82.567]).addTo(map);

var marker2 = L.marker([35.482, -82.547]).addTo(map);

marker1.bindPopup("My School");

marker2.bindPopup("My Home");


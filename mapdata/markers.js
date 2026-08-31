/* var polygon = L.polygon([
    [500, 500],
    [600, 600],
    [500, 600]
]).addTo(map);

polygon.bindPopup("I am a polygon."); */

var marker = L.marker(
    [200,500]
).addTo(map);

marker.bindPopup("I am a marker.");

var marker2 = L.marker(
    [600,500]
).addTo(map);

marker2.bindPopup("I am a marker.");

// Crea una linea di collegamento tra due POI
var travel = L.polyline([marker2.getLatLng(), marker.getLatLng()]).addTo(map);

/* EVENTO PER CLICK SU MAPPA
   -> MOSTRA COORDINATE */
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
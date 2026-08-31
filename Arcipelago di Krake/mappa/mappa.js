// 1. Definiamo la mappa, definiamo le dimensioni in pixel della tua immagine [Altezza, Larghezza]
var imagePath = 'images/Mappa/Arcipelago di Krake.jpg';
var mapHeight = 3072;
var mapWidth = 3072;
var mapGridX = mapWidth; // Larghezza della griglia (= mapWidth per equivalerla ai pixel)
var mapGridY = mapHeight; // Altezza della griglia (= mapHeight per equivalerla ai pixel)

/* NON MODIFICARE NULLA DA QUI IN AVANTI */

// 2. Impostiamo dimensioni della griglia e del box che la contiene
var bounds = [[0, 0], [mapGridY, mapGridX]];
var mapElement = document.getElementById('map');
var mapSize = mapElement.getBoundingClientRect();

// 3. Diciamo a Leaflet di usare coordinate piane (X, Y) senza la distorsione del pianeta Terra
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: Math.log2(
        Math.min(
            mapSize.width / mapGridX,
            mapSize.height / mapGridY
        )
    ), // Imposta zoom minimo adattevole all'immagine
    maxZoom: 4,   // Limita lo zoom in avanti per non far sgranare troppo la tua immagine
    zoomSnap: 0,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

// 4. Carichiamo l'immagine della mappa
L.imageOverlay(imagePath, bounds).addTo(map);

// Lo zoom a cui l'intera mappa entra nel frame
map.fitBounds(bounds);

// Aggiorna la mappa quando cambia la dimensione della finestra
window.addEventListener('resize', function() {
    var mapSize = mapElement.getBoundingClientRect();
    var minimalZoom = Math.log2(
        Math.min(
            mapSize.width / mapGridX,
            mapSize.height / mapGridY
        )
    );
    map.setMinZoom(minimalZoom);
    map.invalidateSize();
});

// 7. Debug per rilevare coordinate in mappa
/*var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick); */
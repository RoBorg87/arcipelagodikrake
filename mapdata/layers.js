/* NON MODIFICARE QUESTO DOCUMENTO */

/* PREPARA IL PANE DI REZIONI, CITTA' E PUNTI */
map.createPane('regions');
map.getPane('regions').style.zIndex = 400;

map.createPane('cities');
map.getPane('cities').style.zIndex = 500;

map.createPane('poi');
map.getPane('poi').style.zIndex = 600;

/* PREPARA IL LAYER DI REZIONI, CITTA' E PUNTI' */
var regionsLayer = L.layerGroup();
var citiesLayer = L.layerGroup();
var poiLayer = L.layerGroup();

/* CREA LA CITTA' */
function createCity(data) {

    // Calcola posizione immagine
    var bounds = L.latLngBounds([
        [data.y, data.x],
        [data.y + data.height, data.x + data.width]
    ]);

    // Definisce lo stile generale della città
    var city = L.imageOverlay(
        data.image,
        bounds,
        {
            opacity: 0,
            interactive: false,
            pane: 'cities'
        }
    ).addTo(citiesLayer);

    // CREA L'AREA INTERATTIVA INVISIBILE
    var trigger = L.polygon(
        data.trigger,
        {
            opacity: 0,
            fillOpacity: 0,
            interactive: true,
            pane: 'cities'
        }
    ).addTo(citiesLayer);

    // Determina posizione PopUp
    var popupPosition = [
        data.y + data.height + data.popupy,
        data.x + data.width / 2 + data.popupx
    ];

    // Controllo Mouseover
    trigger.on('mouseover', function() {
        city.setBounds(scaleBoundsCities(bounds, 1.2));
        city.setOpacity(1);
    });

    trigger.on('click', function() {
        L.popup({className: 'cityPopup'})
        .setLatLng(popupPosition)
        .setContent(`
            <div class="cityInfo">
                <h3>${data.nome}</h3>

                <div>
                    <span class="label">Popolazione</span><br>
                    ${data.popolazione}
                </div>

                <div>
                    <span class="label">Pericolo</span><br>
                    ${data.pericolo}
                </div>
            </div>
        `)
        .openOn(map);
    });

    trigger.on('mouseout', function() {
        city.setBounds(bounds);
        city.setOpacity(0);
        map.closePopup();
    });

    return {
        image: city,
        trigger: trigger
    };
}

/* CREA LA REGIONE */
function createRegion(data) {

    // Calcola posizione immagine
    var bounds = L.latLngBounds([
        [data.y, data.x],
        [data.y + data.height, data.x + data.width]
    ]);

    // Definisce lo stile generale delle regioni
    var region = L.imageOverlay(
        data.image,
        bounds,
        {
            opacity: 0,
            interactive: false,
            pane: 'regions'
        }
    ).addTo(regionsLayer);

    // CREA L'AREA INTERATTIVA INVISIBILE
    var trigger = L.polygon(
        data.trigger,
        {
            opacity: 0,
            fillOpacity: 0,
            interactive: true,
            pane: 'regions'
        }
    ).addTo(regionsLayer);

    // Determina posizione PopUp
    var popupPosition = [
        data.y + data.height + data.popupy,
        data.x + data.width / 2 + data.popupx
    ];
    
    // Controllo Mouseover
    trigger.on('mouseover', function() {
        region.setBounds(scaleBoundsRegions(bounds, 1.1));
        region.setOpacity(1);
    });

    trigger.on('click', function() {
        L.popup({className: 'regionPopup'})
            .setLatLng(popupPosition)
            .setContent(`
            <div class="regionInfo">
                <h3>${data.nome}</h3>
                <div>Popolazione: ${data.popolazione}</div>
                <div>Pericolo: ${data.pericolo}</div>
            </div>
            `)
            .openOn(map);
    });

    trigger.on('mouseout', function() {
        region.setBounds(bounds);
        region.setOpacity(0);
        map.closePopup();
    });

    return {
        image: region,
        trigger: trigger
    };
}

/* CREA IL POI
function createPOI(imagePath, bounds, data) {



} */

/* REGOLA IL RIDIMENSIONAMENTO DELLA CITTA' */
function scaleBoundsCities(bounds, scale) {
    var center = bounds.getCenter();

    var south = bounds.getSouth();
    var north = bounds.getNorth();
    
    var height = north - south;
    
    var newHeight = height * scale;
    
    var west  = center.lng + (bounds.getWest() - center.lng) * scale;
    var east  = center.lng + (bounds.getEast() - center.lng) * scale;

    var newSouth = south - (newHeight - height) * 0.2;
    var newNorth = south + newHeight;

    return [[newSouth, west], [newNorth, east]];
}

/* REGOLA IL RIDIMENSIONAMENTO DELLA REGIONE */
function scaleBoundsRegions(bounds, scale) {
    var center = bounds.getCenter();

    var south = bounds.getSouth();
    var north = bounds.getNorth();
    var west = bounds.getWest();
    var east = bounds.getEast();

    var height = north - south;
    var newHeight = height * scale;
    
    var width = east - west;
    var newWidth = width * scale;

    var newSouth = center.lat - newHeight / 2;
    var newNorth = center.lat + newHeight / 2;

    var newWest = center.lng - newWidth / 2;
    var newEast = center.lng + newWidth / 2;

    return [[newSouth, newWest], [newNorth, newEast]];
}

/* ATTIVA LA FUNZIONE DI CREAZIONE DELLE CITTA' */
cities.forEach(function(cityData) {
    createCity(cityData);
});

regions.forEach(function(regionData) {
    createRegion(regionData);
});

/*poi.forEach(function(poiData) {
    createPOI(poiData);
});*/

/* INSERISCE LE REGIONI, LE CITTA' E I POI NELLA MAPPA */
regionsLayer.addTo(map);
citiesLayer.addTo(map);
poiLayer.addTo(map);
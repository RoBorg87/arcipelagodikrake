/* impostazioni style
        fillColor: getColor(feature.properties.density), // Colore background
        weight: 2,                                       // Spessore bordo
        opacity: 1,                                      // Opacità bordo
        color: 'white',                                  // Colore bordo
        dashArray: '3',                                  // Tratteggio bordo
        fillOpacity: 0.7                                 // Opacità background
*/

/* REGION CREATA CON POLYGON (è praticamente un marker, le proprietà si indicano nel tooltip)

var region1 = L.polygon([
    [500, 500],
    [600, 600],
    [500, 600]
], {
    fillColor: "white",
    fillOpacity: 0,
    color: "transparent",
    weight: 0
}).addTo(map);

region1.on('mouseover', function() {
    this.setStyle({
        fillOpacity: 0.7
    });

    this.bindTooltip("Regione 1<br>Popolazione: 12.000", {
        permanent: false
    }).openTooltip();
});

region1.on('mouseout', function() {
    this.setStyle({
        fillOpacity: 0
    });

    this.closeTooltip();
}); */

/* REGION CREATA CON geoJSON (è un oggetto geografico con le sue proprietà) */
var regions = [
    {
        "type":"Feature",
        "properties":{
            "name":"Isola Minore",
            "pericolo":5
        },
        "geometry":{
            "type":"Polygon",
            "coordinates":[[
                [70, 181],
                [76, 176],
                [75, 166],
                [83, 160],
                [88, 124],
                [104, 116],
                [122, 117],
                [144, 90],
                [129, 114],
                [144, 89],
                [158, 88],
                [203, 99],
                [212, 110],
                [220, 138],
                [245, 163],
                [250, 183]
            ]]
        }
    },
    {
        "type":"Feature",
        "properties":{
            "name":"Regione 1",
            "pericolo":1
        },
        "geometry":{
            "type":"Polygon",
            "coordinates":[[
                [110, 250],
                [840, 250],
                [850, 350],
                [100, 380]
            ]]
        }
    },
    {
        "type":"Feature",
        "properties":{
            "name":"Regione 2",
            "pericolo":1
        },
        "geometry":{
            "type":"Polygon",
            "coordinates":[[
                [810, 750],
                [940, 650],
                [950, 650],
                [800, 780]
            ]]
        }
    }
];

/* REGOLA IL MOUSEOVER DELLE REGIONI
function regionEvents(feature, layer) {

    layer.on('mouseover', function() {
        this.setStyle({
            fillOpacity: 0.2
        });

        this.bindTooltip(
            feature.properties.name +
            "<br>Pericolo: " +
            feature.properties.pericolo
        ).openTooltip();
    });

    layer.on('mouseout', function() {
        this.setStyle({
            fillOpacity: 0
        });

        this.closeTooltip();
    });
}

// DEFINISCE LO STILE GENERALE DELLE REGIONI
var regions = L.geoJSON(
    [region1, region2, isolaMinore],
    {
    style: {
        fillColor: "white",
        fillOpacity: 0,
        color: "transparent",
        weight: 0
    },

    onEachFeature: regionEvents
    
}).addTo(map); */
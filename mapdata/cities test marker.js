function createCity(imagePath, position, size) {

    var cityIcon = L.divIcon({
        className: 'city-container',
        html: '<img src="' + imagePath + '">',
        iconSize: size,
        iconAnchor: [size[0] / 2, size[1]]
    });

    var city = L.marker(position, {
        icon: cityIcon
    }).addTo(map);

    city.on('mouseover', function() {
        this.getElement().querySelector('img').style.transform = 'scale(1.05)';
    });

    city.on('mouseout', function() {
        this.getElement().querySelector('img').style.transform = 'scale(1)';
    });

    return city;
}

var acqueNere = createCity(
    'images/Città/Acquenere.png',
    [108, 188], //posizione
    [113, 56] //dimensione
);
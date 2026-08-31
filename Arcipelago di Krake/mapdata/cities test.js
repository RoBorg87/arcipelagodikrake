var acqueNereIcona = L.divIcon({
    className: 'city-container',
    html: '<img src="images/Città/Acquenere.png">',
    iconSize: [113, 56],
    iconAnchor: [56, 56]
});

var acqueNere = L.marker([138, 188], {
    icon: acqueNereIcona
}).addTo(map);

acqueNere.on('mouseover', function() {
    this.getElement().style.transform = 'scale(1.05)';
});

acqueNere.on('mouseout', function() {
    this.getElement().style.transform = 'scale(1)';
});
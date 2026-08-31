/* AGGIUNGERE QUI LE CITTA' */
var cities = [
    {
        image: 'images/Città/Acquenere.png',
        nome: 'Acque Nere',
        popolazione: 12000,
        pericolo: 1,
        x: 410, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 337, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 345, // Risoluzione orizzontale immagine
        height: 174, // Risoluzione verticale immagine
        popupx: -80, // Offset orizzontale popup
        popupy: 40, // Offset verticale popup
        trigger: [[
            [344, 405],
            [345, 570],
            [334, 687],
            [386, 753],
            [401, 567],
            [496, 558],
            [506, 468],
            [397, 459],
            [400, 409]
        ]]
    },
    {
        image: 'images/Città/Forte Terrore.png',
        nome: 'Forte Terrore',
        popolazione: 5,
        pericolo: 8,
        x: 795, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 784, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 289, // Risoluzione orizzontale immagine
        height: 206, // Risoluzione verticale immagine
        popupx: -40, // Offset orizzontale popup
        popupy: 40, // Offset verticale popup
        trigger: [[
            [790, 783],
            [800, 903],
            [791, 1018],
            [842, 1073],
            [975, 931],
            [970, 851],
            [862, 830],
            [864, 783]
        ]]
    }
];

/*var cities = [
    {
        image: 'images/Città/Acquenere.png',
        bounds: [[109.8, 132.09], [166.2, 245]],
        nome: 'Acque Nere',
        popolazione: 12000,
        pericolo: 1
    },
    {
        image: 'images/Città/Citta2.png',
        bounds: [[300, 400], [370, 520]],
        nome: 'Città 2',
        popolazione: 8500,
        pericolo: 2
    }
];*/
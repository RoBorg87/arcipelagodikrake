/* AGGIUNGERE QUI LE REGIONI */
var regions = [
    {
        image: 'images/Regioni/Isola Minore.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Isola Minore',
        popolazione: 12000,
        pericolo: 1,
        x: 189, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 248, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 605, // Risoluzione orizzontale immagine
        height: 568, // Risoluzione verticale immagine
        popupx: 30, // Offset orizzontale popup
        popupy: 0, // Offset verticale popup
        trigger: [[
            [550, 211],
            [370, 270],
            [372, 363],
            [330, 402],
            [275, 438],
            [269, 489],
            [318, 643],
            [448, 685],
            [510, 775],
            [607, 733],
            [611, 664],
            [569, 601],
            [514, 543],
            [639, 510],
            [652, 564],
            [724, 571],
            [789, 514],
            [789, 423],
            [702, 297]
        ]]
    },
    {
        image: 'images/Regioni/Biblioteca dei Mondi.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Biblioteca dei Mondi',
        popolazione: '?',
        pericolo: 0,
        x: 2346, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 2370, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 655, // Risoluzione orizzontale immagine
        height: 679, // Risoluzione verticale immagine
        popupx: -140, // Offset orizzontale popup
        popupy: -1300, // Offset verticale popup
        trigger: [[
            [2370, 2677],
            [2478, 2915],
            [2708, 3000],
            [2962, 2915],
            [3041, 2677],
            [2962, 2469],
            [2708, 2346],
            [2478, 2469]
        ]]
    }
];
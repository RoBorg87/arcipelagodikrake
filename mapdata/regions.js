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
        image: 'images/Regioni/La Costa.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'La Costa',
        popolazione: 438251,
        pericolo: 1,
        x: 456, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 1077, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 1075, // Risoluzione orizzontale immagine
        height: 690, // Risoluzione verticale immagine
        popupx: 30, // Offset orizzontale popup
        popupy: 0, // Offset verticale popup
        trigger: [[
            [1650, 362],
            [1555, 431],
            [1507, 515],
            [1485, 473],
            [1402, 427],
            [1385, 480],
            [1416, 566],
            [1484, 554],
            [1494, 668],
            [1441, 716],
            [1450, 642],
            [1378, 642],
            [1380, 662],
            [1286, 665],
            [1177, 754],
            [1225, 819],
            [1235, 877],
            [1197, 890],
            [1162, 864],
            [1120, 875],
            [1102, 920],
            [1100, 950],
            [1163, 967],
            [1252, 1108],
            [1191, 1108],
            [1198, 1176],
            [1165, 1158],
            [1174, 1081],
            [1104, 1083],
            [1103, 1150],
            [1058, 1189],
            [1131, 1300],
            [1220, 1367],
            [1296, 1566],
            [1510, 1521],
            [1563, 1404],
            [1732, 1292],
            [1727, 742],
            [1757, 667],
            [1757, 600],
            [1714, 540],
            [1682, 535],
            [1674, 500],
            [1700, 454],
            [1744, 457],
            [1753, 444],
            [1786, 444],
            [1798, 428],
            [1785, 414],
            [1754, 414],
            [1744, 401],
            [1685, 400]
        ]]
    },
    {
        image: 'images/Regioni/Isolacenere.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Isolacenere',
        popolazione: 43210,
        pericolo: 10,
        x: 1119, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 454, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 1594, // Risoluzione orizzontale immagine
        height: 1141, // Risoluzione verticale immagine
        popupx: 0, // Offset orizzontale popup
        popupy: -300, // Offset verticale popup
        trigger: [[
            [853, 1139],
            [538, 1705],
            [526, 1961],
            [562, 2093],
            [454, 2157],
            [546, 2449],
            [634, 2249],
            [710, 2337],
            [654, 2454],
            [618, 2602],
            [783, 2690],
            [928, 2694],
            [976, 2624],
            [1038, 2630],
            [1046, 2591],
            [1140, 2614],
            [1350, 2522],
            [1414, 2639],
            [1530, 2667],
            [1583, 2657],
            [1573, 2585],
            [1511, 2423],
            [1512, 2211],
            [1461, 2190],
            [1451, 2299],
            [1400, 2247],
            [1406, 2143],
            [1298, 2051],
            [1250, 1857],
            [1219, 1793],
            [1225, 1738],
            [1124, 1660],
            [1057, 1512],
            [1037, 1430],
            [952, 1217],
            [973, 1165],
            [942, 1124]
        ]]
    },
    {
        image: 'images/Regioni/Malburgone.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Malburgone',
        popolazione: 824,
        pericolo: 3,
        x: 1403, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 1290, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 923, // Risoluzione orizzontale immagine
        height: 1212, // Risoluzione verticale immagine
        popupx: -200, // Offset orizzontale popup
        popupy: -200, // Offset verticale popup
        trigger: [[
            [1511, 2304],
            [1512, 2211],
            [1461, 2190],
            [1451, 2299],
            [1400, 2247],
            [1406, 2143],
            [1298, 2051],
            [1333, 1817],
            [1426, 1741],
            [1836, 1500],
            [2500, 1423],
            [2494, 1498],
            [2404, 1586],
            [2400, 1639],
            [2194, 1799],
            [1822, 2353]
        ]]
    },
    {
        image: 'images/Regioni/Palude Salicea.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Palude Salicea',
        popolazione: 153,
        pericolo: 5,
        x: 240, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 1841, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 881, // Risoluzione orizzontale immagine
        height: 868, // Risoluzione verticale immagine
        popupx: 30, // Offset orizzontale popup
        popupy: -150, // Offset verticale popup
        trigger: [[
            [2075, 246],
            [2067, 391],
            [2035, 427],
            [2014, 413],
            [1989, 436],
            [1999, 500],
            [1980, 604],
            [1931, 604],
            [1940, 636],
            [1910, 644],
            [1851, 670],
            [1860, 814],
            [2158, 1000],
            [2222, 872],
            [2401, 900],
            [2446, 991],
            [2495, 995],
            [2514, 1111],
            [2587, 1012],
            [2561, 978],
            [2570, 809],
            [2626, 828],
            [2650, 795],
            [2637, 722],
            [2563, 744],
            [2538, 651],
            [2426, 596],
            [2436, 512],
            [2394, 472],
            [2373, 404],
            [2311, 377],
            [2274, 390],
            [2195, 305],
            [2155, 307],
            [2132, 267]
        ]]
    },
    {
        image: 'images/Regioni/Valleinverno.png',
        //bounds: [[y, x], [y+568-1, x+605-1]],
        nome: 'Valleinverno',
        popolazione: 78,
        pericolo: 2,
        x: 1638, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 1907, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 1029, // Risoluzione orizzontale immagine
        height: 608, // Risoluzione verticale immagine
        popupx: 30, // Offset orizzontale popup
        popupy: 0, // Offset verticale popup
        trigger: [[
            [1910, 2413],
            [1952, 2521],
            [1944, 2617],
            [2006, 2656],
            [2269, 2548],
            [2332, 2461],
            [2412, 2427],
            [2409, 2347],
            [2363, 2277],
            [2496, 2168],
            [2500, 2104],
            [2448, 2043],
            [2456, 1941],
            [2431, 1867],
            [2448, 1787],
            [2400, 1639],
            [2194, 1799],
            [1922, 2202]
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
        popupy: -1100, // Offset verticale popup
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
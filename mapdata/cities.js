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
            [863, 951],
            [975, 931],
            [970, 851],
            [862, 830],
            [864, 783]
        ]]
    },
    {
        image: 'images/Città/Ferrinsburg.png',
        nome: 'Ferrinsburg',
        popolazione: 12000,
        pericolo: 3,
        x: 650, // Posizione orizzontale immagine (punto basso-sinistra)
        y: 1379, // Posizione orizzontale immagine (punto basso-sinistra)
        width: 371, // Risoluzione orizzontale immagine
        height: 295, // Risoluzione verticale immagine
        popupx: -40, // Offset orizzontale popup
        popupy: 40, // Offset verticale popup
        trigger: [[
            [1380, 640],
            [1392, 796],
            [1384, 944],
            [1432, 1011],
            [1460, 840],
            [1513, 909],
            [1589, 873],
            [1603, 829],
            [1666, 827],
            [1686, 780],
            [1661, 717],
            [1617, 697],
            [1550, 678],
            [1514, 674],
            [1453, 761],
            [1450, 642]
        ]]
    },

    {
        image: 'images/Città/Tanfert.png',
        nome: 'Tanfert',
        popolazione: 12000,
        pericolo: 3,
        x: 604,
        y: 1937,
        width: 247,
        height: 212,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1935, 604],
            [1945, 711],
            [1937, 802],
            [1980, 850],
            [1985, 753],
            [2029, 784],
            [2074, 784],
            [2113, 761],
            [2145, 676],
            [2131, 660],
            [2086, 663],
            [2085, 636],
            [2049, 609],
            [1989, 659],
            [1995, 604]
        ]]
    },

    {
        image: 'images/Città/Rovine Urlanti.png',
        nome: 'Rovine Urlanti',
        popolazione: 12000,
        pericolo: 3,
        x: 1114,
        y: 2151,
        width: 245,
        height: 154,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [2152, 1113],
            [2160, 1217],
            [2151, 1309],
            [2200, 1364],
            [2212, 1239],
            [2240, 1271],
            [2304, 1262],
            [2302, 1243],
            [2234, 1143],
            [2213, 1163],
            [2220, 1113]
        ]]
    },

    {
        image: 'images/Città/Rima.png',
        nome: 'Rima',
        popolazione: 12000,
        pericolo: 3,
        x: 1148,
        y: 1910,
        width: 247,
        height: 162,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1908, 1147],
            [1916, 1246],
            [1910, 1345],
            [1952, 1369],
            [1954, 1300],
            [2015, 1306],
            [2053, 1290],
            [2069, 1215],
            [2045, 1187],
            [2000, 1165],
            [1965, 1183],
            [1968, 1146]
        ]]
    },

    {
        image: 'images/Città/Nordon.png',
        nome: 'Nordon',
        popolazione: 12000,
        pericolo: 3,
        x: 1834,
        y: 2306,
        width: 247,
        height: 155,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [2300, 1835],
            [2308, 1944],
            [2304, 2032],
            [2345, 2080],
            [2348, 1988],
            [2393, 2000],
            [2458, 1947],
            [2446, 1909],
            [2393, 1854],
            [2363, 1854],
            [2363, 1834]
        ]]
    },

    {
        image: 'images/Città/Cahld.png',
        nome: 'Cahld',
        popolazione: 12000,
        pericolo: 3,
        x: 1109,
        y: 1193,
        width: 249,
        height: 186,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1191, 1110],
            [1198, 1210],
            [1192, 1316],
            [1237, 1352],
            [1260, 1244],
            [1308, 1261],
            [1341, 1250],
            [1381, 1228],
            [1328, 1107],
            [1292, 1107],
            [1281, 1131],
            [1258, 1132],
            [1252, 1108]
        ]]
    },

    {
        image: 'images/Città/Brena.png',
        nome: 'Brena',
        popolazione: 12000,
        pericolo: 3,
        x: 1723,
        y: 1616,
        width: 289,
        height: 294,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1625, 1772],
            [1635, 1882],
            [1628, 1973],
            [1669, 2020],
            [1676, 1931],
            [1718, 2010],
            [1811, 1985],
            [1825, 1877],
            [1867, 1933],
            [1915, 1905],
            [1919, 1812],
            [1884, 1777],
            [1848, 1779],
            [1822, 1810],
            [1762, 1733],
            [1750, 1775],
            [1702, 1729],
            [1681, 1773]
        ]]
    },

    {
        image: 'images/Città/La Torre Bianca.png',
        nome: 'La Torre Bianca',
        popolazione: 12000,
        pericolo: 3,
        x: 2257,
        y: 2121,
        width: 268,
        height: 265,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [2121, 2269],
            [2128, 2380],
            [2121, 2468],
            [2177, 2525],
            [2182, 2431],
            [2216, 2453],
            [2309, 2445],
            [2330, 2367],
            [2384, 2345],
            [2322, 2318],
            [2322, 2290],
            [2272, 2255],
            [2216, 2245],
            [2183, 2269]
        ]]
    },

    {
        image: 'images/Città/Locanda Sottocolle.png',
        nome: 'Locanda Sottocolle',
        popolazione: 12000,
        pericolo: 3,
        x: 1938,
        y: 1402,
        width: 351,
        height: 149,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1397, 2047],
            [1407, 2154],
            [1400, 2245],
            [1447, 2300],
            [1450, 2202],
            [1459, 2200],
            [1466, 2061],
            [1484, 2089],
            [1516, 2088],
            [1547, 2036],
            [1541, 1994],
            [1496, 1940],
            [1440, 2008],
            [1457, 2047]
        ]]
    },

    {
        image: 'images/Città/Pietrafonda.png',
        nome: 'Pietrafonda',
        popolazione: 12000,
        pericolo: 3,
        x: 2124,
        y: 1011,
        width: 358,
        height: 156,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [1011, 2118],
            [1022, 2270],
            [1013, 2408],
            [1062, 2477],
            [1063, 2343],
            [1073, 2255],
            [1106, 2309],
            [1158, 2305],
            [1167, 2279],
            [1132, 2162],
            [1106, 2164],
            [1080, 2180],
            [1082, 2118]
        ]]
    },

    {
        image: 'images/Città/La Bocca del Diavolo.png',
        nome: 'La Bocca del Diavolo',
        popolazione: 12000,
        pericolo: 3,
        x: 1560,
        y: 802,
        width: 349,
        height: 257,
        popupx: 0,
        popupy: 0,
        trigger: [[
            [800, 1629],
            [808, 1757],
            [800, 1861],
            [853, 1918],
            [856, 1811],
            [909, 1898],
            [966, 1852],
            [957, 1837],
            [1051, 1771],
            [1051, 1689],
            [1003, 1653],
            [1009, 1641],
            [935, 1577],
            [869, 1695],
            [877, 1629]
        ]]
    }
];
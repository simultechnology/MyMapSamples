var ol = require('openlayers');

// 最小経度・緯度、最大経度・緯度
const MY_BOUNDS = [
  424800000,
  84000000,
  561600000,
  84000000,
  561600000,
  165600000,
  424800000,
  165600000
];

var polyCoords = [];
// var coords = "122.5,23 150,23 150,45 122.5,45".split(' ');
//
// for (var i in coords) {
//   var c = coords[i].split(',');
//   polyCoords.push(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], 'EPSG:4326', 'EPSG:3857'));
// }

var bounds = MY_BOUNDS.map(convertMillisecondToDegree);

for (var i = 0; i < bounds.length; i += 2) {
  //polyCoords.push(ol.proj.transform([bounds[i], bounds[i + 1]], 'EPSG:4326', 'EPSG:3857'));
  polyCoords.push([bounds[i], bounds[i + 1]]);
}

console.log(polyCoords);

var feature = new ol.Feature({
  //geometry: new ol.geom.Polygon([getLonLat(bounds[0], bounds[1]), getLonLat(bounds[2], bounds[3])])
  geometry: new ol.geom.Polygon([polyCoords])
});

feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
var vectorSource= new ol.source.Vector({
  features: [feature ]
});

var vectorLayer = new ol.layer.Vector({
  source: vectorSource
});


var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([139.81, 36.22]),
    zoom: 5
  })
});

function convertMillisecondToDegree(val) {
  return val / (60 * 60 * 1000.0);
}

function getLonLat(lon, lat) {
  return ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
}


var ol = require('openlayers');
const { polyCoords } = require('./commondata');

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

function getLonLat(lon, lat) {
  return ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');
}


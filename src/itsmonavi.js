const { coordsByLv } = require('./commondata');

var map = new ZDC.Map(
  document.getElementById('map'),
  {
    zoom: 2,
    scale: 0.2
  }
);

console.log(coordsByLv);

var latlons = coordsByLv[7].map((coord) => {
  return new ZDC.LatLon(coord[1], coord[0]);
});

var polyline = new ZDC.Polyline(latlons, {
  fillColor: '#DDD',
  fillOpacity: 0.4
});
map.addWidget(polyline);
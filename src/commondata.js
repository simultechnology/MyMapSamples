// 最小経度・緯度、最大経度・緯度
const LV5_BOUNDS = [
  424800000,
  84000000,
  561600000,
  84000000,
  561600000,
  165600000,
  424800000,
  165600000,
  424800000,
  84000000
];

const LV7_BOUNDS = [
  441000000,
  85200000,
  540000000,
  85200000,
  540000000,
  163200000,
  441000000,
  163200000,
  441000000,
  85200000
];

function convArrayToLatlons(orgBounds) {
  var bounds = orgBounds.map(convertMillisecondToDegree);
  var polyCoords = [];
  for (var i = 0; i < bounds.length; i += 2) {
    //polyCoords.push(ol.proj.transform([bounds[i], bounds[i + 1]], 'EPSG:4326', 'EPSG:3857'));
    polyCoords.push([bounds[i], bounds[i + 1]]);
  }
  return polyCoords;

  function convertMillisecondToDegree(val) {
    return val / (60 * 60 * 1000.0);
  }

}

module.exports = {
  polyCoords: convArrayToLatlons(LV5_BOUNDS),
  coordsByLv: {
    5: convArrayToLatlons(LV5_BOUNDS),
    7: convArrayToLatlons(LV7_BOUNDS)
  }
};


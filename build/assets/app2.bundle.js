/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(4);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";

	// 最小経度・緯度、最大経度・緯度
	var LV5_BOUNDS = [424800000, 84000000, 561600000, 84000000, 561600000, 165600000, 424800000, 165600000, 424800000, 84000000];

	var LV7_BOUNDS = [441000000, 85200000, 540000000, 85200000, 540000000, 163200000, 441000000, 163200000, 441000000, 85200000];

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(3);

	var coordsByLv = _require.coordsByLv;


	var map = new ZDC.Map(document.getElementById('map'), {
	  zoom: 2,
	  scale: 0.2
	});

	console.log(coordsByLv);

	var latlons = coordsByLv[7].map(function (coord) {
	  return new ZDC.LatLon(coord[1], coord[0]);
	});

	var polyline = new ZDC.Polyline(latlons, {
	  fillColor: '#DDD',
	  fillOpacity: 0.4
	});
	map.addWidget(polyline);

/***/ }
/******/ ]);
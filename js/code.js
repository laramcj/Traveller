L.mapquest.key = 'iA64xVRbsuKpxU4P3GQ1ZV5Sf9k7v2I2';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [-23.541228433062805, -46.60358582901289],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
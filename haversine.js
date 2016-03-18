// HAVERSINE FORMULA
// calculate the distance between two points on the earth given with latitude & longitude

// arguments of the form (lat1, lon1, lat2, lon2)
function haversine() {
  'use strict';
  const R = 6371; // mean radius of the earth in km
  let radians = Array.prototype.map.call(arguments, function(deg) {
    return deg / 180.0 * Math.PI;
  });
  let lat1 = radians[0]
    , lon1 = radians[1]
    , lat2 = radians[2]
    , lon2 = radians[3];
  let dLat = lat2 - lat1;
  let dLon = lon2 - lon1;
  let sin = Math.sin, cos = Math.cos;
  let a = sin(dLat / 2) * sin(dLat / 2) + sin(dLon / 2) * sin(dLon / 2) * cos(lat1) * cos(lat2);
  let c = 2 * Math.asin(Math.sqrt(a));
  return R * c;
}

// should be about 2886
console.log(haversine(36.12, -86.67, 33.94, -118.40));

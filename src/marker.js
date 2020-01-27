const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  // Your Code Here
const markerDomEl3 = document.createElement("div");
markerDomEl3.style.width = "32px";
markerDomEl3.style.height = "39px";
markerDomEl3.style.backgroundImage = `url(${iconURLs[type]})`;
return new mapbox.Marker(markerDomEl3).setLngLat(coords);
};
module.exports = buildMarker;

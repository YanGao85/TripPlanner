const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoieWFuZ2FvODUiLCJhIjoiY2s1d29ibG12MGU3OTNscWJhZHo1NmRwOCJ9.Puyeooipoj8FBSIDFj9Aww";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const markerDomEl2 = document.createElement("div");
markerDomEl2.style.width = "32px";
markerDomEl2.style.height = "39px";
markerDomEl2.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl2).setLngLat([-73, 40.5]).addTo(map);

const marker = buildMarker("hotels", [-74, 41]);
marker.addTo(map);

const marker2 = buildMarker("activities", [-74.25, 41]);
marker2.addTo(map);

const marker3 = buildMarker("restaurants", [-74.5, 41]);
marker3.addTo(map);

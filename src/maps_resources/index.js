/**@format */

import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyCBwWMrTWTKZppuxQyA6xXZZzZ6C1HYMaw",
  version: "weekly",
});

loader.load().then(() => {
  new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

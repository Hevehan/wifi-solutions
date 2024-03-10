// google-map.js

function initMap() {
    // Location coordinates
    var location = {lat: 51.5074, lng: -0.1278}; // Replace with your desired location coordinates

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 10 // Adjust zoom level as needed
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: location,
        title: 'Your Location' // Replace with your desired marker title
    });
}

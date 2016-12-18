google.maps.event.addDomListener(window, 'load' , initialize);
function initialize() {
    var gps = navigator.geolocation.getCurrentPosition(
        function(position) {
            var mapOptions = {
                center: { lat: position.coords.latitude, lng: position.coords.longitude},
                zoom: 16
            };
        var map = new google.maps.Map(document.getElementById('maps-canvas'),mapOptions);
        }
        );
};

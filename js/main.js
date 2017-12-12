// Automatic date for footer
var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('date');
el.innerHTML = "Copyright &copy;" + year + ", Maverick Wire, LLC. All rights reserved.";

// Google Maps API
jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyBI_QjrjaE2Nj15hmjxVNO62sl-lbUzHzQ&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Sunlight Feed & Farm Center', 37.9424996, -90.782872],
        ['Tractor Supply Co.', 37.7884455, -90.4343723],
        ['MFA', 37.9162094, -91.325002],
        ['Tractor Supply Co.', 38.4770283, -90.5235765],
        ['MFA', 37.9502525, -91.77114],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Sunlight Feed & Farm Center</h3>' +
        '<p>1001 North Missouri Street<br>Potosi, MO 63664</p>' +        
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Tractor Supply Co.</h3>' +
        '<p>604 Walmart Drive<br>Farmington, MO 63640</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>MFA</h3>' +
        '<p>17784 Highway 19<br>Steelville, MO 65565</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Tractor Supply Co.</h3>' +
        '<p>40 Dillon Plaza Drive<br>High Ridge, MO 63049</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>MFA</h3>' +
        '<p>209 East 8th Street<br>Rolla, MO 65401</p>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  a
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2], markers[i][3]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });
    
}
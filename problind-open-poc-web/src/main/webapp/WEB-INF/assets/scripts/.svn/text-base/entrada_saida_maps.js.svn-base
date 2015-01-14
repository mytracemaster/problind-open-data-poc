var MapsGoogle = function () {

    var mapRoutes = function () {

    	var latlng = new google.maps.LatLng($('#latOrigem').val(), $('#lngOrigem').val());
    	
        var map = new GMaps({
            div: '#gmap_routes',
            lat: $('#latOrigem').val(),
            lng: $('#lngOrigem').val(),
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        $('#gmap_routes_start').click(function (e) {
            e.preventDefault();
            App.scrollTo($(this), 400);
            map.travelRoute({
                origin: [$('#latOrigem').val(), $('#lngOrigem').val()],
                destination: [$('#latDestino').val(), $('#lngDestino').val()],
                travelMode: 'driving',
                step: function (e) {
                    $('#gmap_routes_instructions').append('<li>' + e.instructions + '</li>');
                    $('#gmap_routes_instructions li:eq(' + e.step_number + ')').delay(800 * e.step_number).fadeIn(500, function () {
                        map.setCenter(e.end_location.lat(), e.end_location.lng());
                        map.drawPolyline({
                            path: e.path,
                            strokeColor: '#131540',
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });
                    });
                }
            });
        });
    };

    return {
        //main function to initiate map samples
        init: function () {
            mapRoutes();
        }

    };

}();
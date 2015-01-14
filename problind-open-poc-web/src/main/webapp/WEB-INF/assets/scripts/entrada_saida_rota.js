var EntradaSaida = function() {

	var handleEntradaSaida = function() {

		var addressOrigem = $('#origem').val();
	     
		var geocoder = new google.maps.Geocoder(); 
		geocoder.geocode({
				address : addressOrigem, 
				region: 'no' 
			},
		    function(results, status) {
		    	if (status.toLowerCase() == 'ok') {
					// Get center
					var coordsOrig = new google.maps.LatLng(
						results[0]['geometry']['location'].lat(),
						results[0]['geometry']['location'].lng()
					);
				
					$('#latOrigem').val(coordsOrig.lat());
					$('#lngOrigem').val(coordsOrig.lng());
 
		    	}
			}
		);
    		
        var addressDestino = $('#destino').val();
     
        var geocoder2 = new google.maps.Geocoder(); 
		geocoder2.geocode({
				address : addressDestino, 
				region: 'no' 
			},
		    function(results, status) {
		    	if (status.toLowerCase() == 'ok') {
					// Get center
					var coordsDest = new google.maps.LatLng(
						results[0]['geometry']['location'].lat(),
						results[0]['geometry']['location'].lng()
					);
					
					$('#latDestino').val(coordsDest.lat());
					$('#lngDestino').val(coordsDest.lng());
 
		    	}
			}
		);
		
		$('#btVoltar').click(
				function(e) {
					if($("#flg").val()=='true'){
						$('.entradaSaida-form').attr("action",
								$("#ctx").attr("value") );
					}else{
						$('.entradaSaida-form').attr("action",
								$("#ctx").attr("value") + "/entradaSaida/voltar");
					}

					$('.entradaSaida-form').submit();
					return false;
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleEntradaSaida();
		}
	};

}();
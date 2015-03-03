var EntradaSaida = function() {	
	
	var handleEntradaSaida = function() {
		
	};
	
	$('#btVoltar').click(
			function(e) {
				App.blockUI({boxed: true});
				$(".entradaSaida-form").validate().cancelSubmit = true;
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") );
				$('.entradaSaida-form').submit();
				return false;
			});

	return {
		// main function to initiate the module
		init : function() {
			handleEntradaSaida();
		}
	};

}();
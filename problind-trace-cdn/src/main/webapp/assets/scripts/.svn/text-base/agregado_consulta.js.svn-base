var Agregado = function() {	
	
	var handleAgregado = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/consultar");
					$(".agregado-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/novo");
					$('.agregado-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/excluir/lote");
					$('.agregado-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/consulta");
					$('.agregado-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action", $('#url').val());
					$('.agregado-form').submit();
					return false;
				});
		
		jQuery('#tbAgre .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).parents('tr').removeClass("active");
                }                    
            });
            jQuery.uniform.update(set);
        });
		
		$('#btModalExcluir').click(function() {
	        $('.checkboxes').each(function(){
	        	if ($(this).is(':checked')) {
	        		$('#portlet-config').show();
	        	}
	        });
	    });

	};

	return {
		// main function to initiate the module
		init : function() {
			handleAgregado();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.agregado-form').attr("action",
					$("#ctx").attr("value") + "/agregado/consultar");
			$(".agregado-form").submit();
	  }
	}); 
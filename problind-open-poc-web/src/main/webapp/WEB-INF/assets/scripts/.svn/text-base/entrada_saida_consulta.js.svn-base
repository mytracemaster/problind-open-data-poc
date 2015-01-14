var EntradaSaida = function() {	
	
	var handleEntradaSaida = function() {
		
		$('#fabricanteEntradaSaida').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/entradaSaida/carregarModeloFabricante?id=" + $("#fabricanteEntradaSaida").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#modeloEntradaSaida').find('option').remove();
				$('#modeloEntradaSaida').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloEntradaSaida').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/consultar");
					$(".entradaSaida-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/novo");
					$('.entradaSaida-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/excluir/lote");
					$('.entradaSaida-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/consulta");
					$('.entradaSaida-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.entradaSaida-form').attr("action", $("#url").val());
					$('.entradaSaida-form').submit();
					return false;
				});
		
		jQuery('#tbEntradaSaida .group-checkable').change(function () {
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
			handleEntradaSaida();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.entradaSaida-form').attr("action",
					$("#ctx").attr("value") + "/entradaSaida/consultar");
			$(".entradaSaida-form").submit();
	  }
	}); 
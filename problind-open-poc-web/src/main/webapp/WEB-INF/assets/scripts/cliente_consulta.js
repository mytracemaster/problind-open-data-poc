var Cliente = function() {	
	
	var handleCliente = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					if($('#clienteTipoPessoa').attr("value") == 'F'){
						$('#clienteCpfCnpj').attr('name', 'cliente.nrCpf');
					}else if($('#clienteTipoPessoa').attr("value") == 'J'){
						$('#clienteCpfCnpj').attr('name', 'cliente.nrCnpj');
					}
					
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/consultar");
					$(".cliente-form").submit();
		});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/excluir/lote");
					$('.cliente-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/consulta");
					$('.cliente-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.cliente-form').attr("action", $("#url").val());
					$('.cliente-form').submit();
					return false;
				});
		
		$('#btModalExcluir').click(function() {
	        $('.checkboxes').each(function(){
	        	if ($(this).is(':checked')) {
	        		$('#portlet-config').show();
	        	}
	        });
	    });
		
		$('#clienteTipoPessoa').change(function() {
			
			if($("#clienteTipoPessoa").attr("value") == 'F')
			{
				$("#clienteCpfCnpj").prop('disabled', false);
				$("#clienteCpfCnpj").inputmask("999.999.999-99");
			}else if($("#clienteTipoPessoa").attr("value") == 'J'){
				$("#clienteCpfCnpj").prop('disabled', false);
				$("#clienteCpfCnpj").inputmask("99.999.999/9999-99");
			}else{
				$('#clienteCpfCnpj').attr("value",  '');
				$("#clienteCpfCnpj").prop('disabled', true);
			}
		});
		
		if($("#clienteTipoPessoa").attr("value") == 'F')
		{
			$("#clienteCpfCnpj").prop('disabled', false);
			$("#clienteCpfCnpj").inputmask("999.999.999-99");
		}else if($("#clienteTipoPessoa").attr("value") == 'J'){
			$("#clienteCpfCnpj").prop('disabled', false);
			$("#clienteCpfCnpj").inputmask("99.999.999/9999-99");
		}else{
			$('#clienteCpfCnpj').attr("value",  '');
			$("#clienteCpfCnpj").prop('disabled', true);
		}
	};

	return {
		// main function to initiate the module
		init : function() {
			handleCliente();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
		  App.blockUI({boxed: true});
			if($('#clienteTipoPessoa').attr("value") == 'F'){
				$('#clienteCpfCnpj').attr('name', 'cliente.nrCpf');
			}else if($('#clienteTipoPessoa').attr("value") == 'J'){
				$('#clienteCpfCnpj').attr('name', 'cliente.nrCnpj');
			}
			
			$('.cliente-form').attr("action",
					$("#ctx").attr("value") + "/cliente/consultar");
			$(".cliente-form").submit();
	  }
	}); 
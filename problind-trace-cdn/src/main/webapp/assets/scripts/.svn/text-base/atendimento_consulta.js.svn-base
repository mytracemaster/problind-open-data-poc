var Atendimento = function() {	
	
	var handleAtendimento = function() {
	
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/consultar");
					$(".atendimento-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/novo");
					$('.atendimento-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/excluir/lote");
					$('.atendimento-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/consulta");
					$('.atendimento-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action", $("#url").val());
					$('.atendimento-form').submit();
					return false;
				});
		
		
		jQuery('#tbAtend .group-checkable').change(function () {
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
			handleAtendimento();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.atendimento-form').attr("action",
					$("#ctx").attr("value") + "/atendimento/consultar");
			$(".atendimento-form").submit();
	  }
	}); 

function preencherContrato(idAtend, cliente, email, idVendedor, nivelBlind, telCom, telCel, obs, idProposta){
	$('#cdAtendimento').val(idAtend);
	$('#cdProposta').val(idProposta);
	$('#cliente').val(cliente);
	$('#email').val(email);
	$('#vendedor').val(idVendedor);
	$('#nivelBlindagem').val(nivelBlind);
	$('#telCom').val(telCom);
	$('#telCel').val(telCel);
	$('#obs').val(obs);
	App.blockUI({boxed: true});
	$('.atendimento-form').attr("action",
			$("#ctx").attr("value") + "/propostaContrato/preencherContrato");
	$(".atendimento-form").submit();
}

function preencherProposta(idAtend, cliente, email, idVendedor, nivelBlind, telCom, telCel, obs){
	$('#cdAtendimentoProp').val(idAtend);
	$('#clienteProp').val(cliente);
	$('#emailProp').val(email);
	$('#vendedorProp').val(idVendedor);
	$('#nivelBlindagemProp').val(nivelBlind);
	$('#telComProp').val(telCom);
	$('#telCelProp').val(telCel);
	$('#obsProp').val(obs);
	App.blockUI({boxed: true});
	$('.atendimento-form').attr("action",
			$("#ctx").attr("value") + "/proposta/preencherProposta");
	$(".atendimento-form").submit();
}
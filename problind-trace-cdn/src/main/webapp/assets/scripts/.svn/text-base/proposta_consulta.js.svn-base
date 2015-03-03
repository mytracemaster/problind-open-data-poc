var Proposta = function() {	
	
	var handleProposta = function() {
	
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/proposta/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value=""></option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('#s2id_vendedor').attr("class", "select2-container select2-allowclear select2-container form-control select2me");
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/consultar");
					$(".proposta-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/novo");
					$('.proposta-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/excluir/lote");
					$('.proposta-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/consulta");
					$('.proposta-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.proposta-form').attr("action", $("#url").val());
					$('.proposta-form').submit();
					return false;
				});
		
		
		jQuery('#tbProposta .group-checkable').change(function () {
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
			handleProposta();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.proposta-form').attr("action",
					$("#ctx").attr("value") + "/proposta/consultar");
			$(".proposta-form").submit();
	  }
	}); 

function preencharContrato(idProposta, cliente, email, idVendedor, nivelBlind, telCom, telCel, idModelo, infCompl, vrBlind, prazo, idAtend, idFabricante){
	$('#cdProposta').val(idProposta);
	$('#cliente').val(cliente);
	$('#email').val(email);
	$('#vendedor').val(idVendedor);
	$('#nivelBlindagem').val(nivelBlind);
	$('#telCom').val(telCom);
	$('#telCel').val(telCel);
	$('#modelo').val(idModelo);
	$('#fabricante').val(idFabricante);
	$('#infCompl').val(infCompl);
	$('#valorBlindagem').val(vrBlind);
	$('#prazo').val(prazo);
	$('#atendimento').val(idAtend);
	App.blockUI({boxed: true});
	$('.proposta-form').attr("action",
			$("#ctx").attr("value") + "/propostaContrato/preencherContrato");
	$(".proposta-form").submit();
}

function imprimir(id) {
	App.blockUI({boxed: true});
	var urlImgCapa = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/capa_proposta.png';
	var urlImgCert = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/pag1_proposta.png';
	var urlImgPagina = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/pag_proposta.png';
	var urlImgRunOnFlat = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/runflat_proposta.png';
	var urlImgNivelBlind = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/tabNivelBlind.png';
	var urlImgResistencia = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/tabResistencia.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_proposta&CD_PROPOSTA=" + id + '&IMG_CAPA=' + urlImgCapa + '&IMG_CERTIFICACAO=' + urlImgCert + '&IMG_PAGINA=' + urlImgPagina + '&IMG_RUNFLAT=' + urlImgRunOnFlat + '&IMG_NIVEL_BLIND=' + urlImgNivelBlind + '&IMG_RESISTENCIA=' + urlImgResistencia;
	$('.proposta-form').attr("action", url);
	$('.proposta-form').submit();
	App.unblockUI();
}
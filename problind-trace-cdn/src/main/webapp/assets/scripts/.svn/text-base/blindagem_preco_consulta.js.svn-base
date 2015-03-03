var BlindagemPreco = function() {	
	
	var handleBlindagemPreco = function() {
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagemPreco/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value="">Todos</option>');
				
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
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/consultar");
					$(".blindagemPreco-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/novo");
					$('.blindagemPreco-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/excluir/lote");
					$('.blindagemPreco-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/consulta");
					$('.blindagemPreco-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagemPreco-form').attr("action", $('#url').val());
					$('.blindagemPreco-form').submit();
					return false;
				});
		
		$('#btImprimir').click(
				function(e) {
					var urlImgPagina = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/pag_proposta.png';
					var fabricante = $('#fabricanteVeiculo').val();
					var modelo = $('#modeloVeiculo').val();
					var nivelBlindagem = $('#nivelBlindagem').val();
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_blindagem_preco&IMG_PAGINA=" + urlImgPagina + '&FABRICANTE=' + fabricante + '&MODELO=' + modelo + '&NIVEL_BLIND=' + nivelBlindagem;
					$('.blindagemPreco-form').attr("action", url);
					$('.blindagemPreco-form').submit();
				});
		
		jQuery('#tbBlindPreco .group-checkable').change(function () {
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
			handleBlindagemPreco();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.blindagemPreco-form').attr("action",
					$("#ctx").attr("value") + "/blindagemPreco/consultar");
			$(".blindagemPreco-form").submit();
	  }
	}); 
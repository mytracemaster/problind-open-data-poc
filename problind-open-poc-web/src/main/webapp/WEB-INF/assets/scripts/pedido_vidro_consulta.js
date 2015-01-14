var PedidoVidro = function() {	
	
	var handlePedidoVidro = function() {
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/pedidoVidro/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
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
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/consultar");
					$(".pedido-vidro-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/novo");
					$('.pedido-vidro-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/excluir/lote");
					$('.pedido-vidro-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/consulta");
					$('.pedido-vidro-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.pedido-vidro-form').attr("action", $("#url").val());
					$('.pedido-vidro-form').submit();
					return false;
				});
		
		jQuery('#tbPedidoVidro .group-checkable').change(function () {
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
			handlePedidoVidro();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.pedido-vidro-form').attr("action",
					$("#ctx").attr("value") + "/pedidoVidro/consultar");
			$(".pedido-vidro-form").submit();
	  }
	}); 

function imprimir(id) {
	App.blockUI({boxed: true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_pedido_vidro&CD_PEDIDO_VIDRO=" + id + '&URL_IMG=' + urlImg;
	$('.pedido-vidro-form').attr("action", url);
	$('.pedido-vidro-form').submit();
	App.unblockUI();
}
var Veiculo = function() {	
	
	var handleVeiculo = function() {
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/veiculo/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
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
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/consultar");
					$(".veiculo-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/detalhe");
					$('.veiculo-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/excluir/lote");
					$('.veiculo-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/consulta");
					$('.veiculo-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.veiculo-form').attr("action", $("#url").val());
					$('.veiculo-form').submit();
					return false;
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
			handleVeiculo();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.veiculo-form').attr("action",
					$("#ctx").attr("value") + "/veiculo/consultar");
			$(".veiculo-form").submit();
	  }
	}); 

function imprimir(id) {
	App.blockUI({boxed: true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_identificacao_veiculo&CD_VEICULO=" + id + '&URL_IMG=' + urlImg;
	$('.veiculo-form').attr("action", url);
	$('.veiculo-form').submit();
	App.unblockUI();
}

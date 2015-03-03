var Blindagem = function() {	
	
	var handleBlindagem = function() {
		
		$('#fabricanteBlindagem').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagem/carregarModeloFabricante?id=" + $("#fabricanteBlindagem").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloBlindagem').find('option').remove();
				$('#modeloBlindagem').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloBlindagem').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.blindagem-form').attr("action",
							$("#ctx").attr("value") + "/blindagem/consultar");
					$(".blindagem-form").submit();
		});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagem-form').attr("action",
							$("#ctx").attr("value") + "/blindagem/excluir/lote");
					$('.blindagem-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagem-form').attr("action",
							$("#ctx").attr("value") + "/blindagem/consulta");
					$('.blindagem-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagem-form').attr("action", $("#url").val());
					$('.blindagem-form').submit();
					return false;
				});
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleBlindagem();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.blindagem-form').attr("action",
					$("#ctx").attr("value") + "/blindagem/consultar");
			$(".blindagem-form").submit();
	  }
	}); 

function imprimir(id) {
	App.blockUI({boxed : true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString() + '/' + $('#ctx').val().toString() + '/assets/img/headerContrato.png';
	var urlImgNivelBlind = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString() + '/' + $('#ctx').val().toString() + '/assets/img/tabNivelBlind.png';
	var report_name = "rpt_declaracao_blindagem"; 

	var url = $("#ctx").attr("value") + "/report?RPT_NAME=" + report_name
			+ "&NUM_OS=" + id + '&URL_IMG=' + urlImg + '&URL_IMG_NIVEL_BLIND='
			+ urlImgNivelBlind;
	$('.blindagem-form').attr("action", url);
	$('.blindagem-form').submit();
	App.unblockUI();
}

function imprimirTermo(id) {
	App.blockUI({boxed : true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString() + '/' + $('#ctx').val().toString() + '/assets/img/headerContrato.png';
	var report_name = "rpt_termo_responsabilidade"; 

	var url = $("#ctx").attr("value") + "/report?RPT_NAME=" + report_name
			+ "&NUM_OS=" + id + '&URL_IMG=' + urlImg;
	$('.blindagem-form').attr("action", url);
	$('.blindagem-form').submit();
	App.unblockUI();
}
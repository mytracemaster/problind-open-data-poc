var Comissao = function() {	
	
	var handleComissao = function() {
	
		$('#btImprimir').click
				(function(e) {
					App.blockUI({boxed: true});
					var dtInicio = $('#dataInicio').val();
					var dtFim = $('#dataFim').val();
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_veiculos_finalizados&DT_INICIO=" + dtInicio + '&DT_FIM=' + dtFim + '&URL_IMG=' + urlImg;
					$('.veiculosFinalizados-form').attr("action", url);
					$('.veiculosFinalizados-form').submit();
					App.unblockUI();
		});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.veiculosFinalizados-form').attr("action", $("#url").val());
					$('.veiculosFinalizados-form').submit();
					return false;
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleComissao();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			imprimir();
	  }
	}); 

function imprimir() {
	App.blockUI({boxed: true});
	var dtInicio = $('#dataInicio').val();
	var dtFim = $('#dataFim').val();
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_veiculos_finalizados&DT_INICIO=" + dtInicio + '&DT_FIM=' + dtFim + '&URL_IMG=' + urlImg;
	$('.veiculosFinalizados-form').attr("action", url);
	$('.veiculosFinalizados-form').submit();
	App.unblockUI();
}
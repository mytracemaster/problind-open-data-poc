var Comissao = function() {	
	
	var handleComissao = function() {
	
		$('#btImprimir').click
				(function(e) {
					App.blockUI({boxed: true});
					var id = $('#vendedor').val();
					var dtInicio = $('#dataInicio').val();
					var dtFim = $('#dataFim').val();
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_comissao&CD_VENDEDOR=" + id + '&DT_INICIO=' + dtInicio + '&DT_FIM=' + dtFim + '&URL_IMG=' + urlImg;
					$('.comissao-form').attr("action", url);
					$('.comissao-form').submit();
					App.unblockUI();
		});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.comissao-form').attr("action", $("#url").val());
					$('.comissao-form').submit();
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
	var id = $('#vendedor').val();
	var dtInicio = $('#dataInicio').val();
	var dtFim = $('#dataFim').val();
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_comissao&CD_VENDEDOR=" + id + '&DT_INICIO=' + dtInicio + '&DT_FIM=' + dtFim + '&URL_IMG=' + urlImg;
	$('.comissao-form').attr("action", url);
	$('.comissao-form').submit();
	App.unblockUI();
}
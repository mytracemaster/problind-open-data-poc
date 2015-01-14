var Veiculo = function() {	
	
	var handleVeiculo = function() {
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleVeiculo();
		}
	};

}();

function acompanharBlindagem(id){
	App.blockUI({boxed: true});
	var url = $("#ctx").attr("value") + "/blindagem/detalharBlindagem?id=" + id;
	$('.veiculo-form').attr("action", url);
	$('.veiculo-form').submit();
	App.unblockUI();
}

function imprimirChecklist(id) {
	App.blockUI({boxed: true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_checklist&ID_CHECKLIST=" + id + '&URL_IMG=' + urlImg;
	$('.veiculo-form').attr("action", url);
	$('.veiculo-form').submit();
	App.unblockUI();
}

function imprimirContrato(id, idFabricante) {
	App.blockUI({boxed : true});
	
	var urlImg = 'https://' + $('#server').val().toString() + ':'
			+ $('#port').val().toString() + '/' + $('#ctx').val().toString()
			+ '/assets/img/headerContrato.png';
	var urlImgNivelBlind = 'https://' + $('#server').val().toString() + ':'
			+ $('#port').val().toString() + '/' + $('#ctx').val().toString()
			+ '/assets/img/tabNivelBlind.png';
	var report_name = idFabricante == 500 ? "rpt_contrato_audi"
			: "rpt_contrato"; // idFabricante = 500 (AUDI)

	var url = $("#ctx").attr("value") + "/report?RPT_NAME=" + report_name + "&NUM_OS=" + id + '&URL_IMG=' + urlImg + '&URL_IMG_NIVEL_BLIND='+ urlImgNivelBlind;
	$('.veiculo-form').attr("action", url);
	$('.veiculo-form').submit();
	App.unblockUI();
}
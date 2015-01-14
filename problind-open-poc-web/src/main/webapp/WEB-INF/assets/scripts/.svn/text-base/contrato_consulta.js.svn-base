var Proposta = function() {

	var handleProposta = function() {

		$('#fabricanteVeiculo')
				.change(
						function(e) {
							App.blockUI({
								boxed : true
							});
							e.preventDefault();
							var postData = $(this).serializeArray();
							var formURL = $("#ctx").attr("value")
									+ "/propostaContrato/carregarModeloFabricante?id="
									+ $("#fabricanteVeiculo").attr("value");
							$
									.ajax({
										url : formURL,
										type : 'POST',
										data : postData,
										dataType : 'JSON',
									})
									.done(
											function(data, textStatus, jqXHR) {
												// alert("falha");

												$('#modeloVeiculo').find(
														'option').remove();
												$('#modeloVeiculo')
														.append(
																'<option value="">Todos</option>');

												for (var i = 0; i < data.modeloList.length; i++) {
													d = data.modeloList[i];
													$('#modeloVeiculo')
															.append(
																	'<option value="'
																			+ d.cdModelo
																			+ '">'
																			+ d.nmModelo
																			+ '</option>');
												}

												App.unblockUI();
											}).fail(
											function(jqXHR, textStatus,
													errorThrown) {
												// alert("falha");
											});
						});

		$('#btBuscar')
				.click(
						function(e) {
							App.blockUI({
								boxed : true
							});
							$('#s2id_vendedor')
									.attr("class",
											"select2-container select2-allowclear select2-container form-control select2me");
							$('#dataAtendimento').removeProp("readonly");
							$('#dataAtendimentoFinal').removeProp("readonly");
							$('.propostaContrato-form').attr(
									"action",
									$("#ctx").attr("value")
											+ "/propostaContrato/consultar");
							$(".propostaContrato-form").submit();
						});

		$('#btNovo')
				.click(
						function(e) {
							App.blockUI({
								boxed : true
							});
							$('.propostaContrato-form').attr(
									"action",
									$("#ctx").attr("value")
											+ "/propostaContrato/novo");
							$('.propostaContrato-form').submit();
							return false;
						});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({
						boxed : true
					});
					$('.propostaContrato-form').attr(
							"action",
							$("#ctx").attr("value")
									+ "/propostaContrato/excluir/lote");
					$('.propostaContrato-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({
						boxed : true
					});
					$('.propostaContrato-form').attr(
							"action",
							$("#ctx").attr("value")
									+ "/propostaContrato/consulta");
					$('.propostaContrato-form').submit();
					return false;
				});

		$('#btVoltar').click(function(e) {
			App.blockUI({
				boxed : true
			});
			$('.propostaContrato-form').attr("action", $("#url").val());
			$('.propostaContrato-form').submit();
			return false;
		});

		jQuery('#tbProp .group-checkable').change(function() {
			var set = jQuery(this).attr("data-set");
			var checked = jQuery(this).is(":checked");
			jQuery(set).each(function() {
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
			$('.checkboxes').each(function() {
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

$(document)
		.keypress(
				function(event) {
					if (event.which === 13) {
						App.blockUI({
							boxed : true
						});
						$('#s2id_vendedor')
								.attr("class",
										"select2-container select2-allowclear select2-container form-control select2me");
						$('#dataAtendimento').removeProp("readonly");
						$('#dataAtendimentoFinal').removeProp("readonly");
						$('.propostaContrato-form').attr(
								"action",
								$("#ctx").attr("value")
										+ "/propostaContrato/consultar");
						$(".propostaContrato-form").submit();
					}
				});

function imprimir(id, idFabricante) {
	App.blockUI({
		boxed : true
	});
	var urlImg = 'https://' + $('#server').val().toString() + ':'
			+ $('#port').val().toString() + '/' + $('#ctx').val().toString()
			+ '/assets/img/headerContrato.png';
	var urlImgNivelBlind = 'https://' + $('#server').val().toString() + ':'
			+ $('#port').val().toString() + '/' + $('#ctx').val().toString()
			+ '/assets/img/tabNivelBlind.png';
	var report_name = idFabricante == 500 ? "rpt_contrato_audi"
			: "rpt_contrato"; // idFabricante = 500 (AUDI)

	var url = $("#ctx").attr("value") + "/report?RPT_NAME=" + report_name
			+ "&NUM_OS=" + id + '&URL_IMG=' + urlImg + '&URL_IMG_NIVEL_BLIND='
			+ urlImgNivelBlind;
	$('.propostaContrato-form').attr("action", url);
	$('.propostaContrato-form').submit();
	App.unblockUI();
}

function imprimirResumo(numOS){
	App.blockUI({boxed: true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_comissao_detalhado&NUM_OS=" + numOS + "&URL_IMG=" + urlImg;
	$('.propostaContrato-form').attr("action", url);
	$('.propostaContrato-form').submit();
	App.unblockUI();
}
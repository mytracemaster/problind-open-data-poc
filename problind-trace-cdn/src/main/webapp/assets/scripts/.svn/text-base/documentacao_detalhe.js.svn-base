var Documentacao = function() {
	
	$("#nrPlaca").inputmask("aaa-9999");
	$("#nrAnoFabricacao").inputmask("9999");
	$("#nrAnoModelo").inputmask("9999");
	
	if($('#clienteConcept').val()=='Sim'){
		$('#isNotClient').hide();
		$('#isClient').show();
	}else{
		$('#isNotClient').show();
		$('#isClient').hide();
	}

	var handleDocumentacao = function() {
		
		if($('#cdDocumentacao').val() != null && $('#cdDocumentacao').val() > 0 ){
			$('#cliente').attr("disabled", true);
			$('#veiculo').attr("disabled", true);
			$('#clienteConcept').attr("disabled", true);
		}
		
		$('#clienteConcept').change(function(e) {
			App.blockUI({boxed: true});
			
			if(this.value=='Não'){
				$('#isNotClient').show();
				$('#isClient').hide();
			}else{
				$('#isNotClient').hide();
				$('#isClient').show();
			}
			
			App.unblockUI();
		});
		
		$('#cliente').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/documentacao/carregarVeiculoCliente?id=" + $("#cliente").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
								
				$('#veiculo').find('option').remove();
				$('#veiculo').append('<option value="">Selecione</option>');
				
				for (var i = 0; i < data.veiculoList.length; i++) {
					d = data.veiculoList[i];
					$('#veiculo').append('<option value="' + d.cdVeiculo + '">[' + d.nrChassi + '] - ' + d.modeloE.nmModelo + '</option>');
				}
				
				App.unblockUI();
				
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#veiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/documentacao/carregarVeiculo?id=" + $("#veiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
					d = data.veiculoE;
					var placa = d.nrPlaca == undefined || d.nrPlaca == ''? '-' : d.nrPlaca;
					var cor = d.corE.nmCor == undefined || d.corE.nmCor == '' ? '-' : d.corE.nmCor;
					
					$('#numOs').val(d.propostaContratoE.cdPropostaContrato);
					$('#veiculoChassi').html("<b>" + d.nrChassi + "</b>");
					$('#veiculoPlaca').html("<b>" + placa + "</b>");
					$('#veiculoCor').html("<b>" + cor + "</b>");
					$('#veiculoAnoFab').html("<b>" + d.nrAnoFabricacao + "</b>");
					$('#veiculoAnoMod').html("<b>" + d.nrAnoModelo + "</b>");
					
					App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/documentacao/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value="">Selecione</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('.documentacao-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				/*"documentacao.veiculoE.clienteE.cdCliente" : {
					required : true
				},
				"documentacao.veiculoE.cdVeiculo" : {
					required : true
				}*/
			},

			messages : {
				/*"documentacao.veiculoE.clienteE.cdCliente" : {
					required : "Cliente deve ser informado"
				},
				"documentacao.veiculoE.cdVeiculo" : {
					required : "Veiculo deve ser informado"
				}*/
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.documentacao-form')).show();
			},

			highlight : function(element) { // hightlight error inputs
				$(element).closest('.form-group').addClass('has-error'); // set
				// error
				// class
				// to
				// the
				// control
				// group
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement : function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler : function(form) {
				form.submit();
			}
		});
		
		$('#btAssociar').click(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/documentacao/associar?id=" + $("#tipoCusto").attr("value") + "&vrCusto=" + $("#valorCusto").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				var contador = $('#tabCusto tbody tr').length;
				
				var custo = data.docCusto.vrCusto.toFixed(2) < 1000 ? data.docCusto.vrCusto.toFixed(2).toString().replace(".",",") : data.docCusto.vrCusto.toFixed(2).toString().replace(".","").replace(",",".") ;
				
				var newTr = '';
				newTr += '<tr class="odd gradeX" id="tipocusto-' + contador + '">';
				newTr += '<td><input type="hidden" name="custoList[' + contador + ']" value="' + data.docCusto.tipoCustoE.cdTipoCusto + '" \><input type="hidden" name="vrCustoList[' + contador + ']" value="' + formatNumberString(custo) + '" \>' +  data.docCusto.tipoCustoE.dsTipoCusto + '</td>';
				newTr += '<td>R$ ' + formatNumberString(custo) + '</td>';
				newTr += '<td><a href="#portlet-config-tipocusto" onclick="removerColuna(\'tipocusto-' + contador + '\',\'' + data.docCusto.tipoCustoE.cdTipoCusto + '\',\'' + data.docCusto.tipoCustoE.dsTipoCusto + '\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td>';
				newTr += '</tr>';
				
				$('#tabCusto tbody').append(newTr);
				
				$('#s2id_tipoCusto').find('a').find('span').first().html('');
				$('#s2id_tipoCusto').find('a').find('abbr').click();
				$('#s2id_tipoCusto').find('a').find('abbr').remove();
				
				$("#valorCusto").val('');
				calcTotalGeral();
				
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".documentacao-form").validate().cancelSubmit = true;
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/novo");
					$('.documentacao-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.documentacao-form').validate().form()) {
						App.blockUI({boxed: true});
						$('#cliente').removeAttr("disabled");
						$('#veiculo').removeAttr("disabled");
						$('#vrTotal').removeAttr("disabled");
						$('#clienteConcept').removeAttr("disabled");
						$('.documentacao-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/documentacao/salvar");
						$('.documentacao-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".documentacao-form").validate().cancelSubmit = true;
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/excluir");
					$('.documentacao-form').submit();
					return false;
				});
		
		$('#btExcluirTipoCusto').click(
				function(e) {					
					App.blockUI({boxed: true});
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModal').click();
					calcTotalGeral();
					App.unblockUI();
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".documentacao-form").validate().cancelSubmit = true;
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/voltar");
					$('.documentacao-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/consulta");
					$('.documentacao-form').submit();
					return false;
					displayObject('tbDocumentacao', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleDocumentacao();
		}
	};

}();

function removerCusto(numeroLinha){	
	$("#tabCusto tbody tr:eq(" + numeroLinha + ")").remove();
};

function calcTotalGeral()
{
	var total = 0.0;
	$('#tabCusto tbody tr td:nth-child(2)').each(
		 function () {
			var valor = $(this).html().replace('R$ ','').replace(".", "").replace(",", ".");
		 	total += parseFloat(valor);
	});
	var	vrTot = ($('#vrTotal').val() != null && $('#vrTotal').val() != '') ? $('#vrTotal').val().replace("R$ ", "").replace(".", "").replace(",", ".") : 0;
	
	//alert('total: ' + total);
	//alert('vrTotal: ' + vrTot);
	
	var totCusto = parseFloat(vrTot) - parseFloat(total);
	
	//alert('total custo: ' + totCusto);
	
	$('#vrTotalCusto').val(formatNumberString(totCusto.toFixed(2).toString()));
	
	$('.valorTotal').html('R$ ' +  formatNumberString(total.toFixed(2).toString()));
	
};

function calcTotal(){  
	
	var	vrExercito = ($('#vrExercito').val() != null && $('#vrExercito').val() != '') ? $('#vrExercito').val().replace("R$ ", "").replace(".", "").replace(",", ".") : 0;
	var	vrDetran = ($('#vrDetran').val() != null && $('#vrDetran').val() != '') ? $('#vrDetran').val().replace("R$ ", "").replace(".", "").replace(",", ".") : 0;
	var	vrPoliciaCivil = ($('#vrPoliciaCivil').val() != null && $('#vrPoliciaCivil').val() != '') ? $('#vrPoliciaCivil').val().replace("R$ ", "").replace(".", "").replace(",", ".") : 0;
	var	vrTotal = $('#vrTotal');
	
	var total = parseFloat(vrExercito) + parseFloat(vrDetran) + parseFloat(vrPoliciaCivil);

	vrTotal.val(parseFloat(total).toFixed(2));
	
	formatNumber($('#vrTotal'));
	
	calcTotalGeral();
}

function formatNumber(z){  
	v = z.val();
	v = v.replace(/\D/g,"");  //permite digitar apenas numeros
	v = v.replace(/[0-9]{12}/,"invalido");   //limita pra maximo 999.999.999,99
	v = v.replace(/(\d{1})(\d{8})$/,"$1.$2");  //coloca ponto antes dos ultimos 8 digitos
	v = v.replace(/(\d{1})(\d{5})$/,"$1.$2");  //coloca ponto antes dos ultimos 5 digitos
	v = v.replace(/(\d{1})(\d{1,2})$/,"$1,$2");        //coloca virgula antes dos ultimos 2 digitos
	z.val(v);
}

function formatNumberString(z){  
	v = z;
	v = v.replace(/\D/g,"");  //permite digitar apenas numeros
	v = v.replace(/[0-9]{12}/,"invalido");   //limita pra maximo 999.999.999,99
	v = v.replace(/(\d{1})(\d{8})$/,"$1.$2");  //coloca ponto antes dos ultimos 8 digitos
	v = v.replace(/(\d{1})(\d{5})$/,"$1.$2");  //coloca ponto antes dos ultimos 5 digitos
	v = v.replace(/(\d{1})(\d{1,2})$/,"$1,$2");        //coloca virgula antes dos ultimos 2 digitos
	return v;
}
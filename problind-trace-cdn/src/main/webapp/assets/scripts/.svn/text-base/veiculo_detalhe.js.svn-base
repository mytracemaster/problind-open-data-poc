var Veiculo = function() {

	var handleVeiculo = function() {
				
		$('.veiculo-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"veiculo.clienteE.cdCliente" : {
					required : true
				},
				"veiculo.modeloE.fabricanteE.cdFabricante" : {
					required : true
				},
				"veiculo.modeloE.cdModelo" : {
					required : true
				},
				"veiculo.nrChassi" : {
					required : true
				},
				"veiculo.corE.cdCor" : {
					required : true
				},
				"veiculo.nrAnoFabricacao" : {
					required : true
				},
				"veiculo.nrAnoModelo" :{
					required : true
				}
			},

			messages : {
				"veiculo.clienteE.cdCliente" : {
					required : "Cliente deve ser selecionado"
				},
				"veiculo.modeloE.fabricanteE.cdFabricante" : {
					required : "Fabricante deve ser selecionado"
				},
				"veiculo.modeloE.cdModelo" : {
					required : "Modelo deve ser selecionado"
				},
				"veiculo.nrChassi" : {
					required : "Chassi deve ser informado"
				},
				"veiculo.corE.cdCor" : {
					required : "Cor deve ser selecionada"
				},
				"veiculo.nrAnoFabricacao" : {
					required : "Ano de fabricação deve ser informado"
				},
				"veiculo.nrAnoModelo" :{
					required : "Ano do modelo deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.veiculo-form')).show();
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
		
		$('#btSalvar').click(
				function(e) {
					if ($('.veiculo-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.veiculo-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/veiculo/salvar");
						
						$('#clienteVeiculo').attr("disabled", false);
						$('#dataSaida').attr("disabled", false);
						
						$('.veiculo-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".veiculo-form").validate().cancelSubmit = true;
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/excluir");
					$('.veiculo-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".veiculo-form").validate().cancelSubmit = true;
					$('.veiculo-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/voltar");
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
					displayObject('tbAtend', 'false');
				});
		
		$('#btImprimir').click(
				function(e) {
					App.blockUI({boxed: true});
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_identificacao_veiculo&CD_VEICULO=" + $("#cdVeiculo").attr("value") + "&URL_IMG=" + urlImg;
					$('.veiculo-form').attr("action", url);
					$('.veiculo-form').submit();
					App.unblockUI();
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleVeiculo();
		}
	};

}();
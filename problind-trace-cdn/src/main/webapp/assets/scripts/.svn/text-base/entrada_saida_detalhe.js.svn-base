var EntradaSaida = function() {

	$("#cep").inputmask("99999-999");
	
	if($("#cdEntradaSaida").val()!=null && $("#cdEntradaSaida").val()>0){
		$("#cliente").attr("disabled", true);
		$("#veiculo").attr("disabled", true);
	}
	
	var handleEntradaSaida = function() {
		
		$('#cliente').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/entradaSaida/carregarVeiculoCliente?id=" + $("#cliente").attr("value");
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
				//alert("falha");
			}); 
		});
		
		$('#veiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/entradaSaida/carregarVeiculo?id=" + $("#veiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
					
					d = data.veiculoE;
					var placa = d.nrPlaca == undefined || d.nrPlaca == ''? '-' : d.nrPlaca;
					var cor = d.corE.nmCor == undefined || d.corE.nmCor == '' ? '-' : d.corE.nmCor;
					var renavan = d.nrRenavan == undefined || d.nrRenavan == '' ? '-' : d.nrRenavan;
					
					$('#numOs').val(d.propostaContratoE.cdPropostaContrato);
					$('#veiculoRenavan').html("<b>" + renavan + "</b>");
					$('#veiculoChassi').html("<b>" + d.nrChassi + "</b>");
					$('#veiculoPlaca').html("<b>" + placa + "</b>");
					$('#veiculoCor').html("<b>" + cor + "</b>");
					$('#veiculoAnoFab').html("<b>" + d.nrAnoFabricacao + "</b>");
					$('#veiculoAnoMod').html("<b>" + d.nrAnoModelo + "</b>");
					
					App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('.entradaSaida-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"entradaSaida.veiculoE.clienteE.cdCliente" : {
					required : true
				},
				"entradaSaida.veiculoE.cdVeiculo" : {
					required : true
				},
				"entradaSaida.stAcao" : {
					required : true
				},
				"entradaSaida.loginE.cdLogin" : {
					required : true
				},
				"entradaSaida.nrCep" : {
					required : true
				},
				"entradaSaida.dsEndereco" : {
					required : true
				},
				"entradaSaida.nrEndereco" : {
					required : true
				},
				"entradaSaida.dsBairro" : {
					required : true
				}
			},

			messages : {
				"entradaSaida.veiculoE.clienteE.cdCliente" : {
					required : "Cliente deve ser informado"
				},
				"entradaSaida.veiculoE.cdVeiculo" : {
					required : "Veículo deve ser informado"
				},
				"entradaSaida.stAcao" : {
					required : "Ação deve ser informada"
				},
				"entradaSaida.loginE.cdLogin" : {
					required : "Motorista deve ser informado"
				},
				"entradaSaida.nrCep" : {
					required : "CEP deve ser informado"
				},
				"entradaSaida.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"entradaSaida.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"entradaSaida.dsBairro" : {
					required : "Bairro deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.entradaSaida-form')).show();
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

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".entradaSaida-form").validate().cancelSubmit = true;
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/novo");
					$('.entradaSaida-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.entradaSaida-form').validate().form()) {
						App.blockUI({boxed: true});
						$("#cliente").attr("disabled", false);
						$("#veiculo").attr("disabled", false);
						$("#dataAtendimento").attr("readonly", false);
						$('.entradaSaida-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/entradaSaida/salvar");
						$('.entradaSaida-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".entradaSaida-form").validate().cancelSubmit = true;
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/excluir");
					$('.entradaSaida-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".entradaSaida-form").validate().cancelSubmit = true;
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/voltar");
					$('.entradaSaida-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.entradaSaida-form').attr("action",
							$("#ctx").attr("value") + "/entradaSaida/consulta");
					$('.entradaSaida-form').submit();
					return false;
					displayObject('tbAgreg', 'false');
				});
		
		new dgCidadesEstados({
			  cidade: document.getElementById('cidade'),
			  estado: document.getElementById('estado'),
			  change: true
			});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleEntradaSaida();
		}
	};

}();
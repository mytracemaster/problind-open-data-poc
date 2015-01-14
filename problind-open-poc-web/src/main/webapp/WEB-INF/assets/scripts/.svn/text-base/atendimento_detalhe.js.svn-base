var Atendimento = function() {
	
	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");

	var handleAtendimento = function() {
		
		$('.atendimento-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"atendimento.nmCliente" : {
					required : true
				},
				"atendimento.dsEmail" : {
					required : true
				},
				"atendimento.nrTelCelular" : {
					required : true
				},
				"atendimento.dsComoChegouBlind" : {
					required : true
				},
				"atendimento.dsVeiculoModelo" : {
					required : true
				},
				"atendimento.dsProdutoServico" : {
					required : true
				},
				"atendimento.membroE.cdMembro" : {
					required : true
				}

			},

			messages : {
				"atendimento.nmCliente" : {
					required : "Nome deve ser informado"
				},
				"atendimento.dsEmail" : {
					required : "Email deve ser informado"
				},
				"atendimento.nrTelCelular" : {
					required : "Telefone celular deve ser informado"
				},
				"atendimento.dsComoChegouBlind" : {
					required : "Como chegou at\u00e9 blindadora deve ser informado"
				},
				"atendimento.dsVeiculoModelo" : {
					required : "Veiculo/Modelo deve ser informado"
				},
				"atendimento.dsProdutoServico" : {
					required : "Produto/Servi\u00e7o deve ser informado"
				},
				"atendimento.membroE.cdMembro" : {
					required : "Vendedor deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.atendimento-form')).show();
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
					$(".atendimento-form").validate().cancelSubmit = true;
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/novo");
					$('.atendimento-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.atendimento-form').validate().form()) {
						App.blockUI({boxed: true});
						$('#vendedor').attr("disabled", false);
						$('.atendimento-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/atendimento/salvar");
						$('.atendimento-form').submit();
					}
					return false;
				});
		
		$('#btFinalizar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".atendimento-form").validate().cancelSubmit = true;
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/finalizar");
					$('.atendimento-form').submit();
					
					$("#portlet-config-finalizar").modal("hide");
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".atendimento-form").validate().cancelSubmit = true;
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/excluir");
					$('.atendimento-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".atendimento-form").validate().cancelSubmit = true;
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/voltar");
					$('.atendimento-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.atendimento-form').attr("action",
							$("#ctx").attr("value") + "/atendimento/consulta");
					$('.atendimento-form').submit();
					return false;
					displayObject('tbAtend', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleAtendimento();
		}
	};

}();
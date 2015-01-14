var Membro = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cep").inputmask("99999-999");
	
	var handleMembro = function() {
		
		$('.membro-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"membro.loginE.nmLogin" : {
					required : true
				},
				"membro.loginE.dsApelido" : {
					required : true
				},
				"membro.loginE.dsEmail" : {
					required : true
				},
				"membro.nrCep" : {
					required : true
				},
				"membro.dsEndereco" : {
					required : true
				},
				"membro.nrEndereco" : {
					required : true
				},
				"membro.dsBairro" : {
					required : true
				}
					
			},

			messages : {
				"membro.loginE.nmLogin" : {
					required : "Nome deve ser informado"
				},
				"membro.loginE.dsApelido" : {
					required : "Apelido deve ser informado"
				},
				"membro.loginE.dsEmail" : {
					required : "Email deve ser informado"
				},
				"membro.nrCep" : {
					required : "CEP deve ser informado"
				},
				"membro.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"membro.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"membro.dsBairro" : {
					required : "Bairro deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.membro-form')).show();
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
					$(".membro-form").validate().cancelSubmit = true;
					$('.membro-form').attr("action",
							$("#ctx").attr("value") + "/membro/novo");
					$('.membro-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.membro-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.membro-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/membro/salvar");
						$('.membro-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".membro-form").validate().cancelSubmit = true;
					$('.membro-form').attr("action",
							$("#ctx").attr("value") + "/membro/excluir");
					$('.membro-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".membro-form").validate().cancelSubmit = true;
					$('.membro-form').attr("action",
							$("#ctx").attr("value") + "/membro/voltar");
					$('.membro-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.membro-form').attr("action",
							$("#ctx").attr("value") + "/membro/consulta");
					$('.membro-form').submit();
					return false;
					displayObject('tbFornec', 'false');
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
			handleMembro();
		}
	};

}();
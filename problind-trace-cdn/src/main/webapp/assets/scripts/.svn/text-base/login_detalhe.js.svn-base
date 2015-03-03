var Login = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	
	var handleLogin = function() {
		
		$('.login-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"login.perfilE.cdPerfil" : {
					required : true
				},
				"login.nmUser" : {
					required : true
				},
				"login.nmLogin" : {
					required : true
				},
				"login.dsApelido" : {
					required : true
				},
				"login.dsEmail" : {
					required : true
				},
				"login.nrTelComercial" : {
					required : true
				}
			},

			messages : {
				"login.perfilE.cdPerfil" : {
					required : "Perfil deve ser informado"
				},
				"login.nmUser" : {
					required : "Login deve ser informado"
				},
				"login.nmLogin" : {
					required : "Nome deve ser informado"
				},
				"login.dsApelido" : {
					required : "Apelido deve ser informado"
				},
				"login.dsEmail" : {
					required : "E-mail deve ser informado"
				},
				"login.nrTelComercial" : {
					required : "Telefone comercial deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.login-form')).show();
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
					$(".login-form").validate().cancelSubmit = true;
					$('.login-form').attr("action",
							$("#ctx").attr("value") + "/login/novo");
					$('.login-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.login-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.login-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/login/salvar");
						$('.login-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".login-form").validate().cancelSubmit = true;
					$('.login-form').attr("action",
							$("#ctx").attr("value") + "/login/excluir");
					$('.login-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".login-form").validate().cancelSubmit = true;
					$('.login-form').attr("action",
							$("#ctx").attr("value") + "/login/voltar");
					$('.login-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.login-form').attr("action",
							$("#ctx").attr("value") + "/login/consulta");
					$('.login-form').submit();
					return false;
					displayObject('tbAgreg', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleLogin();
		}
	};

}();
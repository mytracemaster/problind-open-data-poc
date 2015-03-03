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
				"login.dsEmail" : {
					required : true
				},
				"login.nrTelComercial" : {
					required : true
				}
			},

			messages : {
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

		$('#btSalvar').click(
				function(e) {
					if ($('.login-form').validate().form()) {
						App.blockUI({boxed: true});
						$('#perfilLogin').attr('disabled',false);
						$('.login-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/login/salvarMeusDados");
						$('.login-form').submit();
					}
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".login-form").validate().cancelSubmit = true;
					var url = "http://" + $("#server").val() + ":80/" + $("#ctx").val();
					$('.login-form').attr("action", url);
					$('.login-form').submit();
					return false;
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleLogin();
		}
	};

}();
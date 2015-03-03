var Perfil = function() {

	var handlePerfil = function() {
		
		$('.perfil-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"perfil.dsPerfil" : {
					required : true
				},
				"perfil.stPerfil" : {
					required : true
				}
			},

			messages : {
				"perfil.dsPerfil" : {
					required : "Nome deve ser informado"
				},
				"perfil.stPerfil" : {
					required : "Status deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.perfil-form')).show();
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
					$(".perfil-form").validate().cancelSubmit = true;
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/novo");
					$('.perfil-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.perfil-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.perfil-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/perfil/salvar");
						$('.perfil-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".perfil-form").validate().cancelSubmit = true;
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/excluir");
					$('.perfil-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".perfil-form").validate().cancelSubmit = true;
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/voltar");
					$('.perfil-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/consulta");
					$('.perfil-form').submit();
					return false;
					displayObject('tbPerfil', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handlePerfil();
		}
	};

}();
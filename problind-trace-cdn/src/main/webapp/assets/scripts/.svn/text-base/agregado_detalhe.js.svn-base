var Agregado = function() {

	var handleAgregado = function() {
		
		$('.agregado-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"agregado.nmAgregado" : {
					required : true
				},
				"valorAgregado" : {
					required : true
				},
				"agregado.stAgregado" : {
					required : true
				}
			},

			messages : {
				"agregado.nmAgregado" : {
					required : "Nome deve ser informado"
				},
				"valorAgregado" : {
					required : "Preço deve ser informado"
				},
				"agregado.stAgregado" : {
					required : "Status deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.agregado-form')).show();
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
					$(".agregado-form").validate().cancelSubmit = true;
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/novo");
					$('.agregado-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.agregado-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.agregado-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/agregado/salvar");
						$('.agregado-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".agregado-form").validate().cancelSubmit = true;
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/excluir");
					$('.agregado-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".agregado-form").validate().cancelSubmit = true;
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/voltar");
					$('.agregado-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.agregado-form').attr("action",
							$("#ctx").attr("value") + "/agregado/consulta");
					$('.agregado-form').submit();
					return false;
					displayObject('tbAgreg', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleAgregado();
		}
	};

}();
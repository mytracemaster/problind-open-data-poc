var Produto = function() {
	
	
	$("#inputTelCom").inputmask("(99)99999999");
	$("#inputTelCel").inputmask("(99)999999999");

	var handleProduto = function() {
		
		$('.produto-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"produto.vrProduto" :{
					required : true
				}
			},

			messages : {
				"produto.vrProduto" :{
					required : "Preço deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.produto-form')).show();
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
					if ($('.produto-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.produto-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/produto/salvarProduto");
						$('.produto-form').submit();
					}
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".produto-form").validate().cancelSubmit = true;
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/carregardados?id=" + $('#idLogin').val());
					$('.produto-form').submit();
					return false;
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleProduto();
		}
	};

}();
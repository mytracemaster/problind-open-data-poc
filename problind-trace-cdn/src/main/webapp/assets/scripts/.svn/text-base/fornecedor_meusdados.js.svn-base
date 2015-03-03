var Fornecedor = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cnpjFornecedor").inputmask("99.999.999/9999-99");
	$("#cep").inputmask("99999-999");
	
	var handleFornecedor = function() {
		
		$('.fornecedor-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"fornecedor.dsEmail" : {
					required : true
				}
					
			},

			messages : {
				"fornecedor.dsEmail" : {
					required : "Email deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.fornecedor-form')).show();
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
					if ($('.fornecedor-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.fornecedor-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/fornecedor/salvarDadosFornecedor");
						$('.fornecedor-form').submit();
					}
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".fornecedor-form").validate().cancelSubmit = true;
					var url = "http://" + $("#server").val() + ":80/" + $("#ctx").val();
					$('.fornecedor-form').attr("action", url);
					$('.fornecedor-form').submit();
					return false;
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
			handleFornecedor();
		}
	};

}();
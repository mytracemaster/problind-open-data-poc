var Cliente = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cep").inputmask("99999-999");
	
	var handleCliente = function() {
		
		$('.cliente-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"cliente.loginE.dsApelido" : {
					required : true
				},
				"cliente.dsEmail" : {
					required : true
				}
			},

			messages : {
				"cliente.loginE.dsApelido" : {
					required : "Apelido deve ser informado"
				},
				"cliente.dsEmail" : {
					required : "Email deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.cliente-form')).show();
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
					if($('#clientePessoaFisica').is(":checked")){
						$('#clienteCpfCnpj').attr('name', 'cliente.nrCpf');
					}else if($('#clientePessoaJuridica').is(":checked")){
						$('#clienteCpfCnpj').attr('name', 'cliente.nrCnpj');
					}
					
					if ($('.cliente-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.cliente-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/cliente/salvarDadosCliente");
						$('.cliente-form').submit();
					}
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".cliente-form").validate().cancelSubmit = true;
					var url = "http://" + $("#server").val() + ":80/" + $("#ctx").val();
					$('.cliente-form').attr("action", url);
					$('.cliente-form').submit();
					return false;
				});

		if($('#clientePessoaFisica').is(":checked")){
			$("#clienteCpfCnpj").inputmask("999.999.999-99");
		}else if($('#clientePessoaFisica').is(":checked")){
			$("#clienteCpfCnpj").inputmask("999.999.999-99");
		}

		new dgCidadesEstados({
			  cidade: document.getElementById('cidade'),
			  estado: document.getElementById('estado'),
			  change: true
			});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleCliente();
		}
	};

}();
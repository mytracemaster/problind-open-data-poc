var Cliente = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cep").inputmask("99999-999");
	
	jQuery.validator.addMethod("cnpj", function(cnpj, element) {
		   cnpj = jQuery.trim(cnpj);// retira espacos em branco
		   // DEIXA APENAS OS NÚMEROS
		   cnpj = cnpj.replace('/','');
		   cnpj = cnpj.replace('.','');
		   cnpj = cnpj.replace('.','');
		   cnpj = cnpj.replace('-','');
		 
		   var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
		   digitos_iguais = 1;
		 
		   if (cnpj.length < 14 && cnpj.length < 15){
		      return false;
		   }
		   for (i = 0; i < cnpj.length - 1; i++){
		      if (cnpj.charAt(i) != cnpj.charAt(i + 1)){
		         digitos_iguais = 0;
		         break;
		      }
		   }
		 
		   if (!digitos_iguais){
		      tamanho = cnpj.length - 2
		      numeros = cnpj.substring(0,tamanho);
		      digitos = cnpj.substring(tamanho);
		      soma = 0;
		      pos = tamanho - 7;
		 
		      for (i = tamanho; i >= 1; i--){
		         soma += numeros.charAt(tamanho - i) * pos--;
		         if (pos < 2){
		            pos = 9;
		         }
		      }
		      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		      if (resultado != digitos.charAt(0)){
		         return false;
		      }
		      tamanho = tamanho + 1;
		      numeros = cnpj.substring(0,tamanho);
		      soma = 0;
		      pos = tamanho - 7;
		      for (i = tamanho; i >= 1; i--){
		         soma += numeros.charAt(tamanho - i) * pos--;
		         if (pos < 2){
		            pos = 9;
		         }
		      }
		      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		      if (resultado != digitos.charAt(1)){
		         return false;
		      }
		      return true;
		   }else{
		      return false;
		   }
		}, "Informe um CNPJ válido."); // Mensagem padrao 
	
	var handleCliente = function() {
		
		$('.cliente-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"cliente.nmcliente" : {
					required : true
				},
				"cliente.nmFantasia" : {
					required : true
				},
				"cliente.nrCnpj" : {
					required : true,
					cnpj: true
				},
				"cliente.nmContato" : {
					required : true
				},
				"cliente.dsEmail" : {
					required : true
				},
				"cliente.nrCep" : {
					required : true
				},
				"cliente.dsEndereco" : {
					required : true
				},
				"cliente.nrEndereco" : {
					required : true
				},
				"cliente.dsBairro" : {
					required : true
				},
				"cliente.sgUf" : {
					required : true
				},
				"cliente.nmCidade" : {
					required : true
				}
					
			},

			messages : {
				"cliente.nmcliente" : {
					required : "Nome deve ser informado"
				},
				"cliente.nmFantasia" : {
					required : "Nome Fantasia deve ser informado"
				},
				"cliente.nrCnpj" : {
					required : "CNPJ deve ser informado",
					cnpj: "Favor informar um CNPJ válido"
				},
				"cliente.nmContato" : {
					required : "Contato deve ser informado"
				},
				"cliente.dsEmail" : {
					required : "Email deve ser informado"
				},
				"cliente.nrCep" : {
					required : "CEP deve ser informado"
				},
				"cliente.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"cliente.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"cliente.dsBairro" : {
					required : "Bairro deve ser informado"
				},
				"cliente.sgUf" : {
					required : "Estado deve ser informado"
				},
				"cliente.nmCidade" : {
					required : "Cidade deve ser informada"
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
												+ "/cliente/salvar");
						$('.cliente-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".cliente-form").validate().cancelSubmit = true;
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/excluir");
					$('.cliente-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".cliente-form").validate().cancelSubmit = true;
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/voltar");
					$('.cliente-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.cliente-form').attr("action",
							$("#ctx").attr("value") + "/cliente/consulta");
					$('.cliente-form').submit();
					return false;
					displayObject('tbFornec', 'false');
				});
		
		$('#clientePessoaFisica').change(function(e) {
			if($('#clientePessoaFisica').is(":checked")){
				$("#clienteCpfCnpj").attr("value", "");
				$("#clienteCpfCnpj").inputmask("999.999.999-99");
			}
		});
		
		$('#clientePessoaJuridica').change(function(e) {
			if($('#clientePessoaJuridica').is(":checked")){
				$("#clienteCpfCnpj").attr("value", "");
				$("#clienteCpfCnpj").inputmask("99.999.999/9999-99");
			}
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
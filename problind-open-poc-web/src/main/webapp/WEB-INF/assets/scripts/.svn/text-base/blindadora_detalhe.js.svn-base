var Blindadora = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cnpjblindadora").inputmask("99.999.999/9999-99");
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
	
	var handleBlindadora = function() {
		
		$('.blindadora-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"blindadora.nmBlindadora" : {
					required : true
				},
				"blindadora.nmFantasia" : {
					required : true
				},
				"blindadora.nrCnpj" : {
					required : true,
					cnpj: true
				},
				"blindadora.nmContato" : {
					required : true
				},
				"blindadora.dsEmail" : {
					required : true
				},
				"blindadora.nrCep" : {
					required : true
				},
				"blindadora.dsEndereco" : {
					required : true
				},
				"blindadora.nrEndereco" : {
					required : true
				},
				"blindadora.dsBairro" : {
					required : true
				}
					
			},

			messages : {
				"blindadora.nmBlindadora" : {
					required : "Nome deve ser informado"
				},
				"blindadora.nmFantasia" : {
					required : "Nome Fantasia deve ser informado"
				},
				"blindadora.nrCnpj" : {
					required : "CNPJ deve ser informado",
					cnpj: "Favor informar um CNPJ válido"
				},
				"blindadora.nmContato" : {
					required : "Contato deve ser informado"
				},
				"blindadora.dsEmail" : {
					required : "Email deve ser informado"
				},
				"blindadora.nrCep" : {
					required : "CEP deve ser informado"
				},
				"blindadora.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"blindadora.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"blindadora.dsBairro" : {
					required : "Bairro deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.blindadora-form')).show();
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
					if ($('.blindadora-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.blindadora-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/blindadora/salvar");
						$('.blindadora-form').submit();
					}
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindadora-form').attr("action", $("#url").val());
					$('.blindadora-form').submit();
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
			handleBlindadora();
		}
	};

}();
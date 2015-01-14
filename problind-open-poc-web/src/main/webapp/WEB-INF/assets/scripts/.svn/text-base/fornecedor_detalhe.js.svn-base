var Fornecedor = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cnpjFornecedor").inputmask("99.999.999/9999-99");
	$("#cep").inputmask("99999-999");
	
	jQuery.validator.addMethod("cnpj", function(cnpj, element) {
		   cnpj = jQuery.trim(cnpj);// retira espa�os em branco
		   // DEIXA APENAS OS N�MEROS
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
	
	var handleFornecedor = function() {
		
		$('.fornecedor-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"fornecedor.nmFornecedor" : {
					required : true
				},
				"fornecedor.nmFantasia" : {
					required : true
				},
				"fornecedor.nrCnpj" : {
					required : true,
					cnpj: true
				},
				"fornecedor.nmContato" : {
					required : true
				},
				"fornecedor.dsEmail" : {
					required : true
				},
				"fornecedor.nrCep" : {
					required : true
				},
				"fornecedor.dsEndereco" : {
					required : true
				},
				"fornecedor.nrEndereco" : {
					required : true
				},
				"fornecedor.dsBairro" : {
					required : true
				}
					
			},

			messages : {
				"fornecedor.nmFornecedor" : {
					required : "Nome deve ser informado"
				},
				"fornecedor.nmFantasia" : {
					required : "Nome Fantasia deve ser informado"
				},
				"fornecedor.nrCnpj" : {
					required : "CNPJ deve ser informado",
					cnpj: "Favor informar um CNPJ valido"
				},
				"fornecedor.nmContato" : {
					required : "Contato deve ser informado"
				},
				"fornecedor.dsEmail" : {
					required : "Email deve ser informado"
				},
				"fornecedor.nrCep" : {
					required : "CEP deve ser informado"
				},
				"fornecedor.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"fornecedor.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"fornecedor.dsBairro" : {
					required : "Bairro deve ser informado"
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

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".fornecedor-form").validate().cancelSubmit = true;
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/novo");
					$('.fornecedor-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.fornecedor-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.fornecedor-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/fornecedor/salvar");
						$('.fornecedor-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".fornecedor-form").validate().cancelSubmit = true;
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/excluir");
					$('.fornecedor-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".fornecedor-form").validate().cancelSubmit = true;
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/voltar");
					$('.fornecedor-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/consulta");
					$('.fornecedor-form').submit();
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
			handleFornecedor();
		}
	};

}();
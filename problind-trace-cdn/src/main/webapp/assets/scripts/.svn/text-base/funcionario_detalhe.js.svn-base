var Funcionario = function() {

	$("#numCpf").inputmask("999.999.999-99");
	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cep").inputmask("99999-999");
	
	var handleFuncionario = function() {
		
		$('.funcionario-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"funcionario.dtAdmissao" : {
					required : true
				},
				"funcionario.nrCpf" : {
					required : true
				},
				"funcionario.nmFuncionario" : {
					required : true
				},
				"funcionario.dsApelido" : {
					required : true
				},
				"funcionario.dsEmail" : {
					required : true
				},
				"funcionario.nrTelPessoal" : {
					required : true
				},
				"funcionario.nrCep" : {
					required : true
				},
				"funcionario.dsEndereco" : {
					required : true
				},
				"funcionario.nrEndereco" : {
					required : true
				},
				"funcionario.dsBairro" : {
					required : true
				},
				"funcionario.sgUf" : {
					required : true
				},
				"funcionario.nmCidade" : {
					required : true
				}
					
			},

			messages : {
				"funcionario.dtAdmissao" : {
					required : "Data Admissão deve ser informada"
				},
				"funcionario.nrCpf" : {
					required : "CPF deve ser informado"
				},
				"funcionario.nmFuncionario" : {
					required : "Nome deve ser informado"
				},
				"funcionario.dsApelido" : {
					required : "Apelido deve ser informado"
				},
				"funcionario.dsEmail" : {
					required : "Email deve ser informado"
				},
				"funcionario.nrTelPessoal" : {
					required : "Telefone celular deve ser informado"
				},
				"funcionario.nrCep" : {
					required : "CEP deve ser informado"
				},
				"funcionario.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"funcionario.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"funcionario.dsBairro" : {
					required : "Bairro deve ser informado"
				},
				"funcionario.sgUf" : {
					required : "Estado deve ser informado"
				},
				"funcionario.nmCidade" : {
					required : "Cidade deve ser informada"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.funcionario-form')).show();
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
					$(".funcionario-form").validate().cancelSubmit = true;
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/novo");
					$('.funcionario-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.funcionario-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.funcionario-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/funcionario/salvar");
						
						var str = '';
						
						$('.checkboxes').each(function(){
							str += $(this).attr('value') + ',';
						});
						str = str.substring(0, str.length -1);
						
						$('#fgAplicaArray').val(str);
						
						$('.funcionario-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".funcionario-form").validate().cancelSubmit = true;
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/excluir");
					$('.funcionario-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".funcionario-form").validate().cancelSubmit = true;
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/voltar");
					$('.funcionario-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/consulta");
					$('.funcionario-form').submit();
					return false;
					displayObject('tbFornec', 'false');
				});
		
		$('.checkboxes').click(
				function(e){
					if($(this).attr('checked')){
						$(this).attr('value', 1);
					}else{
						$(this).attr('value', 0);
					}
				}
		);
		
		jQuery('#tbFuncProc .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).attr('value', 1);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).attr('value', 0);
                    $(this).parents('tr').removeClass("active");
                }                    
            });
            jQuery.uniform.update(set);
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
			handleFuncionario();
		}
	};

}();
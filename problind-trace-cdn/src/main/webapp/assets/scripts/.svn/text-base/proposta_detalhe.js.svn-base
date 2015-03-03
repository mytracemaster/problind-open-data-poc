var Proposta = function() {
	
	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");

	var handleProposta = function() {
		
		$('.proposta-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"proposta.atendimentoE.cdAtendimento" : {
					required : true
				},
				"proposta.nmCliente" : {
					required : true
				},
				"proposta.dsEmail" : {
					required : true
				},
				"proposta.nrTelCelular" : {
					required : true
				},
				"proposta.nivelBlindagemE.cdNivelBlindagem" : {
					required : true
				},
				"proposta.modeloE.fabricanteE.cdFabricante" : {
					required : true
				},
				"proposta.modeloE.cdModelo" : {
					required : true
				},
				"vrBlindagem" : {
					required : true
				},
				"proposta.nrDiaParaEntrega" :{
					required : true
				},
				"proposta.membroE.cdMembro" : {
					required : true
				}

			},

			messages : {
				"proposta.atendimentoE.cdAtendimento" : {
					required : "N\u00fam. atendimento deve ser informado"
				},
				"proposta.nmCliente" : {
					required : "Nome deve ser informado"
				},
				"proposta.dsEmail" : {
					required : "Email deve ser informado"
				},
				"proposta.nrTelCelular" : {
					required : "Telefone celular deve ser informado"
				},
				"proposta.nivelBlindagemE.cdNivelBlindagem" : {
					required : "N\u00edvel da Blindagem deve ser informado"
				},
				"proposta.modeloE.fabricanteE.cdFabricante" : {
					required : "Fabricante deve ser informado"
				},
				"proposta.modeloE.cdModelo" : {
					required : "Modelo deve ser informado"
				},
				"vrBlindagem" : {
					required : "Pre\u00e7o da blindagem deve ser informado"
				},
				"proposta.nrDiaParaEntrega" :{
					required : "Prazo deve ser informado"
				},
				"proposta.membroE.cdMembro" : {
					required : "Vendedor deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.proposta-form')).show();
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
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/proposta/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value=""></option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".proposta-form").validate().cancelSubmit = true;
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/novo");
					$('.proposta-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.proposta-form').validate().form()) {
						$('#s2id_vendedor').attr("class", "select2-container select2-allowclear select2-container form-control select2me");
						App.blockUI({boxed: true});
						$('.proposta-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/proposta/salvar");
						$('.proposta-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".proposta-form").validate().cancelSubmit = true;
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/excluir");
					$('.proposta-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".proposta-form").validate().cancelSubmit = true;
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/voltar");
					$('.proposta-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.proposta-form').attr("action",
							$("#ctx").attr("value") + "/proposta/consulta");
					$('.proposta-form').submit();
					return false;
					displayObject('tbAtend', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleProposta();
		}
	};

}();
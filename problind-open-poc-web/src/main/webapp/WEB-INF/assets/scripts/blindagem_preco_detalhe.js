var BlindagemPreco = function() {

	var handleBlindagemPreco = function() {
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagemPreco/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('.blindagemPreco-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"blindagemPreco.modeloE.fabricanteE.cdFabricante" : {
					required : true
				},
				"blindagemPreco.modeloE.cdModelo" : {
					required : true
				},
				"valorBlindagem" : {
					required : true
				},
				"valorVidro" : {
					required : true
				}
			},

			messages : {
				"blindagemPreco.modeloE.fabricanteE.cdFabricante" : {
					required : "Fabricante deve ser informado"
				},
				"blindagemPreco.modeloE.cdModelo" : {
					required : "Modelo deve ser informado"
				},
				"valorBlindagem" : {
					required : "Preço blindagem deve ser informado"
				},
				"valorVidro" : {
					required : "Preço vidro deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.blindagemPreco-form')).show();
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
					$(".blindagemPreco-form").validate().cancelSubmit = true;
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/novo");
					$('.blindagemPreco-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.blindagemPreco-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.blindagemPreco-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/blindagemPreco/salvar");
						$('.blindagemPreco-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".blindagemPreco-form").validate().cancelSubmit = true;
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/excluir");
					$('.blindagemPreco-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".blindagemPreco-form").validate().cancelSubmit = true;
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/voltar");
					$('.blindagemPreco-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.blindagemPreco-form').attr("action",
							$("#ctx").attr("value") + "/blindagemPreco/consulta");
					$('.blindagemPreco-form').submit();
					return false;
					displayObject('tbAgreg', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleBlindagemPreco();
		}
	};

}();
var Produto = function() {
	
	
	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");

	var handleProduto = function() {
		
		$('.produto-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"produto.idProduto" : {
					required : true
				},
				"produto.nmProduto" : {
					required : true
				},
				"produto.dsProduto" : {
					required : true
				},
				"produto.fornecedorE.cdFornecedor" : {
					required : true
				},
				"produto.categoriaProdutoE.cdCategoria" : {
					required : true
				},
				"valorProd" :{
					required : true
				}
			},

			messages : {
				"produto.idProduto" : {
					required : "ID do Produto deve ser informado"
				},
				"produto.nmProduto" : {
					required : "Nome deve ser informado"
				},
				"produto.dsProduto" : {
					required : "Descrição deve ser informada"
				},
				"produto.fornecedorE.cdFornecedor" : {
					required : "Fornecedor deve ser selecionado"
				},
				"produto.categoriaProdutoE.cdCategoria" : {
					required : "Categoria deve ser selecionada"
				},
				"valorProd" :{
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

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".produto-form").validate().cancelSubmit = true;
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/novo");
					$('.produto-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.produto-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.produto-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/produto/salvar");
						$('.produto-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".produto-form").validate().cancelSubmit = true;
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/excluir");
					$('.produto-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".produto-form").validate().cancelSubmit = true;
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/voltar");
					$('.produto-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/consulta");
					$('.produto-form').submit();
					return false;
					displayObject('tbAtend', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleProduto();
		}
	};

}();
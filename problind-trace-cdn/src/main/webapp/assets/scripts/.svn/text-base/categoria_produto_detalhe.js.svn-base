var Categoria = function() {

	var handleCategoriaProduto = function() {
		
		$('.categoria-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"categoriaProduto.nmCategoriaProduto" : {
					required : true
				}
			},

			messages : {
				"categoriaProduto.nmCategoriaProduto" : {
					required : "Nome deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.categoria-form')).show();
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
					$(".categoria-form").validate().cancelSubmit = true;
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/novo");
					$('.categoria-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.categoria-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.categoria-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/categoriaProduto/salvar");
						$('.categoria-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".categoria-form").validate().cancelSubmit = true;
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/excluir");
					$('.categoria-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".categoria-form").validate().cancelSubmit = true;
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/voltar");
					$('.categoria-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/consulta");
					$('.categoria-form').submit();
					return false;
					displayObject('tbAtend', 'false');
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleCategoriaProduto();
		}
	};

}();
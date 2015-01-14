var IntegracaoKavasoft = function() {

	var handleIntegracaoKavasoft = function() {
		
		$('.blindadora-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
					
			},

			messages : {
				
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

		$('#btAtualizarDataSaida').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/atualizarDataSaida");
						$('.kavasoft-form').submit();
				});
		
		$('#btFabricante').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarFabricante");
						$('.kavasoft-form').submit();
				});
		
		$('#btModelo').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarModelo");
						$('.kavasoft-form').submit();
				});
		
		$('#btCor').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarCor");
						$('.kavasoft-form').submit();
				});
		
		$('#btVendedor').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarVendedor");
						$('.kavasoft-form').submit();
				});
		
		$('#btEstabelecimento').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarEstabelecimento");
						$('.kavasoft-form').submit();
				});
		
		$('#btFornecedor').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarFornecedor");
						$('.kavasoft-form').submit();
				});
		
		$('#btVidro').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarVidro");
						$('.kavasoft-form').submit();
				});
		
		$('#btOpaco').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarOpaco");
						$('.kavasoft-form').submit();
				});
		
		$('#btAgregado').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarAgregado");
						$('.kavasoft-form').submit();
				});
		
		$('#btContrato').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarContrato");
						$('.kavasoft-form').submit();
				});
		
		$('#btCliente').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarCliente");
						$('.kavasoft-form').submit();
				});
		
		$('#btVeiculo').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/migrarVeiculo");
						$('.kavasoft-form').submit();
				});
		
		$('#btChecklist').click(
				function(e) {
						App.blockUI({boxed: true});
						$('.kavasoft-form')
								.attr("action", $("#ctx").attr("value") + "/kavasoft/gerarChecklist");
						$('.kavasoft-form').submit();
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kavasoft-form').attr("action", $("#ctx").attr("value"));
					$('.kavasoft-form').submit();
					return false;
				});
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleIntegracaoKavasoft();
		}
	};

}();
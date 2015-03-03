var Kit = function() {

	var handleKit = function() {
		
		$('.kit-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"kit.nmKit" : {
					required : true
				},
				"kit.dsKit" : {
					required : true
				},
				"kit.stKit" : {
					required : true
				}
			},

			messages : {
				"kit.nmKit" : {
					required : "Nome deve ser informado"
				},
				"kit.dsKit" : {
					required : "Descrição deve ser informada"
				},
				"kit.stKit" : {
					required : "Status deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.kit-form')).show();
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

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".kit-form").validate().cancelSubmit = true;
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/carregardados?id="+ $('#idLogin').val());
					$('.kit-form').submit();
					return false;
				});

	};	
	
	return {
		// main function to initiate the module
		init : function() {
			handleKit();
		}
	};

}();
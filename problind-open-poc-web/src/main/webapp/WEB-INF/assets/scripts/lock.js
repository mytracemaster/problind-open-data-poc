var Lock = function () {

	var handleLogin = function() {
		$('.form-inline').validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"login.dsSenha" : {
					required : true
				},
				remember : {
					required : false
				}
			},

			messages : {
				"login.dsSenha" : {
					required : "Senha deve ser informada"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.form-inline')).show();
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
				error.insertAfter(element.closest('.input-group'));
			},

			submitHandler : function(form) {
				App.blockUI({boxed: true});
				form.submit();
			}
		});
		
	};
	
    return {
        //main function to initiate the module
        init: function () {
        	
        	handleLogin();

             $.backstretch([
		        "../assets/img/bg/1.jpg",
		        "../assets/img/bg/2.jpg",
		        "../assets/img/bg/3.jpg",
		        "../assets/img/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();
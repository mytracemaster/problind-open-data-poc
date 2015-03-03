var Token = function() {

	var handleForgetPassword = function () {
		$('.token-form').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
	                email: {
	                    required: true,
	                    email: true
	                },
	                token: {
	                    required: true,
	                    token: true
	                }
	            },

	            messages: {
	                email: {
	                    required: "Informe seu usuário"
	                },
	                token: {
	                    required: "Informe o token da solicitação"
	                }
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.form-group').addClass('has-error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.form-group').removeClass('has-error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.insertAfter(element.closest('.input-icon'));
	            },

	            submitHandler: function (form) {
	            	App.blockUI({boxed: true});
	                form.submit();
	            }
	        });

	        $('.token-form input').keypress(function (e) {
	        	App.blockUI({boxed: true});
	            if (e.which == 13) {
	                if ($('.token-form').validate().form()) {
	                	App.blockUI({boxed: true});
	                    $('.token-form').submit();
	                }
	                return false;
	            }
	        });
	};

	return {
		// main function to initiate the module
		init : function() {
			handleForgetPassword();

			 var ctx = $("#ctx").attr("value");
		       	$.backstretch([
			        ctx + "/assets/img/bg/1.jpg",
			        ctx + "/assets/img/bg/2.jpg",
			        ctx + "/assets/img/bg/3.jpg",
			        ctx + "/assets/img/bg/4.jpg"
			        ], {
			          fade: 1000,
			          duration: 8000
			    });
		}

	};

}();
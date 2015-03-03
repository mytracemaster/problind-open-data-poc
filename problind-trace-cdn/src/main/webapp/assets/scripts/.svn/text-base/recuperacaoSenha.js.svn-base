var RecuperacaoSenha = function() {

	var handleForgetPassword = function () {
		$('.forget-form').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
	                email: {
	                    required: true,
	                    email: true
	                }
	            },

	            messages: {
	                email: {
	                    required: "E-mail deve ser informado"
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

	        $('.forget-form input').keypress(function (e) {
	        	App.blockUI({boxed: true});
	            if (e.which == 13) {
	                if ($('.forget-form').validate().form()) {
	                	App.blockUI({boxed: true});
	                    $('.forget-form').submit();
	                }
	                return false;
	            }
	        });

	        jQuery('#back-btn').click(function () {
	        	window.location.href = $("#ctx").attr("value") + "/login";
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
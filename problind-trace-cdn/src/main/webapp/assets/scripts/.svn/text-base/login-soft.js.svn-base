var Login = function () {

	var handleLogin = function() {
		$('.login-form').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	            	"login.nmUser" : {
						required : true
					},
					"login.dsSenha" : {
						required : true
					},
	                remember: {
	                    required: false
	                }
	            },

	            messages: {
	            	"login.nmUser" : {
						required : "Login deve ser informado"
					},
					"login.dsSenha" : {
						required : "Senha deve ser informada"
					}
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   
	                $('.alert-danger', $('.login-form')).show();
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
	                form.submit();
	            }
	        });

	        $('.login-form input').keypress(function (e) {
	            if (e.which == 13) {
	                if ($('.login-form').validate().form()) {
	                	App.blockUI({boxed: true});
	                    $('.login-form').submit();
	                }
	                return false;
	            }
	        });

			$('#btLogin').click(
				function(e) {
					if ($('.login-form').validate().form()) {
						App.blockUI({boxed : true});
						$('.login-form').attr("action",
								$("#ctx").attr("value") + "/login/autenticar");
						$('.login-form').submit();
					}
			});
			
			jQuery('#forget-password').click(function () {
				window.location.href = $("#ctx").attr("value") + "/solicitacao/senha";
	        });
	};

    return {
        //main function to initiate the module
        init: function () {
        	
            handleLogin();
	       
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
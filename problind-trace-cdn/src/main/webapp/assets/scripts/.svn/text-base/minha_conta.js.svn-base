var Login = function () {

	var handleLogin = function() {
		$('.login-form').validate({
	            errorElement: 'span', //default input error message container
	            errorClass: 'help-block', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	                "login.dsSenha": {
	                    required: true
	                },
	                "login.confirmeSenha":{
	                	required: true,
	                	equalTo: "#senha"
	                },
	                remember: {
	                    required: false
	                }
	            },

	            messages: {
	                "login.dsSenha": {
	                    required: "Senha deve ser informada"
	                },
	                "login.confirmeSenha":{
	                	required: "A confirmação da senha deve ser informada",
	                	equalTo: "O campo confirmação de senha deve ser identico ao campo senha."
	                },
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

			jQuery(".file_upload").each(function() {
				$(".file_upload").fileupload({
					dataType: 'JSON',
	                disableImageResize: false,
	                maxFileSize: 20000000, //20 mb
	                singleFileUploads: true,
	                autoUpload: true,
	                maxNumberOfFiles: 1,
			        add: function (e, data) {
			            data.submit();
			            App.blockUI({boxed: true});
			        },
			        done: function (e, data) {
			        	$('#imagem_perfil').attr("src", $("#ctx").attr("value") + "/login/fotoPerfil/" + data.result.login.cdLogin);
			        	App.unblockUI();
			        },
			        fail: function (e, data) {
			        	App.unblockUI();
			        }
			   });
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

			$('#btAlterarSenha').click(
				function(e) {
					if ($('.login-form').validate().form()) {
						App.blockUI({boxed : true});
						$('.login-form').attr("action",
								$("#ctx").attr("value") + "/alterarSenha");
						$('.login-form').submit();
					}
				});

	};
	
    return {
        //main function to initiate the module
        init: function () {
        	
            handleLogin();
        }

    };

}();

function bindFileUpload(idItem) {
	
	$(".file_upload").fileupload({
		disableImageResize: false,
		maxFileSize: 20000000, //20 mb
        singleFileUploads: true,
        autoUpload: true,
        maxNumberOfFiles: 1,
        add: function (e, data) {
            data.submit();
            App.blockUI({boxed: true});
        },
        done: function (e, data) {
        	$('#imagem_perfil').attr("src", $("#ctx").attr("value") + "/login/fotoPerfil/" + data.result.login.cdLogin);
        	App.unblockUI();
        },
        fail: function (e, data) {
        	App.unblockUI();
        }
	});
	
};
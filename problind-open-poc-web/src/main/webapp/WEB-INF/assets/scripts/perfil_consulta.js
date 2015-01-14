var Perfil = function() {	
	
	var handlePerfil = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/consultar");
					$(".perfil-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/novo");
					$('.perfil-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/excluir/lote");
					$('.perfil-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.perfil-form').attr("action",
							$("#ctx").attr("value") + "/perfil/consulta");
					$('.perfil-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					var url = "http://" + $("#server").val() + ":80/" + $("#ctx").val();
					$('.perfil-form').attr("action", url);
					$('.perfil-form').submit();
					return false;
				});

		jQuery('#tbPerfil .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).parents('tr').removeClass("active");
                }                    
            });
            jQuery.uniform.update(set);
        });
		
		$('#btModalExcluir').click(function() {
	        $('.checkboxes').each(function(){
	        	if ($(this).is(':checked')) {
	        		$('#portlet-config').show();
	        	}
	        });
	    });

	};

	return {
		// main function to initiate the module
		init : function() {
			handlePerfil();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.perfil-form').attr("action",
					$("#ctx").attr("value") + "/perfil/consultar");
			$(".perfil-form").submit();
	  }
	}); 
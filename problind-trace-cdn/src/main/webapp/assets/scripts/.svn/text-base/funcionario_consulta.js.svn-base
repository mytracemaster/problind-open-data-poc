var Funcionario = function() {	
	
	var handleFuncionario = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/consultar");
					$(".funcionario-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/novo");
					$('.funcionario-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/excluir/lote");
					$('.funcionario-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action",
							$("#ctx").attr("value") + "/funcionario/consulta");
					$('.funcionario-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.funcionario-form').attr("action", $("#url").val());
					$('.funcionario-form').submit();
					return false;
				});
		
		jQuery('#tbFunc .group-checkable').change(function () {
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
			handleFuncionario();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.funcionario-form').attr("action",
					$("#ctx").attr("value") + "/funcionario/consultar");
			$(".funcionario-form").submit();
	  }
	}); 
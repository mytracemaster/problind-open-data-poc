var Fornecedor = function() {	
	
	var handleFornecedor = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/consultar");
					$(".fornecedor-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/novo");
					$('.fornecedor-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/excluir/lote");
					$('.fornecedor-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action",
							$("#ctx").attr("value") + "/fornecedor/consulta");
					$('.fornecedor-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.fornecedor-form').attr("action", $("#url").val());
					$('.fornecedor-form').submit();
					return false;
				});
		
		jQuery('#tbFornec .group-checkable').change(function () {
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
			handleFornecedor();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.fornecedor-form').attr("action",
					$("#ctx").attr("value") + "/fornecedor/consultar");
			$(".fornecedor-form").submit();
	  }
	}); 
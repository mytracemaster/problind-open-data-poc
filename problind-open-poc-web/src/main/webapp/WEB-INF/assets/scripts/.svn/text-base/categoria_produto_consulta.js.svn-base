var Categoria = function() {	
	
	var handleCategoria = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/consultar");
					$(".categoria-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/novo");
					$('.categoria-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/excluir/lote");
					$('.categoria-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action",
							$("#ctx").attr("value") + "/categoriaProduto/consulta");
					$('.categoria-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.categoria-form').attr("action", $("#url").val());
					$('.categoria-form').submit();
					return false;
				});
		
		jQuery('#tbCat .group-checkable').change(function () {
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
			handleCategoria();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.categoria-form').attr("action",
					$("#ctx").attr("value") + "/categoriaProduto/consultar");
			$(".categoria-form").submit();
	  }
	}); 
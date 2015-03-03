var Produto = function() {	
	
	var handleProduto = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('#fornecedor').attr("disabled",false);
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/consultar");
					$(".produto-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/novo");
					$('.produto-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/excluir/lote");
					$('.produto-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.produto-form').attr("action",
							$("#ctx").attr("value") + "/produto/consulta");
					$('.produto-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.produto-form').attr("action", $("#url").val());
					$('.produto-form').submit();
					return false;
				});
		
		jQuery('#tbProd .group-checkable').change(function () {
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
			handleProduto();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('#fornecedor').attr("disabled",false);
			$('.produto-form').attr("action",
					$("#ctx").attr("value") + "/produto/consultar");
			$(".produto-form").submit();
	  }
	}); 
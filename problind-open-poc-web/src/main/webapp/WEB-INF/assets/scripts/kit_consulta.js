var Kit = function() {	
	
	var handleKit = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/consultar");
					$(".kit-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/novo");
					$('.kit-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/excluir/lote");
					$('.kit-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/consulta");
					$('.kit-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action", $("#url").val());
					$('.kit-form').submit();
					return false;
				});
		
		jQuery('#tabKit .group-checkable').change(function () {
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
			handleKit();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.kit-form').attr("action",
					$("#ctx").attr("value") + "/kit/consultar");
			$(".kit-form").submit();
	  }
	}); 
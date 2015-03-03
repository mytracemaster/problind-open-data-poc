var Equipe = function() {	
	
	var handleEquipe = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/consultar");
					$(".equipe-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/novo");
					$('.equipe-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/excluir/lote");
					$('.equipe-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/consulta");
					$('.equipe-form').submit();
					return false;
				});
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action", $("#url").val());
					$('.equipe-form').submit();
					return false;
				});
		
		jQuery('#tbEquipe .group-checkable').change(function () {
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
			handleEquipe();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.equipe-form').attr("action",
					$("#ctx").attr("value") + "/equipe/consultar");
			$(".equipe-form").submit();
	  }
	}); 
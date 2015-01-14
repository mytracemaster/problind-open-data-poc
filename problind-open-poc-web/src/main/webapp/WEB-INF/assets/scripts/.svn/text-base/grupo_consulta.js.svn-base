var Grupo = function() {	
	
	var handleGrupo = function() {
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/consultar");
					$(".grupo-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/novo");
					$('.grupo-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/excluir/lote");
					$('.grupo-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/consulta");
					$('.grupo-form').submit();
					return false;
				});
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action", $("#url").val());
					$('.grupo-form').submit();
					return false;
				});
		
		jQuery('#tbGrupo .group-checkable').change(function () {
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
			handleGrupo();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.grupo-form').attr("action",
					$("#ctx").attr("value") + "/grupo/consultar");
			$(".grupo-form").submit();
	  }
	}); 
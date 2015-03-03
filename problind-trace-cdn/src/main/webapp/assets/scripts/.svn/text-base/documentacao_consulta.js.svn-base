var Documentacao = function() {	
	
	var handleDocumentacao = function() {
		
		$('#fabricanteDocumentacao').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/documentacao/carregarModeloFabricante?id=" + $("#fabricanteDocumentacao").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#modeloDocumentacao').find('option').remove();
				$('#modeloDocumentacao').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloDocumentacao').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/consultar");
					$(".documentacao-form").submit();
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/novo");
					$('.documentacao-form').submit();
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/excluir/lote");
					$('.documentacao-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action",
							$("#ctx").attr("value") + "/documentacao/consulta");
					$('.documentacao-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.documentacao-form').attr("action", $("#url").val());
					$('.documentacao-form').submit();
					return false;
				});
		
		$('#btImprimir').click(
				function(e) {
					var dtInicio = $('#dataDocumentacao').val();
					var dtFim = $('#dataAtendimentoFinal').val();
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_documentacao&DT_INICIO=" + dtInicio + "&DT_FIM=" + dtFim + "&URL_IMG=" + urlImg;
					$('.documentacao-form').attr("action", url);
					$('.documentacao-form').submit();
					return false;
				});
		
		jQuery('#tbDocumentacao .group-checkable').change(function () {
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
			handleDocumentacao();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('.documentacao-form').attr("action",
					$("#ctx").attr("value") + "/documentacao/consultar");
			$(".documentacao-form").submit();
	  }
	}); 
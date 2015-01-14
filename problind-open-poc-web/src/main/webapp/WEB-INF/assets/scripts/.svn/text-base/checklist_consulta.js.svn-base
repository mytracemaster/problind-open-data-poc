var Checklist = function() {	
	
	var handleChecklist = function() {
		
		$('#fabricanteChecklist').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/checklist/carregarModeloFabricante?id=" + $("#fabricanteChecklist").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloChecklist').find('option').remove();
				$('#modeloChecklist').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloChecklist').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('.checklist-form').attr("action",
							$("#ctx").attr("value") + "/checklist/consultar");
					$(".checklist-form").submit();
		});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.checklist-form').attr("action",
							$("#ctx").attr("value") + "/checklist/excluir/lote");
					$('.checklist-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.checklist-form').attr("action",
							$("#ctx").attr("value") + "/checklist/consulta");
					$('.checklist-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.checklist-form').attr("action", $("#url").val());
					$('.checklist-form').submit();
					return false;
				});

	};

	return {
		// main function to initiate the module
		init : function() {
			handleChecklist();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
		  App.blockUI({boxed: true});
			$('.checklist-form').attr("action",
					$("#ctx").attr("value") + "/checklist/consultar");
			$(".checklist-form").submit();
	  }
	}); 

function imprimir(id) {
	App.blockUI({boxed: true});
	var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
	var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_checklist&ID_CHECKLIST=" + id + '&URL_IMG=' + urlImg;
	$('.checklist-form').attr("action", url);
	$('.checklist-form').submit();
	App.unblockUI();
}
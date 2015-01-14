$( document ).ready(function() {

		$('#btBuscar').click(
		function(e) {
			App.blockUI({
				boxed : true
			});
			$('.pesquisa-cliente-consulta-form').attr("action",
					$("#ctx").attr("value") + "/pesquisa/admin/consultar");
			$(".pesquisa-cliente-consulta-form").submit();
		});
		
		$('#btImprimir').click(
				function(e) {
				var dtInicio = $('#dataPesquisa').val();
				var dtFim = $('#dataPesquisaFinal').val();
				var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
				var url = $("#ctx").attr("value") + '/report?RPT_NAME=rpt_pesquisa_satisfacao&DT_INICIO=' + dtInicio + '&DT_FIM=' + dtFim + '&URL_IMG=' + urlImg;
				$('.pesquisa-cliente-consulta-form').attr("action", url);
				$('.pesquisa-cliente-consulta-form').submit();
		});
		
		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					document.location.href = $("#ctx").attr("value") + "/pesquisa/admin/consulta";
					return false;
		});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					document.location.href = $("#ctx").attr("value") + "/";
					return false;
				});
		
		return {
			// main function to initiate the module
			init : function() {
				handle();
			}
		};
		
});
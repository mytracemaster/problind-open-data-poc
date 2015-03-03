var Producao = function() {	
	
	var handleProducao = function() {
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/producao/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				//alert("falha");
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value="">Todos</option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btBuscar').click
				(function(e) {
					App.blockUI({boxed: true});
					$('#s2id_vendedor').attr("class", "select2-container select2-allowclear select2-container form-control select2me");
					$('#dataAtendimento').attr("readonly", false);
					$('#dataAtendimentoFinal').attr("readonly", false);
					$('.producao-form').attr("action",
							$("#ctx").attr("value") + "/producao/consultar");
					$(".producao-form").submit();
		});
		
		$('#btImprimir').click
			(function(e) {
				$('.producao-form').attr("target","_blank");
				$('.producao-form').attr("action",
						$("#ctx").attr("value") + "/producao/imprimirApontamento");
				$(".producao-form").submit();
		});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.producao-form').attr("action",
							$("#ctx").attr("value") + "/producao/consulta");
					$('.producao-form').submit();
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.producao-form').attr("action", $("#url").val());
					$('.producao-form').submit();
					return false;
				});
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleProducao();
		}
	};

}();

$(document).keypress( function(event) {
	  if (event.which === 13) {
			App.blockUI({boxed: true});
			$('#s2id_vendedor').attr("class", "select2-container select2-allowclear select2-container form-control select2me");
			$('#dataAtendimento').attr("readonly", false);
			$('#dataAtendimentoFinal').attr("readonly", false);
			$('.producao-form').attr("action",
					$("#ctx").attr("value") + "/producao/consultar");
			$(".producao-form").submit();
	  }
	}); 

function detalhe(vendedor, estabelecimento, modelo, cor, chassi, aramida, vidro, cliente){
	$('#vendedor').val(vendedor);
	$('#estabelecimento').val(estabelecimento);
	$('#modelo').val(modelo);
	$('#cor').val(cor);
	$('#chassi').val(chassi);
	$('#aramida').val(aramida);
	$('#vidro').val(vidro);
	$('#cliente').val(cliente);
}

function opcionais(numOs){
	
	App.blockUI({boxed: true});
	var postData = $(this).serializeArray();
	var formURL = $("#ctx").attr("value") + "/producao/consultarOpcional?id=" + numOs;
	
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {

		var table = '<div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
		var th = '<thead class="bg-red"><tr>';
		var tdHead = '<th>Opcional</th>';
		var thFinal = '</tr></thead>';
		var tBody = '<tbody>';
		var tBodyFinal = '</tbody>';
		var tableFinal = '</table></div>';
		var _tr = '';
		var _duracao = '';
		
		for(i=0; i < data.agregadoLista.length; i++){
			_tr += '<tr class="odd gradeX"><td>' + data.agregadoLista[i].agregadoE.nmAgregado + '</td></tr>' ;
		}
		
		var tabelaPausas = table + th + tdHead + thFinal + tBody + _tr + tBodyFinal + tableFinal;
		
		$('#tabOpcional').html(tabelaPausas);
		
		$("#portlet-config-opcional").modal("show");
		
		App.unblockUI();
			
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};
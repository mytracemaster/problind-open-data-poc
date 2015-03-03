
function carregaTabelaProcessos(){
	
	var table_blindagem_array = $(".tables_blindagem");
	if(table_blindagem_array == null || table_blindagem_array == "undefined"){
		return;
	}
	
	$.each(table_blindagem_array, function(index, value) {
		var table_blindagem = $(value);
		var processo_acionado_id = table_blindagem.attr("id");
		$('#' + processo_acionado_id).html('');
	});
	
	App.blockUI({boxed: true});
	
	$.each(table_blindagem_array, function(index, value) {
		var table_blindagem = $(value);
		var processo_acionado_id = table_blindagem.attr("id");
		
		var uri = $("#ctx").attr("value") + "/consultarVeiculos";
		$.ajax({ 
			url: uri, 
			type: 'POST', 
			dataType: 'JSON', 
			data: { idProcesso : processo_acionado_id},
		}).done(function(data, textStatus, jqXHR) {
			
			var uri_detalhe = $("#ctx").attr("value") + "/blindagem/detalhar";
			
			var count = 0;
			$.each(data, function(i, item) {
                var blindagem = item;
				var tb_html = $("#" + processo_acionado_id);
                
				var processoList = $(blindagem.processoList);
				
                var uri_detalhe_id = uri_detalhe + "?id=" + blindagem.cdBlindagem;
                                	
                var tb_html_str = "";
                tb_html_str += "<div class=\"to_remove_tables "+ processo_acionado_id + "_tables\" id=\"blindagem_table_" + blindagem.cdBlindagem + "\">";
                tb_html_str += "<table class=\"table_process table-bordered\" width=\"90%\" style=\"font-size:10px;\">";
                
                tb_html_str += "<tr>";
                
                tb_html_str += "<td colspan=\"2\" align=\"center\" style=\"background-color:" + blindagem.colorStatus + ";color:#fff;\"><a href=\""+ 
        		uri_detalhe_id +"\" onclick=\"javascript: App.blockUI({boxed: true};\" class=\"navbar-link\" style=\"color:#FFF !important;\"><strong>" + 
        		blindagem.cdPropostaContrato + "</strong></a></td>";
                tb_html_str += "<td colspan=\"3\" align=\"left\" style=\"background-color:" + blindagem.colorStatus + ";color:#fff;\">"+ blindagem.modeloVeiculo + "</td>";
                
                
                tb_html_str += "</tr>";
                	
                tb_html_str += "<tr>";
                tb_html_str += "<td style=\"background-color:" + processoList[0].dsCor  + " !important;\" width=\"20%\" align=\"center\">1</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[1].dsCor  + " !important;\" width=\"20%\" align=\"center\">2</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[2].dsCor  + " !important;\" width=\"20%\" align=\"center\">3</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[3].dsCor  + " !important;\" width=\"20%\" align=\"center\">4</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[4].dsCor  + " !important;\" width=\"20%\" align=\"center\">5</td>";
                tb_html_str += "</tr>";
                
                tb_html_str += "<tr>";
                tb_html_str += "<td style=\"background-color:" + processoList[5].dsCor  + " !important;\" width=\"20%\" align=\"center\">6</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[6].dsCor  + " !important;\" width=\"20%\" align=\"center\">7</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[7].dsCor  + " !important;\" width=\"20%\" align=\"center\">8</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[8].dsCor  + " !important;\" width=\"20%\" align=\"center\">9</td>";
                tb_html_str += "<td style=\"background-color:" + processoList[9].dsCor  + " !important;\" width=\"20%\" align=\"center\">10</td>";
                tb_html_str += "</tr>";
                
                tb_html_str += "</table>";
                tb_html_str += "<br>";
                tb_html_str += "</div>";
                
                tb_html.append(tb_html_str);
				
                count++;
            });

			$("#totais_" + processo_acionado_id).html(count);
			
			App.unblockUI();
			
		}).fail(function(jqXHR, textStatus, errorThrown) { 
			console.log(errorThrown);
		}); 
		
	});
	
}

$('#cboColor').change(function(e) {
	
	if(this.value==1){
		$('#proc_1').css('background-color','#3d3d3d');
		$('#proc_2').css('background-color','#3d3d3d');
		$('#proc_3').css('background-color','#3d3d3d');
		$('#proc_4').css('background-color','#3d3d3d');
		$('#proc_5').css('background-color','#3d3d3d');
		$('#proc_6').css('background-color','#3d3d3d');
		$('#proc_7').css('background-color','#3d3d3d');
		$('#proc_8').css('background-color','#3d3d3d');
		$('#proc_9').css('background-color','#3d3d3d');
		$('#proc_10').css('background-color','#3d3d3d');

		$('#tot_1').css('background-color','#3d3d3d');
		$('#tot_2').css('background-color','#3d3d3d');
		$('#tot_3').css('background-color','#3d3d3d');
		$('#tot_4').css('background-color','#3d3d3d');
		$('#tot_5').css('background-color','#3d3d3d');
		$('#tot_6').css('background-color','#3d3d3d');
		$('#tot_7').css('background-color','#3d3d3d');
		$('#tot_8').css('background-color','#3d3d3d');
		$('#tot_9').css('background-color','#3d3d3d');
		$('#tot_10').css('background-color','#3d3d3d');

		$('#totais_proc_1').css('color','#ffffff');
		$('#totais_proc_2').css('color','#ffffff');
		$('#totais_proc_3').css('color','#ffffff');
		$('#totais_proc_4').css('color','#ffffff');
		$('#totais_proc_5').css('color','#ffffff');
		$('#totais_proc_6').css('color','#ffffff');
		$('#totais_proc_7').css('color','#ffffff');
		$('#totais_proc_8').css('color','#ffffff');
		$('#totais_proc_9').css('color','#ffffff');
		$('#totais_proc_10').css('color','#ffffff');
	}else{
		$('#proc_1').css('background-color','#ffffff');
		$('#proc_2').css('background-color','#ffffff');
		$('#proc_3').css('background-color','#ffffff');
		$('#proc_4').css('background-color','#ffffff');
		$('#proc_5').css('background-color','#ffffff');
		$('#proc_6').css('background-color','#ffffff');
		$('#proc_7').css('background-color','#ffffff');
		$('#proc_8').css('background-color','#ffffff');
		$('#proc_9').css('background-color','#ffffff');
		$('#proc_10').css('background-color','#ffffff');

		$('#tot_1').css('background-color','#ffffff');
		$('#tot_2').css('background-color','#ffffff');
		$('#tot_3').css('background-color','#ffffff');
		$('#tot_4').css('background-color','#ffffff');
		$('#tot_5').css('background-color','#ffffff');
		$('#tot_6').css('background-color','#ffffff');
		$('#tot_7').css('background-color','#ffffff');
		$('#tot_8').css('background-color','#ffffff');
		$('#tot_9').css('background-color','#ffffff');
		$('#tot_10').css('background-color','#ffffff');

		$('#totais_proc_1').css('color','#000000');
		$('#totais_proc_2').css('color','#000000');
		$('#totais_proc_3').css('color','#000000');
		$('#totais_proc_4').css('color','#000000');
		$('#totais_proc_5').css('color','#000000');
		$('#totais_proc_6').css('color','#000000');
		$('#totais_proc_7').css('color','#000000');
		$('#totais_proc_8').css('color','#000000');
		$('#totais_proc_9').css('color','#000000');
		$('#totais_proc_10').css('color','#000000');
	}
	
});

$('#proc_1').css('background-color','#3d3d3d');
$('#proc_2').css('background-color','#3d3d3d');
$('#proc_3').css('background-color','#3d3d3d');
$('#proc_4').css('background-color','#3d3d3d');
$('#proc_5').css('background-color','#3d3d3d');
$('#proc_6').css('background-color','#3d3d3d');
$('#proc_7').css('background-color','#3d3d3d');
$('#proc_8').css('background-color','#3d3d3d');
$('#proc_9').css('background-color','#3d3d3d');
$('#proc_10').css('background-color','#3d3d3d');

$('#tot_1').css('background-color','#3d3d3d');
$('#tot_2').css('background-color','#3d3d3d');
$('#tot_3').css('background-color','#3d3d3d');
$('#tot_4').css('background-color','#3d3d3d');
$('#tot_5').css('background-color','#3d3d3d');
$('#tot_6').css('background-color','#3d3d3d');
$('#tot_7').css('background-color','#3d3d3d');
$('#tot_8').css('background-color','#3d3d3d');
$('#tot_9').css('background-color','#3d3d3d');
$('#tot_10').css('background-color','#3d3d3d');

$('#totais_proc_1').css('color','#ffffff');
$('#totais_proc_2').css('color','#ffffff');
$('#totais_proc_3').css('color','#ffffff');
$('#totais_proc_4').css('color','#ffffff');
$('#totais_proc_5').css('color','#ffffff');
$('#totais_proc_6').css('color','#ffffff');
$('#totais_proc_7').css('color','#ffffff');
$('#totais_proc_8').css('color','#ffffff');
$('#totais_proc_9').css('color','#ffffff');
$('#totais_proc_10').css('color','#ffffff');

$(function() {
	carregaTabelaProcessos();
	setInterval(function() {carregaTabelaProcessos()}, 1000 * 60 * 2);
});
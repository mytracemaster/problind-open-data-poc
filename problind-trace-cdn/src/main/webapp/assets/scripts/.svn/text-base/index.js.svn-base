var Index = function () {


    return {

        //main function
        init: function () {
            App.addResponsiveHandler(function () {
                jQuery('.vmaps').each(function () {
                    var map = jQuery(this);
                    map.width(map.parent().width());
                });
            });
        },

        initDashboardDaterange: function () {
        	
        	$('#vendedor').change
				(function(e) {
	                App.blockUI({boxed: true});
	                
	                var vendedor = $(this).val();
	                var dtIni = $('[name=daterangepicker_start]').val();
	                var dtFim = $('[name=daterangepicker_end]').val();
	                
	                $('#dataInicial').val(dtIni);
	                $('#dataFinal').val(dtFim);
	                
	                carregaDashboard(dtIni, dtFim);
	                
			});
        	
            $('#dashboard-report-range').daterangepicker({
                opens: (App.isRTL() ? 'right' : 'left'),
                startDate: moment().startOf('month'),//moment().subtract('days', 29),
                endDate: moment().endOf('month'),//moment(),
                minDate: '01/01/2012',
                maxDate: '31/12/2300',
                dateLimit: {
                    days: 360
                },
                showDropdowns: false,
                showWeekNumbers: true,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: true,
                ranges: {
                    'Hoje': [moment(), moment()],
                    'Ontem': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Últimos 7 Dias': [moment().subtract('days', 6), moment()],
                    'Últimos 30 Dias': [moment().subtract('days', 29), moment()],
                    'Mês Atual': [moment().startOf('month'), moment().endOf('month')],
                    'Mês Passado': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                buttonClasses: ['btn'],
                applyClass: 'red',
                cancelClass: 'default',
                format: 'DD/MM/YYYY',
                separator: ' até ',
                locale: {
                    applyLabel: 'Aplicar',
                    fromLabel: 'De',
                    toLabel: 'Até',
                    customRangeLabel: 'Período',
                    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                    firstDay: 1
                }
            },
            function (start, end) {
                console.log("Callback has been called!");
                //$('#dashboard-report-range span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                $('#dashboard-report-range span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
                
                var dtIni = start.format('DD/MM/YYYY');
                var dtFim = end.format('DD/MM/YYYY');
                
                 // Carrega Dashboard
                 carregaDashboard(dtIni, dtFim);
				
            });

            $('#dataInicial').val(moment().startOf('month').format('DD/MM/YYYY'));
            $('#dataFinal').val(moment().endOf('month').format('DD/MM/YYYY'));
            
            //$('#dashboard-report-range span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
            //$('#dashboard-report-range span').html(moment().subtract('days', 29).format('DD/MM/YYYY') + ' - ' + moment().format('DD/MM/YYYY'));
            $('#dashboard-report-range span').html(moment().startOf('month').format('DD/MM/YYYY') + ' - ' + moment().endOf('month').format('DD/MM/YYYY'));
            $('#dashboard-report-range').show();
            
            var dtIni = moment().startOf('month').format('DD/MM/YYYY');
            var dtFim = moment().endOf('month').format('DD/MM/YYYY');
            
        	carregaDashboard(dtIni, dtFim);
            
        },

        initIntro: function () {
            if ($.cookie('intro_show')) {
                return;
            }

            $.cookie('intro_show', 1);

            setTimeout(function () {
                var unique_id = $.gritter.add({
                    // (string | mandatory) the heading of the notification
                    title: 'EASY QUEST!',
                    // (string | mandatory) the text inside the notification
                    text: 'EASY QUEST é uma ferramenta de administração Responsivo que você sempre procurou!',
                    // (string | optional) the image to display on the left
                    image: './assets/img/avatar1.jpg',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });

                // You can have it return a unique id, this can be used to manually remove it later using
                setTimeout(function () {
                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });
                }, 12000);
            }, 2000);

            setTimeout(function () {
                var unique_id = $.gritter.add({
                    // (string | mandatory) the heading of the notification
                    title: 'EASY QUEST!',
                    // (string | mandatory) the text inside the notification
                    text: 'EASY QUEST vem com uma enorme coleção de componentes de interface de usuário personalizáveis e ​​reutilizáveis!',
                    // (string | optional) the image to display on the left
                    image: './assets/img/avatar1.jpg',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });

                // You can have it return a unique id, this can be used to manually remove it later using
                setTimeout(function () {
                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });
                }, 13000);
            }, 8000);

            setTimeout(function () {

                $('#styler').pulsate({
                    color: "#bb3319",
                    repeat: 10
                });

                $.extend($.gritter.options, {
                    position: 'top-left'
                });

                var unique_id = $.gritter.add({
                    position: 'top-left',
                    // (string | mandatory) the heading of the notification
                    title: 'Personalize EASY QUEST!',
                    // (string | mandatory) the text inside the notification
                    text: 'EASY QUEST permite você customizar facilmente as cores e layout do sistema.',
                    // (string | optional) the image to display on the left
                    image1: './assets/img/avatar1.png',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });

                $.extend($.gritter.options, {
                    position: 'top-right'
                });

                // You can have it return a unique id, this can be used to manually remove it later using
                setTimeout(function () {
                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });
                }, 15000);

            }, 23000);

            setTimeout(function () {

                $.extend($.gritter.options, {
                    position: 'top-left'
                });

                var unique_id = $.gritter.add({
                    // (string | mandatory) the heading of the notification
                    title: 'Notifica��es',
                    // (string | mandatory) the text inside the notification
                    text: 'Voc� tem 3 novas notifica��es.',
                    // (string | optional) the image to display on the left
                    image1: './assets/img/image1.jpg',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });

                setTimeout(function () {
                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });
                }, 4000);

                $.extend($.gritter.options, {
                    position: 'top-right'
                });

                var number = $('#header_notification_bar .badge').text();
                number = parseInt(number);
                number = number + 3;
                $('#header_notification_bar .badge').text(number);
                $('#header_notification_bar').pulsate({
                    color: "#66bce6",
                    repeat: 5
                });

            }, 40000);

            setTimeout(function () {

                $.extend($.gritter.options, {
                    position: 'top-left'
                });

                var unique_id = $.gritter.add({
                    // (string | mandatory) the heading of the notification
                    title: 'Inbox',
                    // (string | mandatory) the text inside the notification
                    text: 'Voc� tem 2 novas mensagens na Inbox.',
                    // (string | optional) the image to display on the left
                    image1: './assets/img/avatar1.jpg',
                    // (bool | optional) if you want it to fade out on its own or just sit there
                    sticky: true,
                    // (int | optional) the time you want it to be alive for before fading out
                    time: '',
                    // (string | optional) the class name you want to apply to that specific message
                    class_name: 'my-sticky-class'
                });

                $.extend($.gritter.options, {
                    position: 'top-right'
                });

                setTimeout(function () {
                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });
                }, 4000);

                var number = $('#header_inbox_bar .badge').text();
                number = parseInt(number);
                number = number + 2;
                $('#header_inbox_bar .badge').text(number);
                $('#header_inbox_bar').pulsate({
                    color: "#dd5131",
                    repeat: 5
                });

            }, 60000);
        }

    };

}();

function carregaDashboard(dtIni, dtFim){
	
	App.blockUI({boxed: true});
	
	 //Zerar tudo
	$('#atendimento').html('0');
	$('#proposta').html('0');
	$('#venda').html('0');
	$('#pesquisa').html('0');
	$('#labelMedia').html('Pesquisa Satisfa\u00e7\u00e3o');
    $('#vendaPorEstabelecimento').html('');
    $('#performanceVendedor').html('');
    
    $('#dataInicial').val(dtIni);
    $('#dataFinal').val(dtFim);
    
	  var postData = $(this).serializeArray();
	  var vendedor = $('#vendedor').val();
	  var dt1 = $('#dataInicial').val();
      var dt2 = $('#dataFinal').val();
	  
      // Calcula Totais (Atendimento x Proposta x Venda x Pesquisa)
	  var formURL = $("#ctx").attr("value") + "/consultarTotais?dataInicial=" + dt1 + "&dataFinal=" + dt2 + "&idVendedor=" + vendedor;
		
	  $.ajax({ 
			url: formURL, 
			type: 'POST', 
			data: postData,
			dataType: 'JSON',
		}).done(function(data, textStatus, jqXHR) {
			
			$('#atendimento').html(data.dashboardTotal.qtdeAtendimento);
			$('#proposta').html(data.dashboardTotal.qtdeProposta);
			$('#venda').html(data.dashboardTotal.qtdeVenda);
			$('#pesquisa').html(data.dashboardTotal.mediaPesquisa);
			$('#labelPesquisa').html(data.dashboardTotal.labelMedia);
			
			App.unblockUI();
		}).fail(function(jqXHR, textStatus, errorThrown) { 
			App.unblockUI();
		});  
	 
	  App.blockUI({boxed: true});
	  
	  // Calcula vendas por estabelecimento
	 formURL = $("#ctx").attr("value") + "/consultarVendasPorEstabelecimento?dataInicial=" + dt1 + "&dataFinal=" + dt2 + "&idVendedor=" + vendedor;
		
	  $.ajax({ 
			url: formURL, 
			type: 'POST', 
			data: postData,
			dataType: 'JSON',
		}).done(function(data, textStatus, jqXHR) {
			
			var table = '<br><div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
			var th = '<thead class="bg-red"><tr>';
			var tdHead = '<th>Intermedia\u00e7\u00e3o</th><th width="120px" style="text-align:center !important;">Venda</th>';
			var thFinal = '</tr></thead>';
			var tBody = '<tbody>';
			var tBodyFinal = '</tbody>';
			var tableFinal = '</table></div>';
			var _tr = '';
			var _trTotal = '';
			var totalVenda = 0;

			for(i=0; i < data.listVendaPorEstabelecimento.length; i++){
				var estab = data.listVendaPorEstabelecimento[i].nmEstabelecimento;
				var qtdeVenda = data.listVendaPorEstabelecimento[i].qtdeVenda;
				
				_tr += '<tr class="odd gradeX"><td>' + estab + '</td><td align="center">' + qtdeVenda + '</td></tr>' ;
				totalVenda += qtdeVenda;
			}
			
			_trTotal = '<tr><td align="right"><b>Total</</td><td align="center"><b>' + totalVenda + '</b></td></tr>' ;
			
			var tabelaVendaPorEstabelecimento = table + th + tdHead + thFinal + tBody + _tr + _trTotal + tBodyFinal + tableFinal;
			
			$('#vendaPorEstabelecimento').html(tabelaVendaPorEstabelecimento);
			
			App.unblockUI();
		}).fail(function(jqXHR, textStatus, errorThrown) { 
			App.unblockUI();
		});  
	  
	  App.blockUI({boxed: true});
	  
	// Calcula performance de vendedor
	formURL = $("#ctx").attr("value") + "/consultarPerformanceVendedor?dataInicial=" + dt1 + "&dataFinal=" + dt2 + "&idVendedor=" + vendedor;
			
		  $.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				var table = '<br><div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
				var th = '<thead class="bg-red"><tr>';
				var tdHead = '<th>Vendedor</th><th width="120px" style="text-align:center !important;">Atendimento</th><th width="120px" style="text-align:center !important;">Proposta</th><th width="120px" style="text-align:center !important;">Venda</th><th width="120px" style="text-align:center !important;">Efici\u00eancia</th>';
				var thFinal = '</tr></thead>';
				var tBody = '<tbody>';
				var tBodyFinal = '</tbody>';
				var tableFinal = '</table></div>';
				var _tr = '';

				for(i=0; i < data.listPerformancePorVendedor.length; i++){
					var vendedor = data.listPerformancePorVendedor[i].nmMembro;
					var qtdeAtend = data.listPerformancePorVendedor[i].qtdeAtendimento;
					var qtdeProp = data.listPerformancePorVendedor[i].qtdeProposta;
					var qtdeVenda = data.listPerformancePorVendedor[i].qtdeVenda;
					var eficiencia = data.listPerformancePorVendedor[i].performance;
					
					_tr += '<tr class="odd gradeX"><td>' + vendedor + '</td><td align="center">' + qtdeAtend + '</td><td align="center">' + qtdeProp + '<td align="center">' + qtdeVenda + '</td><td align="center">' + eficiencia + ' %</td></tr>' ;

				}
				
				var tabelaPerformanceVendedor = table + th + tdHead + thFinal + tBody + _tr + tBodyFinal + tableFinal;
				
				$('#performanceVendedor').html(tabelaPerformanceVendedor);
				
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			});  
		  
	// Calcula vendas por modelo de veiculo no período informado
	formURL = $("#ctx").attr("value") + "/consultarVendasPorModeloNoPeriodo?dataInicial=" + dt1 + "&dataFinal=" + dt2;
		  
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {
		
		var table = '<br><div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
		var th = '<thead class="bg-red"><tr>';
		var tdHead = '<th>Modelo</th><th width="120px" style="text-align:center !important;">Venda</th>';
		var thFinal = '</tr></thead>';
		var tBody = '<tbody>';
		var tBodyFinal = '</tbody>';
		var tableFinal = '</table></div>';
		var _tr = '';

		var valorMes = 0;
		var qtMes = 0;
		var qtde = data.listQtdeVendaPorModeloNoPeriodo.length;
		
		for(i=0; i < data.listQtdeVendaPorModeloNoPeriodo.length; i++){
			var fabricante = data.listQtdeVendaPorModeloNoPeriodo[i].fabricante;
			var modelo = data.listQtdeVendaPorModeloNoPeriodo[i].modelo;
			var qtdeMes = data.listQtdeVendaPorModeloNoPeriodo[i].qtdeMes;
			qtMes += data.listQtdeVendaPorModeloNoPeriodo[i].qtdeMes;
			valorMes += data.listQtdeVendaPorModeloNoPeriodo[i].valorMes;
			
			_tr += '<tr class="odd gradeX"><td>' + modelo + '</td><td align="center">' + qtdeMes + '</td></tr>' ;

		}
		
		var media = valorMes / qtMes;
		
		var trTotal = '<tr><td align="right"><b>Média Preço</b></td><td align="center"><b>R$ ' + formatNumberString(media.toFixed(2).toString()) + '</b></td></tr>' ;

		var tabela = table + th + tdHead + thFinal + tBody + _tr + trTotal + tBodyFinal + tableFinal;
		
		$('#vendaPorModelo').html(tabela);
		
		App.unblockUI();
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	});  
	
		  /*
		  App.blockUI({boxed: true});

		  // Calcula vendas por modelo de veiculo dos ultimos 3 meses
			formURL = $("#ctx").attr("value") + "/consultarVendasPorModelo";
					
				  $.ajax({ 
						url: formURL, 
						type: 'POST', 
						data: postData,
						dataType: 'JSON',
					}).done(function(data, textStatus, jqXHR) {
						
						var table = '<br><div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
						var th = '<thead class="bg-red"><tr>';
						var tdHead = '<th width="52%">Modelo</th><th width="12%" style="text-align:center !important;">Mês 1</th><th width="12%" style="text-align:center !important;">Mês 2</th><th width="12%" style="text-align:center !important;">Mês 3</th><th width="12%" style="text-align:center !important;">Mês Atual</th>';
						var thFinal = '</tr></thead>';
						var tBody = '<tbody>';
						var tBodyFinal = '</tbody>';
						var tableFinal = '</table></div>';
						var _tr = '';

						var valorMes1 = 0;
						var valorMes2 = 0;
						var valorMes3 = 0;
						var valorMesAtual = 0;
						var qtMes1 = 0;
						var qtMes2 = 0;
						var qtMes3 = 0;
						var qtMesAtual = 0;
						var qtde = data.listQtdeVendaPorModelo.length;
						
						for(i=0; i < data.listQtdeVendaPorModelo.length; i++){
							var fabricante = data.listQtdeVendaPorModelo[i].fabricante;
							var modelo = data.listQtdeVendaPorModelo[i].modelo;
							var qtdeMes1 = data.listQtdeVendaPorModelo[i].qtdeMes1;
							qtMes1 += data.listQtdeVendaPorModelo[i].qtdeMes1;
							valorMes1 += data.listQtdeVendaPorModelo[i].valorMes1;
							var qtdeMes2 = data.listQtdeVendaPorModelo[i].qtdeMes2;
							qtMes2 += data.listQtdeVendaPorModelo[i].qtdeMes2;
							valorMes2 += data.listQtdeVendaPorModelo[i].valorMes2;
							var qtdeMes3 = data.listQtdeVendaPorModelo[i].qtdeMes3;
							qtMes3 += data.listQtdeVendaPorModelo[i].qtdeMes3;
							valorMes3 += data.listQtdeVendaPorModelo[i].valorMes3;
							var qtdeMesAtual = data.listQtdeVendaPorModelo[i].qtdeMesAtual;
							qtMesAtual += data.listQtdeVendaPorModelo[i].qtdeMesAtual;
							valorMesAtual += data.listQtdeVendaPorModelo[i].valorMesAtual;
							
							_tr += '<tr class="odd gradeX"><td>' + modelo + '</td><td align="center">' + qtdeMes1 + '</td><td align="center">' + qtdeMes2 + '<td align="center">' + qtdeMes3 + '</td><td align="center">' + qtdeMesAtual + '</td></tr>' ;

						}
						
						var media1 = valorMes1 / qtMes1;
						var media2 = valorMes2 / qtMes2;
						var media3 = valorMes3 / qtMes3;
						var mediaAtual = valorMesAtual / qtMesAtual;
						
						var trTotal = '<tr><td><b>Média Preço</b></td><td align="center"><b>R$ ' + formatNumberString(media1.toFixed(2).toString()) + '</b></td><td align="center"><b>R$ ' + formatNumberString(media2.toFixed(2).toString()) + '</b><td align="center"><b>R$ ' + formatNumberString(media3.toFixed(2).toString()) + '</b></td><td align="center"><b>R$ ' + formatNumberString(mediaAtual.toFixed(2).toString()) + '</b></td></tr>' ;

						var tabela = table + th + tdHead + thFinal + tBody + _tr + trTotal + tBodyFinal + tableFinal;
						
						$('#vendaPorModelo').html(tabela);
						
						App.unblockUI();
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						App.unblockUI();
					});  
		  
			*/	  
				  
			 // Monta grafico de atendimento x proposta x venda	  
			 graficoAtendimentoPropostaVenda();
				  
			 // Monta grafico de venda por vendedor
		     graficoVendaPorVendedor();
		     
		     // Monta grafico de produçao x processo por data
		     //graficoProducaoPorDataProcesso();
	
}

function graficoProducaoPorDataProcesso(){
	
	 var postData = $(this).serializeArray();
	  
	 var dt1 = $('#dataInicial').val();
     var dt2 = $('#dataFinal').val();
     
     //dt1 = '01/12/2014';
     //dt2 = '03/12/2014';
	  
	  var formURL = $("#ctx").attr("value") + "/consultaQtdeProducaoPorDataProcesso?dataInicial=" + dt1 + "&dataFinal=" + dt2;
		
	  $.ajax({ 
			url: formURL, 
			type: 'POST', 
			data: postData,
			dataType: 'JSON',
		}).done(function(data, textStatus, jqXHR) {
			
			var tam = data.producaoList.length;			
	        var map = new google.visualization.DataTable();
	        map.addRows(tam);  // length gives us the number of results in our returned data
	        map.addColumn('string', 'Periodo');

	        for(var y = 0; y < 10; y++){
	        	obj = data.producaoList[y];
	        	map.addColumn('number', obj.dsSiglaProcesso);
	        }
	        
	        var dtAux = '';
	        
	        for (var i = 0; i < tam; i++) {
	        	
	        	d = data.producaoList[i];
	        	
	        	//console.log('data: ' + d.dtProcesso.toString());
	        	
	        	//if(dtAux.toString() != d.dtProcesso.toString()){
	        		
	        		map.setValue(i, i, d.dtProcesso.toString());
	        		
	        		/*var size = i == 0 ? 10 : i + 10;
	        		
	        		for(var y = i; y < size; y++){
	        			o = data.producaoList[y];
	        			console.log('linha: ' + i + ' coluna: ' + y + ' valor: ' + o.qtde);
	        			//map.setValue(i, y, o.qtde);
	        		}*/
	        	//}
	        	
	        	dtAux = d.dtProcesso;
	        }
	        
	        var options = {
	          chartArea:{width:'85%',height:'80%'},
	          backgroundColor: '#F7F7F7',
	          legend: {position: 'top'},
	          titlePosition: 'in', axisTitlesPosition: 'in',
	          hAxis: {showTextEvery: '1', textPosition: 'out'}, 
	          vAxis: {textPosition: 'out'}
	        };
	
	        var chart = new google.visualization.LineChart(document.getElementById('graf3'));
	
	        chart.draw(map, options);

		}); 
	
}

function graficoAtendimentoPropostaVenda() {

	  var postData = $(this).serializeArray();
	  
	  var vendedor = $('#vendedor').val();
	  var dt1 = $('#dataInicial').val();
      var dt2 = $('#dataFinal').val();
	  
	  var formURL = $("#ctx").attr("value") + "/consultarAtendimentoPropostaVenda?dataInicial=" + dt1 + "&dataFinal=" + dt2 + "&idVendedor=" + vendedor;
		
	  $.ajax({ 
			url: formURL, 
			type: 'POST', 
			data: postData,
			dataType: 'JSON',
		}).done(function(data, textStatus, jqXHR) {
			
			var tam = data.listAtendPropVenda.length;
								
	        var map = new google.visualization.DataTable();
	        map.addRows(tam);  // length gives us the number of results in our returned data
	        map.addColumn('string', 'Periodo');
	        map.addColumn('number', 'Atendimento');
	        map.addColumn('number', 'Proposta');
	        map.addColumn('number', 'Venda');
	        
	        for (var i = 0; i < tam; i++) {
	        	d = data.listAtendPropVenda[i];
	        	map.setValue(i, 0, d.labelPeriodo);
	        	map.setValue(i, 1, d.qtdeAtendimento);
	        	map.setValue(i, 2, d.qtdeProposta);
	        	map.setValue(i, 3, d.qtdeVenda);
	        }
	        
	        var options = {
	          colors: ['#ffb848', '#27a9e4', '#28b779'],
	          chartArea:{width:'85%',height:'80%'},
	          backgroundColor: '#F7F7F7',
	          legend: {position: 'top'},
	          titlePosition: 'in', axisTitlesPosition: 'in',
	          hAxis: {showTextEvery: '1', textPosition: 'out'}, 
	          vAxis: {textPosition: 'out'}
	        };
	
	        var chart = new google.visualization.LineChart(document.getElementById('graf1'));
	
	        chart.draw(map, options);

		}); 
	  								
  }

function graficoVendaPorVendedor() {

	  var postData = $(this).serializeArray();
	  
	  var vendedor = $('#vendedor').val();
	  var dt1 = $('#dataInicial').val();
      var dt2 = $('#dataFinal').val();
	  
	  var formURL = $("#ctx").attr("value") + "/carregarVendasPorVendedor?dataInicial=" + dt1 + "&dataFinal=" + dt2 + "&idVendedor=" + vendedor;
		
	  $.ajax({ 
			url: formURL, 
			type: 'POST', 
			data: postData,
			dataType: 'JSON',
		}).done(function(data, textStatus, jqXHR) {
			
			var tam = data.listVendaPorVendedor.length;
								
	        var map = new google.visualization.DataTable();
	        map.addRows(tam);  // length gives us the number of results in our returned data
	        map.addColumn('string', 'Vendedor');
	        map.addColumn('number', 'Venda');
	        
	        for (var i = 0; i < tam; i++) {
	        	d = data.listVendaPorVendedor[i];
	        	map.setValue(i, 0, 'V' + i);
	        	map.setValue(i, 1, d.qtdeVenda);
	        }
	        
	        var options = {
	          colors: ['#28b779'],
	          chartArea:{width:'85%',height:'80%'},
	          backgroundColor: '#F7F7F7',
	          legend: {position: 'top'},
	          titlePosition: 'in', axisTitlesPosition: 'in',
	          hAxis: {showTextEvery: '1', textPosition: 'out'}, 
	          vAxis: {textPosition: 'out'}
	        };

	        var chart = new google.visualization.ColumnChart(document.getElementById('graf2'));

	        chart.draw(map, options);

		}); 
	  								
    }

function formatNumberString(z){  
	v = z;
	v = v.replace(/\D/g,"");  //permite digitar apenas numeros
	v = v.replace(/[0-9]{12}/,"invalido");   //limita pra maximo 999.999.999,99
	v = v.replace(/(\d{1})(\d{8})$/,"$1.$2");  //coloca ponto antes dos ultimos 8 digitos
	v = v.replace(/(\d{1})(\d{5})$/,"$1.$2");  //coloca ponto antes dos ultimos 5 digitos
	v = v.replace(/(\d{1})(\d{1,2})$/,"$1,$2");        //coloca virgula antes dos ultimos 2 digitos
	return v;
}
var Blindagem = function() {	
	
	var handleBlindagem = function() {
		
		$('#inputMotivo').change(function(e) {
			$('#motivoPausa').val($(this).val());
			$(this).prop('selectedIndex', 0);
		});
		
		$('.blindagem-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"blindagem.nmblindagem" : {
					required : true
				},
				"blindagem.nmFantasia" : {
					required : true
				},
				"blindagem.nrCnpj" : {
					required : true
				},
				"blindagem.nmContato" : {
					required : true
				},
				"blindagem.dsEmail" : {
					required : true
				},
				"blindagem.nrCep" : {
					required : true
				},
				"blindagem.dsEndereco" : {
					required : true
				},
				"blindagem.nrEndereco" : {
					required : true
				},
				"blindagem.dsBairro" : {
					required : true
				}
					
			},

			messages : {
				"blindagem.nmblindagem" : {
					required : "Nome deve ser informado"
				},
				"blindagem.nmFantasia" : {
					required : "Nome Fantasia deve ser informado"
				},
				"blindagem.nrCnpj" : {
					required : "CNPJ deve ser informado"
				},
				"blindagem.nmContato" : {
					required : "Contato deve ser informado"
				},
				"blindagem.dsEmail" : {
					required : "Email deve ser informado"
				},
				"blindagem.nrCep" : {
					required : "CEP deve ser informado"
				},
				"blindagem.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"blindagem.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"blindagem.dsBairro" : {
					required : "Bairro deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.blindagem-form')).show();
			},

			highlight : function(element) { // hightlight error inputs
				$(element).closest('.form-group').addClass('has-error'); // set
				// error
				// class
				// to
				// the
				// control
				// group
			},

			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},

			errorPlacement : function(error, element) {
				error.insertAfter(element.closest('.input-icon'));
			},

			submitHandler : function(form) {
				form.submit();
			}
		});
		
		jQuery('#tbCorte .group-checkable').change(function () {
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
		
		jQuery(".file_upload").each(function() {
			$(".file_upload").fileupload({
				dataType: 'JSON',
                disableImageResize: false,
                maxFileSize: 20000000, //20 mb
                singleFileUploads: true,
                autoUpload: true,
                maxNumberOfFiles: 1,
		        add: function (e, data) {
		            data.submit();
		            App.blockUI({boxed: true});
		        },
		        done: function (e, data) {
		        	$('#imagem_' + $(this).attr("id").substring("file_".length)).attr("src", $("#ctx").attr("value") + "/blindagem/evidencia/" + data.result.evidencia.cdBlindagemProcessoEvidencia);
		            //data.context.text('Upload finished.');
		        	$('#colunaAcao_' + $(this).attr("id").substring("file_".length)).html('<a href="#" class="nav-link exclui_evidencia" id="exclui_evidencia_' + data.result.evidencia.cdBlindagemProcessoEvidencia + '" onclick="excluirEvidencia(' + data.result.evidencia.cdBlindagemProcessoEvidencia + ',\'imagem_' + $(this).attr("id").substring("file_".length) + '\')"><i class="fa fa-trash-o"></i> Excluir</a>');
		        	App.unblockUI();
		        },
		        fail: function (e, data) {
		        	App.unblockUI();
		        }
		   });
		});
		
		$('#btSalvar').click(
				function(e) {
					if ($('.blindagem-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.blindagem-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/blindagem/salvar");
						$('.blindagem-form').submit();
					}
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".blindagem-form").validate().cancelSubmit = true;
					$('.blindagem-form').attr("action",
							$("#ctx").attr("value") + "/blindagem/voltar");
					$('.blindagem-form').submit();
					return false;
		});
		
		$('#btVoltarCliente').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".blindagem-form").validate().cancelSubmit = true;
					$('.blindagem-form').attr("action",
							$("#ctx").attr("value") + "/veiculo/meusveiculos");
					$('.blindagem-form').submit();
					return false;
		});

		$('#btVerPausa').click(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagem/consultarPausa?id=" + $("#cdBlindagem").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {

				var table = '<div class="table-scrollable"><table class="table table-striped table-bordered table-hover table-condensed">';
				var th = '<thead class="bg-red"><tr>';
				var tdHead = '<th>Processo</th><th>In\u00edcio pausa</th><th>Fim pausa</th><th>Dura\u00e7\u00e3o</th><th>Motivo</th>';
				var thFinal = '</tr></thead>';
				var tBody = '<tbody>';
				var tBodyFinal = '</tbody>';
				var tableFinal = '</table></div>';
				var _tr = '';
				var _duracao = '';
				
				for(i=0; i < data.pausaDOLista.length; i++){
					_duracao = data.pausaDOLista[i].nrDiaDuracao + ' dia(s) ' + data.pausaDOLista[i].nrHoraDuracao + ' hora(s) ' + data.pausaDOLista[i].nrMinutoDuracao + ' minuto(s) ' + data.pausaDOLista[i].nrSegundoDuracao + ' segundo(s)';
					
					var dataInicio = new Date(data.pausaDOLista[i].dtPausa);
					var month1 = dataInicio.getMonth() + 1;
					var day1 = dataInicio.getDate();
					var year1 = dataInicio.getFullYear();
					var hour1 = dataInicio.getHours();
					var min1 = dataInicio.getMinutes();
					var sec1 = dataInicio.getSeconds();
					var dtFormat1 = (day1<10?'0':'') + day1 + '/' + (month1<10?'0':'') + month1 + '/' + year1;
					var hrMinSegFormat1 = (hour1<10?'0':'') + hour1 + ':' + (min1<10?'0':'') + min1 + ':' + (sec1<10?'0':'') + sec1;
					var _motivo = data.pausaDOLista[i].dsMotivoPausa == undefined || data.pausaDOLista[i].dsMotivoPausa == null ? '' : data.pausaDOLista[i].dsMotivoPausa;
					
					if(data.pausaDOLista[i].dtPausaFim !=null){
					
						var dataFim = new Date(data.pausaDOLista[i].dtPausaFim);
						var month2 = dataFim.getMonth() + 1;
						var day2 = dataFim.getDate();
						var year2 = dataFim.getFullYear();
						var hour2 = dataFim.getHours();
						var min2 = dataFim.getMinutes();
						var sec2 = dataFim.getSeconds();
						var dtFormat2 = (day2<10?'0':'') + day2 + '/' + (month2<10?'0':'') + month2 + '/' + year2;
						var hrMinSegFormat2 = (hour2<10?'0':'') + hour2 + ':' + (min2<10?'0':'') + min2 + ':' + (sec2<10?'0':'') + sec2;
					
					}else{
						_duracao = '';
						var dtFormat2 = '';
						var hrMinSegFormat2 = '';
					}
					
					_tr += '<tr class="odd gradeX"><td>' + data.pausaDOLista[i].nomeProcesso + '</td><td>' + dtFormat1 + ' ' + hrMinSegFormat1 + '</td><td>' + dtFormat2 + ' ' + hrMinSegFormat2 + '</td><td>' + _duracao + '</td><td>' + _motivo + '</td></tr>' ;
				}
				
				var tabelaPausas = table + th + tdHead + thFinal + tBody + _tr + tBodyFinal + tableFinal;
				
				$('#tabPausa').html(tabelaPausas);
				
				$("#portlet-config-pausa").modal("show");
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#btVerOpcionais').click(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagem/consultarOpcional?id=" + $("#numOs").attr("value");
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
		});
		
		$('#btInfCorte').click(function(e) {
			$("#portlet-config-corte").modal("show");
		});
		
		function bindVisualizar(idItem){
			$('#linkModalEvidencia_' + idItem).click(function(event) {
				
				$('#modal-evidencia-body').empty();
				$.get($("#ctx").attr("value") + "/blindagem/" + $(this).attr("id").substring("linkModalEvidencia_".length) + "/buscarEvidencias", function( data ) {
					
					for (var i = 0; i < data.evidenciaList.length; i++) {
						d = data.evidenciaList[i];
						$('#modal-evidencia-body').append('<img src="' + $("#ctx").attr("value") + '/blindagem/evidencia/' + d.cdblindagemItemEvidencia + '" ' + ' alt="Evidencia">');
						$('#modal-evidencia-body').css({width:'auto',
	                        height:'auto', 
	                       'max-height':'100%'});
					}
					
					if(data.evidenciaList.length == 0){
						alert("Nenhuma evid\u00eancia cadastrada!");
						jQuery('#modalEvidencia').dialog('close');
					}
					
					jQuery.colorbox.init();
					  
				}, "json");
			});	
		}
		
		$('.modal-evidencia').click(function(event) {
			
			$('#modal-evidencia-body').empty();
			$.get($("#ctx").attr("value") + "/blindagem/" + $(this).attr("id").substring("linkModalEvidencia_".length) + "/buscarEvidencias", function( data ) {
				
				for (var i = 0; i < data.evidenciaList.length; i++) {
					d = data.evidenciaList[i];
					$('#modal-evidencia-body').append('<img src="' + $("#ctx").attr("value") + '/blindagem/evidencia/' + d.cdblindagemItemEvidencia + '" ' + ' alt="Evidencia">');
					$('#modal-evidencia-body').css({width:'auto',
                        height:'auto', 
                       'max-height':'100%'});
				}
				  
			}, "json");
		});
		
		$(".group1").colorbox({rel:'group1', photo:true});
		
		jQuery('#tbVidro .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).attr('value', 1);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).attr('value', 0);
                    $(this).parents('tr').removeClass("active");
                }                    
            });
            jQuery.uniform.update(set);
        });
		
		$("#btIniciarProcesso").on('click', function(e){
			App.blockUI({boxed: true});
			$(".blindagem-form").validate().cancelSubmit = true;
			$('.blindagem-form').attr("action",
					$("#ctx").attr("value") + "/blindagem/iniciarProcesso");
			$('.blindagem-form').submit();
			App.unblockUI();
			return false;
	    });
		
		$("#btSalvarCorte").on('click', function(e){
			App.blockUI({boxed: true});
			$(".blindagem-form").validate().cancelSubmit = true;
			$('.blindagem-form').attr("action",
					$("#ctx").attr("value") + "/blindagem/salvarCorte");
			$('.blindagem-form').submit();
			App.unblockUI();
			$("#portlet-config-corte").modal("hide");
			return false;
	    });
		
		$("#btFinalizarProcesso").on('click', function(e){

			App.blockUI({boxed: true});
			var idProcessoBlindagem = $("#codigoProcessoBlindagem").val();
			var idProcesso = $("#codigoProcesso").val();
			var idFuncionario = $('#inputFunc').val();
			var dsObservacao = $('#observacao').val();
			var idBlindagem = $("#cdBlindagem").val();
			
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/blindagem/finalizarProcesso?cdBlindagemProcesso=" + idProcessoBlindagem + '&idFuncionario=' + idFuncionario + '&dsObservacao=' + dsObservacao + "&cdBlindagem=" + idBlindagem;
			
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {

				var dt = data.processoBlindagem.dtBlindagemProcessoFim;
				
				var dataFim = new Date(dt);
				var month = dataFim.getMonth() + 1;
				var day = dataFim.getDate();
				var year = dataFim.getFullYear();
				var hour = dataFim.getHours();
				var min = dataFim.getMinutes();
				var dtFormat = (day<10?'0':'')+ day + '/' +(month<10?'0':'')+ month + '/' + year;
				var hrMinFormat = (hour<10?'0':'')+ hour + ':' + (min<10?'0':'') + min;
				
				$('#li_' + idProcessoBlindagem).attr('class','timeline-grey');
				$('#div_icon_'  + idProcessoBlindagem).html('<i class="fa fa-check"></i>');
				
				// exibe link não conformidade caso exista
				if(data.processoBlindagem.dsObservacao!='' && data.processoBlindagem.dsObservacao!=null && data.processoBlindagem.dsObservacao!=undefined){				
					var link = '<a href="#portlet-config-nc" onclick="exibeNaoConformidade(\'' + data.processoBlindagem.dsObservacao + '\')" class="btn red btn-sm"  data-toggle="modal"><i class="fa fa-file"></i> N\u00e3o conformidade </a>';
					$('#div_nc_'  + idProcessoBlindagem).html(link);
				}
				
				var _dia = data.processoBlindagem.nrDiaDuracao;
				var _hora = data.processoBlindagem.nrHoraDuracao;
				var _minuto = data.processoBlindagem.nrMinutoDuracao;
				var _segundo = data.processoBlindagem.nrSegundoDuracao;
				
				// informa data termino do processo e responsável
				var strDataFimProcesso = 'Data fim processo: ' + dtFormat + ' ' + hrMinFormat + '&nbsp;&nbsp;&nbsp;';										
				var strResponsavel = 'Respons\u00e1vel: ' + data.processoBlindagem.nmFuncionario + '&nbsp;&nbsp;&nbsp;';	
				var strDuracao = 'Dura\u00e7\u00e3o: '+ _dia +' Dias, '+ _hora +' Horas, '+ _minuto +' Minutos, '+ _segundo +' Segundos';
				$('#div_auditoria_' + idProcessoBlindagem).html(strDataFimProcesso + strResponsavel + strDuracao);

				// calcula qts etapas estão em andamento
				if($('#qtdeAndamento').val() >= 1){
					$('#qtdeAndamento').val(parseInt($('#qtdeAndamento').val()) - 1);
				}else{
					$('#qtdeAndamento').val(0);
				}
				
				// mostra todos links iniciar que estiverem ocultos
				$('.inputNew').each(
						function(e){
							var _id = $(this).attr('id');
							var _cdProcesso = $('#_proc' +  _id.replace('_','') ).attr('value');
							var linkIniciar = '<button type="button" class="btn default" onclick="iniciarProcesso('+ _id.replace('_','') +', '+ _cdProcesso +');App.blockUI({boxed: true});"><i class="fa fa-play"></i> Iniciar</button>';
							if($('#li_' + _id.replace('_','')).attr('class') != 'timeline-blue' && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-yellow' && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-green' ){
								if($('#qtdeAndamento').val()==0){
									$('#div_footer' + _id).html(linkIniciar);
								}
							}
						});
				
				// oculta link finalizar da etapa atual
				$('#div_footer_' + idProcessoBlindagem).html('');
				
				// oculta link anexar e excluir da etapa atual
				$('#linha_' + idProcessoBlindagem).hide();
				
				//atualiza cor da etapa para verde
				$('#li_' + idProcessoBlindagem).attr('class','timeline-green');

				App.unblockUI();
				
				
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
			
			$("#portlet-config").modal("hide");
			
	    });
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleBlindagem();
		}
	};

}();


function enviarEvidencia(idArquivo){
    $("#file_" + idArquivo + ":hidden").trigger('click');
};

function excluirEvidencia(idEvidencia, idImagem){
	App.blockUI({boxed: true});
	$.ajax({
	    url: $("#ctx").attr("value") + "/blindagem/" + idEvidencia + "/excluirEvidencia",
	    type: 'DELETE',
	    success: function(data, textStatus, jqXHR) {
	    	$('#' + idImagem).attr("src", $("#ctx").attr("value") + "/assets/img/blog/2.jpg");
	    	var identificador = idImagem.substring("imagem_".length);
	    	var idProcesso = identificador.substring(0, identificador.indexOf('_'));
	    	$('#colunaAcao_' + identificador).html('<a href="#" class="nav-link" id="upload_link_' + identificador + '" onclick="enviarEvidencia(\'' + identificador + '\');"> <i class="m-icon-swapright m-icon-white"></i> Anexar</a><input style="display: none" type="file" id="file_' + identificador + '" class="file_upload" data-url="' + idProcesso + '/enviarEvidencia" name="imagem">'); 
	    	bindFileUpload(idImagem.substring("imagem_".length));
	    	
	    	App.unblockUI();
	    	
	    	alert("Evid\u00eancia exclu\u00edda com sucesso!");
	    }
	});
};

function bindFileUpload(idItem) {
	
	$("#file_" + idItem).fileupload({
		disableImageResize: false,
		maxFileSize: 20000000, //20 mb
        singleFileUploads: true,
        autoUpload: true,
        maxNumberOfFiles: 1,
        add: function (e, data) {
            data.submit();
            App.blockUI({boxed: true});
        },
        done: function (e, data) {
        	$('#imagem_' + $(this).attr("id").substring("file_".length)).attr("src", $("#ctx").attr("value") + "/blindagem/evidencia/" + data.result.evidencia.cdBlindagemProcessoEvidencia);
        	$('#colunaAcao_' + $(this).attr("id").substring("file_".length)).html('<a href="#" class="nav-link exclui_evidencia" id="exclui_evidencia_' + data.result.evidencia.cdBlindagemProcessoEvidencia + '" onclick="excluirEvidencia(' + data.result.evidencia.cdBlindagemProcessoEvidencia + ',\'imagem_' + $(this).attr("id").substring("file_".length) + '\')"><i class="fa fa-trash-o"></i> Excluir</a>');
        	App.unblockUI();
        },
        fail: function (e, data) {
        	App.unblockUI();
        }
	});
	
};

function iniciarProcesso(idProcessoBlindagem, idProcesso) {
	
	App.blockUI({boxed: true});
	$("#codigoProcessoBlindagem").attr("value", idProcessoBlindagem);
	
	var postData = $(this).serializeArray();
	var formURL = $("#ctx").attr("value") + "/blindagem/iniciarProcesso?cdBlindagemProcesso=" + $("#codigoProcessoBlindagem").val();
	
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {

		var dt = data.processoBlindagem.dtBlindagemProcesso;
		
		var data = new Date(dt);
		var month = data.getMonth() + 1;
		var day = data.getDate();
		var year = data.getFullYear();
		var hour = data.getHours();
		var min = data.getMinutes();
		var dtFormat = (day<10?'0':'')+ day + '/' +(month<10?'0':'')+ month + '/' + year;
		var hrMinFormat = (hour<10?'0':'')+ hour + ':' + (min<10?'0':'') + min;
		
		$('#li_' + idProcessoBlindagem).attr('class','timeline-blue');
		$('#span_date_' + idProcessoBlindagem).html(dtFormat);
		$('#span_time_' + idProcessoBlindagem).html(hrMinFormat);
		$('#div_icon_'  + idProcessoBlindagem).html('<i class="fa fa-edit"></i>');
				
			var link = '<button type="button" id="btFinalizar_' + idProcessoBlindagem + '" class="btn default" onclick="finalizarProcesso('+ idProcessoBlindagem + ',' + idProcesso + ');"><i class="fa fa-check"></i> Finalizar</button>&nbsp;';
		        link += '<button type="button" id="btPausar_' + idProcessoBlindagem + '" class="btn default" onclick="registrarPausa('+ idProcessoBlindagem + ',' + idProcesso + ');"><i class="fa fa-pause"></i> Pausar rel\u00f3gio</button>';
		
		$('#div_footer_'  + idProcessoBlindagem).html(link);
		
		// adiciona 1 na qtde em andamento
		$('#qtdeAndamento').val(parseInt($('#qtdeAndamento').val()) + 1);
		
		// oculta todos links iniciar que estiverem aparecendo
		$('.timeline-footer').each(
				function(e){
					if($(this).attr('id') != $('#div_footer_' + idProcessoBlindagem).attr('id')){
						var _id = $(this).attr('id').replace('div_footer_','');
						if($('#dtProcesso_' + _id).val()==null || $('#dtProcesso_' + _id).val()==''){
							if($('#li_' + _id.replace('_','')).attr('class') != 'timeline-blue'  && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-yellow'){
								$(this).html('<input type="hidden" id="_'+ _id +'" class="inputNew">');
							}
						}
					}
				});
		
		// exibe links Anexar fotos
		$('#linha_' + idProcessoBlindagem).show();
		
		// exibe % concluido
		var combobox = '';
		combobox +=	'Conclu\u00eddo';
		combobox +=	'<select class="form-control" id="pctConcluido" name="processoBlindagem.vrPctConcluido" onchange="atualizarPctConcluido(this, '+ idProcessoBlindagem +');">';
		combobox +=	'<option value="0" selected>0 %</option>';
		combobox +=	'<option value="25">25 %</option>';
		combobox +=	'<option value="50">50 %</option>';
		combobox +=	'<option value="75">75 %</option>';
		combobox +=	'</select>';
				 	
		$('#div_pct_concluido_'  + idProcessoBlindagem).html(combobox);
		
		if(idProcesso == 6){ //Vidro
			var botao = '';
			botao +='<button type="button" class="btn default" onclick="registrarVidrosInstalados('+ idProcessoBlindagem +');">';
			botao +='	<i class="fa fa-file-text"></i> Vidro';
			botao +='</button>';
			$('#div_inf_vidro_'  + idProcessoBlindagem).html(botao);
		}
		
		App.unblockUI();
		
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};

function pausarProcesso() {
	
	App.blockUI({boxed: true});
	
	$("#portlet-config-registra-pausa").modal("hide");
	
	var idProcessoBlindagem = $("#codigoProcessoBlindagem").val();
	var idProcesso = $("#codigoProcesso").val();
	var motivo = $("#motivoPausa").val();
	
	var postData = $(this).serializeArray();
	var formURL = $("#ctx").attr("value") + "/blindagem/iniciarPausa?cdBlindagemProcesso=" + idProcessoBlindagem + "&dsMotivoPausa=" + motivo;
	
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {

		var link = '<button type="button" id="btStart_' + idProcessoBlindagem + '" class="btn default" onclick="startarProcesso('+ idProcessoBlindagem + ',' + idProcesso + ');"><i class="fa fa-play"></i> Startar rel\u00f3gio</button>';
		
		$('#div_footer_'  + idProcessoBlindagem).html(link);
		
		// Mostra todos links iniciar que estiverem ocultos
		$('.inputNew').each(
				function(e){
					var _id = $(this).attr('id');
					var linkIniciar = '<button type="button" class="btn default" onclick="iniciarProcesso('+ _id.replace('_','') +', '+ idProcesso +');App.blockUI({boxed: true});"><i class="fa fa-play"></i> Iniciar</button>';
					if($('#li_' + _id.replace('_','')).attr('class') != 'timeline-blue' && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-yellow' && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-green'){
						$('#div_footer' + _id).html(linkIniciar);
					}
				});
		
		$('#li_' + idProcessoBlindagem).attr('class','timeline-yellow');
		
		$('#qtdePausa').val(parseInt($('#qtdePausa').val()) + 1);
		
		// calcula qts etapas estão em andamento
		if($('#qtdeAndamento').val() >= 1){
			$('#qtdeAndamento').val(parseInt($('#qtdeAndamento').val()) - 1);
		}else{
			$('#qtdeAndamento').val(0);
		}
		
		$('#div_pct_concluido_'  + idProcessoBlindagem).hide();
		$('#div_inf_vidro_'  + idProcessoBlindagem).hide();
		
		App.unblockUI();
		
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};

function startarProcesso(idProcessoBlindagem, idProcesso) {
	
	App.blockUI({boxed: true});
	$("#codigoProcessoBlindagem").attr("value", idProcessoBlindagem);
	
	var postData = $(this).serializeArray();
	var formURL = $("#ctx").attr("value") + "/blindagem/finalizarPausa?cdBlindagemProcesso=" + $("#codigoProcessoBlindagem").val();
	
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {

		var link = '<button type="button" id="btFinalizar_' + idProcessoBlindagem + '" class="btn default" onclick="finalizarProcesso('+ idProcessoBlindagem + ',' + idProcesso + ');"><i class="fa fa-check"></i> Finalizar</button>&nbsp;';
        link += '<button type="button" id="btPausar_' + idProcessoBlindagem + '" class="btn default" onclick="registrarPausa('+ idProcessoBlindagem + ',' + idProcesso + ');"><i class="fa fa-pause"></i> Pausar rel\u00f3gio</button>';
		
		if($('#qtdePausa').val() >= 1){
			$('#qtdePausa').val($('#qtdePausa').val() - 1);
		}else{
			$('#qtdePausa').val(0);
		}
        
		// oculta todos links iniciar que estiverem aparecendo
		$('.timeline-footer').each(
				function(e){
					if($(this).attr('id') != $('#div_footer_' + idProcessoBlindagem).attr('id')){
						var _id = $(this).attr('id').replace('div_footer_','');
						if($('#dtProcesso_' + _id).val()==null || $('#dtProcesso_' + _id).val()==''){
							if($('#li_' + _id.replace('_','')).attr('class') != 'timeline-blue' && $('#li_' + _id.replace('_','')).attr('class') != 'timeline-yellow'){
								$(this).html('<input type="hidden" id="_'+ _id +'" class="inputNew">');
							}
						}
					}
				});
		
		$('#div_footer_'  + idProcessoBlindagem).html(link);
		
		// soma 1 na qtde em andamento
		$('#qtdeAndamento').val(parseInt($('#qtdeAndamento').val()) + 1);
		
		$('#li_' + idProcessoBlindagem).attr('class','timeline-blue');
		
		// exibe % concluido
		var combobox = '';
		combobox +=	'Conclu\u00eddo';
		combobox +=	'<select class="form-control" id="pctConcluido" name="processoBlindagem.vrPctConcluido" onchange="atualizarPctConcluido(this, '+ idProcessoBlindagem +');">';
		combobox +=	'<option value="0" selected>0 %</option>';
		combobox +=	'<option value="25">25 %</option>';
		combobox +=	'<option value="50">50 %</option>';
		combobox +=	'<option value="75">75 %</option>';
		combobox +=	'</select>';
				 	
		$('#div_pct_concluido_'  + idProcessoBlindagem).html(combobox);
		$('#div_pct_concluido_'  + idProcessoBlindagem).show();
		
		if(idProcesso == 6){ //Vidro
			var botao = '';
			botao +='<button type="button" class="btn default" onclick="registrarVidrosInstalados('+ idProcessoBlindagem +');">';
			botao +='	<i class="fa fa-file-text"></i> Vidro';
			botao +='</button>';
			$('#div_inf_vidro_'  + idProcessoBlindagem).html(botao);
			$('#div_inf_vidro_'  + idProcessoBlindagem).show();
		}
		
		App.unblockUI();
		
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};

function finalizarProcesso(idProcessoBlindagem, idProcesso) {
	
	App.blockUI({boxed: true});
	$("#codigoProcessoBlindagem").attr("value", idProcessoBlindagem);
	$("#codigoProcesso").attr("value", idProcesso);
	
	var postData = $(this).serializeArray();
	var formURL = $("#ctx").attr("value") + "/blindagem/carregarFuncionarios?idProcesso=" + idProcesso;
	
	$('#inputFunc').find('option').remove().end();
	
	$.ajax({ 
		url: formURL, 
		type: 'POST', 
		data: postData,
		dataType: 'JSON',
	}).done(function(data, textStatus, jqXHR) {
		
		for (var i = 0; i < data.funcionarioList.length; i++) {
			f = data.funcionarioList[i];
			$('#inputFunc').append('<option value="' + f.cdFuncionario + '">' + f.nmFuncionario + '</option>');
		}
			
		App.unblockUI();
		
		$("#portlet-config").modal("show");
		
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};

function exibeNaoConformidade(msg){
	$('#observacaoNc').val(msg);
}

function registrarPausa(idProcessoBlindagem, idProcesso){
	$("#codigoProcessoBlindagem").attr("value", idProcessoBlindagem);
	$("#codigoProcesso").attr("value", idProcesso);
	App.blockUI({boxed: true});
	$('#motivoPausa').val('');
	$("#portlet-config-registra-pausa").modal("show");
	App.unblockUI();
}

function atualizarPctConcluido(obj, idBlindagemProcesso){
	App.blockUI({boxed: true});
	$.ajax({
	    url: $("#ctx").attr("value") + "/blindagem/atualizarPctConcluido?id=" + idBlindagemProcesso + "&pct=" + obj.value,
	    type: 'POST',
	    success: function(data, textStatus, jqXHR) {
	    	App.unblockUI();
	    }
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
}

function atualizarVidrosInstalados(){
	App.blockUI({boxed: true});
	var idBlindagemProcesso = $("#codigoProcessoBlindagem").val();
	var listaVidro = $('#fgVidroPB').is( ":checked" ) ? "&fgVidroPB=1" : "&fgVidroPB=0";
	listaVidro += $('#fgVidroVG').is( ":checked" ) ? "&fgVidroVG=1" : "&fgVidroVG=0";
	listaVidro += $('#fgVidroPD').is( ":checked" ) ? "&&fgVidroPD=1" : "&fgVidroPD=0";
	listaVidro += $('#fgVidroPE').is( ":checked" ) ? "&fgVidroPE=1" : "&fgVidroPE=0";
	listaVidro += $('#fgVidroTD').is( ":checked" ) ? "&fgVidroTD=1" : "&fgVidroTD=0";
	listaVidro += $('#fgVidroTE').is( ":checked" ) ? "&fgVidroTE=1" : "&fgVidroTE=0";
	listaVidro += $('#fgVidroFD').is( ":checked" ) ? "&fgVidroFD=1" : "&fgVidroFD=0";
	listaVidro += $('#fgVidroFE').is( ":checked" ) ? "&fgVidroFE=1" : "&fgVidroFE=0";
	listaVidro += $('#fgVidroQD').is( ":checked" ) ? "&fgVidroQD=1" : "&fgVidroQD=0";
	listaVidro += $('#fgVidroQE').is( ":checked" ) ? "&fgVidroQE=1" : "&fgVidroQE=0";
	
	$.ajax({
	    url: $("#ctx").attr("value") + "/blindagem/atualizarVidrosInstalados?id=" + idBlindagemProcesso + listaVidro,
	    type: 'POST',
	    success: function(data, textStatus, jqXHR) {
	    	$("#msgSucesso").show();
	    	App.unblockUI();
	    }
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
}

function registrarVidrosInstalados(idBlindagemProcesso){
	$("#codigoProcessoBlindagem").attr("value", idBlindagemProcesso);
	
	App.blockUI({boxed: true});
	$.ajax({
	    url: $("#ctx").attr("value") + "/blindagem/consultarVidrosInstalados?id=" + idBlindagemProcesso,
	    type: 'POST',
	    success: function(data, textStatus, jqXHR) {
	    	
	    	data = data.blindProcessoVidro;
	    	
	    	var tabela = '<div class="alert alert-success" id="msgSucesso"><button class="close" data-close="alert"></button><span>Registro salvo com sucesso.</span></div>';
	    	
	    	tabela += '<table id="tbVidro" class="table table-striped table-bordered table-hover">';
	    	tabela += '<thead class="bg-red">';
	    	tabela += '<tr>';
	    	tabela += '<th class="table-checkbox" width="20px">&nbsp;</th>';
	    	tabela += '<th>Vidro</th>';
	    	tabela += '</tr>';
	    	tabela += '</thead>';
	    	tabela += '<tbody>';
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    			
	    		if (data.fgVidroPB == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPB" name="fgVidroPB" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPB" name="fgVidroPB" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>PB - Para Brisa</td>';
	    	tabela += '</tr>';
	    	
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroVG == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroVG" name="fgVidroVG" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroVG" name="fgVidroVG" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>VG - Vigia</td>';
	    	tabela += '</tr>';
	    	
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroPD == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPD" name="fgVidroPD" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPD" name="fgVidroPD" value="1" />';
	    		}
	    			
	    	tabela += '</td>';
	    	tabela += '<td>PD - Porta Dianteira</td>';
	    	tabela += '</tr>';
	    			
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroPE == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPE" name="fgVidroPE" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroPE" name="fgVidroPE" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>PE - Porta Esquerda</td>';
	    	tabela += '</tr>';
	    			
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroTD == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroTD" name="fgVidroTD" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroTD" name="fgVidroTD" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>TD - Traseira Direita</td>';
	    	tabela += '</tr>';
	    	
	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroTE == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroTE" name="fgVidroTE" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroTE" name="fgVidroTE" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>TE - Traseira Esquerda</td>';
	    	tabela += '</tr>';

	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroFD == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroFD" name="fgVidroFD" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroFD" name="fgVidroFD" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>FD - Fixo Direito</td>';
	    	tabela += '</tr>';

	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroFE == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroFE" name="fgVidroFE" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroFE" name="fgVidroFE" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>FE - Fixo Esquerdo</td>';
	    	tabela += '</tr>';

	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroQD == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroQD" name="fgVidroQD" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroQD" name="fgVidroQD" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>QD - Quebra vento Direito</td>';
	    	tabela += '</tr>';

	    	tabela += '<tr>';
	    	tabela += '<td>';
	    	
	    		if (data.fgVidroQE == 1){
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroQE" name="fgVidroQE" value="1" checked />';
	    		}else{
	    			tabela += '<input type="checkbox" class="checkboxes" id="fgVidroQE" name="fgVidroQE" value="1" />';
	    		}
	    	
	    	tabela += '</td>';
	    	tabela += '<td>QE - Quebra vento Esquerdo</td>';
	    	tabela += '</tr>';
	    	
	    	tabela += '</tbody>';
	    	tabela += '</table>';
	    	
	    	$("#registraVidro").html(tabela);
	    	
	    	$("#msgSucesso").hide();
	    	
	    	$("#portlet-config-registra-vidro").modal("show");	    
	    	
	    	App.unblockUI();
	    }
	}).fail(function(jqXHR, textStatus, errorThrown) { 
		App.unblockUI();
	}); 
	
};
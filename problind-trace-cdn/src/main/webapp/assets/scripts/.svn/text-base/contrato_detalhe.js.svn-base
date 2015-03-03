var Proposta = function() {
	
	$("#clienteTelCom").inputmask("(99) 9999-9999");
	$("#clienteTelCel").inputmask("(99) 99999-9999");
	$("#enderecoCep").inputmask("99999-999");
	$("#veiculoPlaca").inputmask("aaa-9999");
	$("#veiculoAnoFab").inputmask("9999");
	$("#veiculoAnoMod").inputmask("9999");
	
	$('#erroCPF').hide();
	$('#erroCNPJ').hide();
	
	var handleProposta = function() {
		
		$('.propostaContrato-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"propostaContrato.atendimentoE.cdAtendimento" : {
					required : true
				},
				"propostaContrato.membroE.cdMembro" : {
					required : true
				},
				"propostaContrato.estabelecimentoE.cdEstabelecimento" : {
					required : true
				},
				"clienteDocumento" : {
					required : true
				},
				"propostaContrato.nmCliente" : {
					required : true
				},
				"propostaContrato.nrRgInscEstad" : {
					required : true
				},
				"propostaContrato.dsEmail" : {
					required : true
				},
				"propostaContrato.nmContato" : {
					required : true
				},
				"propostaContrato.nrTelCelular" : {
					required : true
				},
				"propostaContrato.nrCep" : {
					required : true
				},
				"propostaContrato.dsEndereco" : {
					required : true
				},
				"propostaContrato.nrEndereco" : {
					required : true
				},
				"propostaContrato.dsBairro" : {
					required : true
				},
				"propostaContrato.sgUf" : {
					required : true
				},
				"propostaContrato.nmCidade" : {
					required : true
				},
				"propostaContrato.modeloE.fabricanteE.cdFabricante" : {
					required : true
				},
				"propostaContrato.modeloE.cdModelo" : {
					required : true
				},
				"propostaContrato.nrChassi" : {
					required : true
				},
				"propostaContrato.corE.cdCor" : {
					required : true
				},
				"propostaContrato.nrAnoFabricacao" : {
					required : true
				},
				"propostaContrato.nrAnoModelo" : {
					required : true
				},
				"propostaContrato.nivelBlindagemE.cdNivelBlindagem" : {
					required : true
				},
				"propostaContrato.produtoE.cdProduto" : {
					required : true
				},
				"propostaContrato.opacoE.cdOpaco" : {
					required : true
				},
				"vrVidro" : {
					required : true
				},
				"vrBlindagem" : {
					required : true
				},
				"propostaContrato.nrDiaParaEntrega" : {
					required : true
				},
				"propostaContrato.formaPgtoE.cdFormaPgto" : {
					required : true
				}
					
			},

			messages : {
				"propostaContrato.atendimentoE.cdAtendimento" : {
					required : "N\u00fam. atendimento deve ser informado"
				},
				"propostaContrato.membroE.cdMembro" : {
					required : "Vendedor deve ser informado"
				},
				"propostaContrato.estabelecimentoE.cdEstabelecimento" : {
					required : "Estabelecimento deve ser informado"
				},
				"clienteDocumento" : {
					required : "CPF ou CNPJ deve ser informado"
				},
				"propostaContrato.nmCliente" : {
					required : "Nome do cliente deve ser informado"
				},
				"propostaContrato.nrRgInscEstad" : {
					required : "RG ou Insc Estadual deve ser informado"
				},
				"propostaContrato.dsEmail" : {
					required : "Email deve ser informado"
				},
				"propostaContrato.nmContato" : {
					required : "Contato deve ser informado"
				},
				"propostaContrato.nrTelCelular" : {
					required : "Telefone celular deve ser informado"
				},
				"propostaContrato.nrCep" : {
					required : "CEP deve ser informado"
				},
				"propostaContrato.dsEndereco" : {
					required : "Endere&ccedil;o deve ser informado"
				},
				"propostaContrato.nrEndereco" : {
					required : "N&uacute;mero deve ser informado"
				},
				"propostaContrato.dsBairro" : {
					required : "Bairro deve ser informado"
				},
				"propostaContrato.sgUf" : {
					required : "Estado deve ser informado"
				},
				"propostaContrato.nmCidade" : {
					required : "Cidade deve ser informada"
				},
				"propostaContrato.modeloE.fabricanteE.cdFabricante" : {
					required : "Fabricante deve ser informado"
				},
				"propostaContrato.modeloE.cdModelo" : {
					required : "Modelo deve ser informado"
				},
				"propostaContrato.nrChassi" : {
					required : "Chassi deve ser informado"
				},
				"propostaContrato.corE.cdCor" : {
					required : "Cor deve ser informada"
				},
				"propostaContrato.nrAnoFabricacao" : {
					required : "Ano de Fabrica&ccedil;\u00e3o deve ser informado"
				},
				"propostaContrato.nrAnoModelo" : {
					required : "Ano do Modelo deve ser informado"
				},
				"propostaContrato.nivelBlindagemE.cdNivelBlindagem" : {
					required : "N\u00edvel da Blindagem deve ser informado"
				},
				"propostaContrato.produtoE.cdProduto" : {
					required : "Vidro deve ser informado"
				},
				"propostaContrato.opacoE.cdOpaco" : {
					required : "Opaco deve ser informado"
				},
				"vrVidro" : {
					required : "Pre&ccedil;o do vidro deve ser informado"
				},
				"vrBlindagem" : {
					required : "Pre&ccedil;o da blindagem deve ser informado"
				},
				"propostaContrato.nrDiaParaEntrega" : {
					required : "Prazo deve ser informado"
				},
				"propostaContrato.formaPgtoE.cdFormaPgto" : {
					required : "Forma de Pagamento deve ser informada"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				try{
					$("#errorsJsDiv").show();
					var divErrors = $("#errorsJs");
					var errors = $(validator.errorList);
					
					divErrors.html("");
					$(errors).each(function(index) {
						var msg = $( this )[0].message;
						divErrors.append("<span>* " + msg + "</span><br>");
					});
				}catch(err){
					concole.log(err);
				}
				
				// alert on form
				// submit
				$('.alert-danger', $('.propostaContrato-form')).show();
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
		
		$('#blindValor').blur(function(e) {
			var valorBlindagem = $('#blindValor').val();
			$('#valorTotalBlind').val(valorBlindagem);
			$('#formaPgto').change();
		});
		
		$('#formaPgtoEnt').change(function(e) {
			$('#formaPgto').change();
		});
		
		$('#formaPgtoParc').change(function(e) {
			$('#formaPgto').change();
		});

		$('#btAssociarAgregado').click(function(e) {
			
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/propostaContrato/associarAgregado?id=" + $("#agregado").attr("value");
			
				$.ajax({ 
					url: formURL, 
					type: 'POST', 
					data: postData,
					dataType: 'JSON',
				}).done(function(data, textStatus, jqXHR) {
					
					var contador = $('#tabAgregado tbody tr').length;
					var idNumber = 0;
					var idBase = "agregado-";
					
					if(contador > 0){
						idNumber = 1 + parseInt($('#tabAgregado tbody tr:last').attr('id').substring(idBase.length));
					}
	
					var identificador = idBase + idNumber;
					
					var valor = data.agregado.vrAgregado.toFixed(2);
					
					valor = valor < 1000 ? valor.toString().replace(".",",") : valor.toString().replace(".",",");
				
					$('#tabAgregado tbody').append('<tr id="' + identificador + '"><td><input type="hidden" name="agregadoList[' + idNumber + ']" value="' + data.agregado.cdAgregado + '" \>' +  data.agregado.nmAgregado + '</td><td class="valorAgregado">R$ ' + valor + '</td><td><a href="#portlet-config-agregado" onclick="removerAgregado(\''+identificador+'\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td></tr>');
					
					$('#s2id_agregado').find('a').find('span').first().html('');
					$('#s2id_agregado').find('a').find('abbr').click();
					$('#s2id_agregado').find('a').find('abbr').remove();
						
					recalcularValor();
					
					App.unblockUI();
					
				}).fail(function(jqXHR, textStatus, errorThrown) { 
					//alert("falha");
					App.unblockUI();
				}); 
				
			});
		
		$('#fornecedorVidro').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/propostaContrato/carregarVidro?id=" + $("#fornecedorVidro").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#vidro').find('option').remove();
				$('#vidro').append('<option value=""></option>');
				
				for (var i = 0; i < data.vidroList.length; i++) {
					d = data.vidroList[i];
					$('#vidro').append('<option value="' + d.cdProduto + '">' + d.nmProduto + '</option>');
				}
				
				$('#s2id_vidro').find('a').find('span').first().html('');
				$('#s2id_vidro').find('a').find('abbr').click();
				$('#s2id_vidro').find('a').find('abbr').remove();
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#fornecedorOpaco').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/propostaContrato/carregarOpaco?id=" + $("#fornecedorOpaco").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#opaco').find('option').remove();
				$('#opaco').append('<option value=""></option>');
				
				for (var i = 0; i < data.opacoList.length; i++) {
					d = data.opacoList[i];
					$('#opaco').append('<option value="' + d.cdOpaco + '">' + d.nmOpaco + '</option>');
				}
				
				$('#s2id_opaco').find('a').find('span').first().html('');
				$('#s2id_opaco').find('a').find('abbr').click();
				$('#s2id_opaco').find('a').find('abbr').remove();
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#estabGrupo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/propostaContrato/carregarGrupoEstabelecimento?id=" + $("#estabGrupo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#estab').find('option').remove();
				$('#estab').append('<option value=""></option>');
				
				for (var i = 0; i < data.estabelecimentoList.length; i++) {
					d = data.estabelecimentoList[i];
					$('#estab').append('<option value="' + d.cdEstabelecimento + '">' + d.nmEstabelecimento + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#fabricanteVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/veiculo/carregarModeloFabricante?id=" + $("#fabricanteVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#modeloVeiculo').find('option').remove();
				$('#modeloVeiculo').append('<option value=""></option>');
				
				for (var i = 0; i < data.modeloList.length; i++) {
					d = data.modeloList[i];
					$('#modeloVeiculo').append('<option value="' + d.cdModelo + '">' + d.nmModelo + '</option>');
				}
				
				App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#clienteCpfCnpj').blur(function(e) {
			
			var cpfCnpj = $(this).val();
			
			// Verifica cpf informado é valido
			if(cpfCnpj!=null && cpfCnpj!='' && cpfCnpj.length <= 15){
				if(!validaCPF(cpfCnpj)){
					$(this).closest('.form-group').addClass('has-error');
					$('#erroCPF').closest('.form-group').addClass('has-error');
					$('#erroCPF').show();
					$(this).focus();
					return false;
				}else{
					$(this).closest('.form-group').removeClass('has-error');
					$('#erroCPF').hide();
				}
			}
			
			// Verifica cnpj informado é valido
			if(cpfCnpj!=null && cpfCnpj!='' && cpfCnpj.length > 15){
				if(!validaCNPJ(cpfCnpj)){
					$(this).closest('.form-group').addClass('has-error');
					$('#erroCNPJ').closest('.form-group').addClass('has-error');
					$('#erroCNPJ').show();
					$(this).focus();
					return false;
				}else{
					$(this).closest('.form-group').removeClass('has-error');
					$('#erroCNPJ').hide();
				}
			}
			
			var nome = $('#clienteNome').val();
			var email = $('#clienteEmail').val();
			var telCom = $('#clienteTelCom').val();
			var telCel = $('#clienteTelCel').val();
			
			if(cpfCnpj!=null && cpfCnpj!=''){
			
				App.blockUI({boxed: true});
				e.preventDefault(); 
				var postData = $(this).serializeArray();
				var formURL = $("#ctx").attr("value") + "/propostaContrato/carregarDadosCliente?doc=" + $("#clienteCpfCnpj").attr("value");
				$.ajax({ 
					url: formURL, 
					type: 'POST', 
					data: postData,
					dataType: 'JSON',
				}).done(function(data, textStatus, jqXHR) {
					
					if(data.cliente.dsSexo=='M'){
						$('#clienteMasculino').attr('checked', true);
						$('#clienteMasculino').click();
					}else{
						$('#clienteFeminino').attr('checked', true);
						$('#clienteFeminino').click();
					}
					
					if(data.cliente.loginE.nmLogin=='' || data.cliente.loginE.nmLogin==null){
						$('#clienteNome').val(nome);
					}else{
						$('#clienteNome').val(data.cliente.loginE.nmLogin);
					}
					
					$('#clienteApelido').val(data.cliente.loginE.dsApelido);
					
					if(data.cliente.loginE.dsEmail=='' || data.cliente.loginE.dsEmail==null){
						$('#clienteEmail').val(email);
					}else{
						$('#clienteEmail').val(data.cliente.loginE.dsEmail);
					}
					
					$('#clienteContato').val(data.cliente.nmContato);
					
					if(data.cliente.loginE.nrTelComercial=='' || data.cliente.loginE.nrTelComercial==null){
						$('#clienteTelCom').val(telCom);
					}else{
						$('#clienteTelCom').val(data.cliente.loginE.nrTelComercial);
					}
					
					if(data.cliente.loginE.nrTelPessoal=='' || data.cliente.loginE.nrTelPessoal==null){
						$('#clienteTelCel').val(telCel);
					}else{
						$('#clienteTelCel').val(data.cliente.loginE.nrTelPessoal);
					}
					
					$('#enderecoCep').val(data.cliente.nrCep);
					$('#endereco').val(data.cliente.dsEndereco);
					$('#numero').val(data.cliente.nrEndereco);
					$('#bairro').val(data.cliente.dsBairro);
					$('#complemento').val(data.cliente.dsComplemento);
					$('#estado').val(data.cliente.sgUf);
					$('#cidade').val(data.cliente.nmCidade);
					
					App.unblockUI();
						
				}).fail(function(jqXHR, textStatus, errorThrown) { 
					App.unblockUI();
				}); 
				
			}else{
				$(this).closest('.form-group').removeClass('has-error');
				$('#erroCNPJ').hide();
				$('#erroCPF').hide();
			}
			
		});
		
		$('#estab').change(function(e) {
			
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/propostaContrato/listarResponsavel?id=" + $("#estab").attr("value");
			
				$.ajax({ 
					url: formURL, 
					type: 'POST', 
					data: postData,
					dataType: 'JSON',
				}).done(function(data, textStatus, jqXHR) {
					
					$('#nenhumRegistroComissao').remove();
					
					var contador = $('#tabComissao tbody tr').length;
					var idNumber = 0;
					var idBase = "comissao-";
					
					$("#tabComissao > tbody").empty();
					
					var tam = data.responsavelLista.length == 0 ? 4 : data.responsavelLista.length;
					
					for(i=0; i < tam; i++){

						var identificador = idBase + i;
						var resp = data.responsavelLista.length == 0 ? '' : data.responsavelLista[i].nmResponsavel;
						var dadosBanco = data.responsavelLista.length == 0 ? '' : data.responsavelLista[i].dsBancoAgCc;
						
						var _tr = '<tr id="' + identificador + '">';
						var _td1 = '<td><input type="text" name="respList[' + i + ']" value="' + resp + '" class="form-control" placeholder="Responsável" style="width:100%;" \></td>';
						var _td2 = '<td><input type="text" name="dadosBancoList[' + i + ']" value="' + dadosBanco + '" class="form-control" placeholder="Dados Bancários" style="width:100%;" \></td>';
						var _td3 = '<td><div class="input-icon"><i class="fa fa-money"></i><input type="text" name="valorList[' + i + ']" value="" class="form-control valor" placeholder="R$" style="width:160px;" onkeyup="moeda(this)" maxlength="14" \></div></td>';
						var _td4 = '<td><a href="#portlet-config-comissao" onclick="removerComissao(\''+ identificador +'\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td>';
						var _trFim = '</tr>';
						
						var newTr = _tr + _td1 + _td2 + _td3 + _td4 + _trFim;
						
						$('#tabComissao tbody').append(newTr);
					}
					
					$('.valor').priceFormat({
					    prefix: 'R$ ',
					    centsSeparator: ',',
					    thousandsSeparator: '.'
					});
					
					App.unblockUI();
					
				}).fail(function(jqXHR, textStatus, errorThrown) { 
					App.unblockUI();
				}); 
				
			});
		
		$('#formaPgto').change(function(e) {
			
			if($(this).val()>0){
			
				App.blockUI({boxed: true});
				e.preventDefault(); 
				var postData = $(this).serializeArray();
				var formURL = $("#ctx").attr("value") + "/propostaContrato/gerarParcelaFormaPgto?data=" + $("#data").attr("value") + "&formaPgto=" + $("#formaPgto").attr("value") + "&valorBlind=" + $("#valorTotalBlind").attr("value").replace('R$ ','').toString() + "&formaEnt=" + $("#formaPgtoEnt").attr("value")  + "&formaParc=" + $("#formaPgtoParc").attr("value");
				
					$.ajax({ 
						url: formURL, 
						type: 'POST', 
						data: postData,
						dataType: 'JSON',
					}).done(function(data, textStatus, jqXHR) {
						
						// remove todas as TR existentes 
						$("#tabPgto > tbody").empty();
						
						var idNumber = 0;
						var idBase = "pgto-";
						
						var tam = data.pagamentoLista.length;
						
						for(i=0; i < tam; i++){
	
							var identificador = idBase + i;
							var dataPgto = data.pagamentoLista.length == 0 ? '' : dateFormat(data.pagamentoLista[i].dtPagamento, 'isoDateBrasil'); 
							var valorPgto = data.pagamentoLista.length == 0 ? '' : data.pagamentoLista[i].vrPagamento.toFixed(2);
							var descPgto = data.pagamentoLista.length == 0 ? '' : data.pagamentoLista[i].dsPagamento;
							
							var _td_data = '<div class="input-group input-medium date date-picker" data-date-format="dd/mm/yyyy" data-date-start-date="0d" style="width:160px !important;">';
							_td_data += '<input id="dataPgto" type="text" class="form-control dtPgto" name="dataPgtoList['+ i +']" placeholder="Data" value="'+ dataPgto +'" disabled>';
							_td_data += '<span class="input-group-btn"><button class="btn default" type="button"><i class="fa fa-calendar"></i></button></span></div>';
							
							var _tr = '<tr id="' + identificador + '">';
							var _td1 = '<td>'+ _td_data +'</td>';
							var _td2 = '<td><div class="input-icon"><i class="fa fa-money"></i><input type="text" value="'+ valorPgto +'" class="form-control valor" name="valorPgtoList['+ i +']" placeholder="R$" style="width: 160px" onkeyup="moeda(this)" maxlength="14"></div></td>';
							var _td3 = '<td><input type="text" value="'+ descPgto +'" class="form-control" name="descPgtoList['+ i +']" placeholder="Descrição" style="width: 100%;"></td>';
							var _trFim = '</tr>';
							
							var newTr = _tr + _td1 + _td2 + _td3 + _trFim;
							
							$('#tabPgto tbody').append(newTr);
						}
						
						ComponentsPickers.init();
						
						$('.valor').priceFormat({
						    prefix: 'R$ ',
						    centsSeparator: ',',
						    thousandsSeparator: '.'
						});
						
						App.unblockUI();
						
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						App.unblockUI();
					}); 
					
				}
				
			});
		
		$('#numParcela').blur(function(e) {
			
			if($(this).val()>0){
			
				App.blockUI({boxed: true});
				e.preventDefault(); 
				var postData = $(this).serializeArray();
				var formURL = $("#ctx").attr("value") + "/propostaContrato/gerarParcela?data=" + $("#data").val() + "&qtdeParc=" + $("#numParcela").val() + "&valorBlind=" + $("#valorTotalBlind").val().replace('R$ ','').toString() + "&formaEnt=" + $("#formaPgtoEnt").val()  + "&formaParc=" + $("#formaPgtoParc").val();
				
					$.ajax({ 
						url: formURL, 
						type: 'POST', 
						data: postData,
						dataType: 'JSON',
					}).done(function(data, textStatus, jqXHR) {
						
						// remove todas as TR existentes 
						$("#tabPgto > tbody").empty();
						
						var idNumber = 0;
						var idBase = "pgto-";
						
						var tam = data.pagamentoLista.length;
						
						for(i=0; i < tam; i++){
	
							var identificador = idBase + i;
							var dataPgto = data.pagamentoLista.length == 0 ? '' : dateFormat(data.pagamentoLista[i].dtPagamento, 'isoDateBrasil'); 
							var valorPgto = data.pagamentoLista.length == 0 ? '' : data.pagamentoLista[i].vrPagamento.toFixed(2);
							var descPgto = data.pagamentoLista.length == 0 ? '' : data.pagamentoLista[i].dsPagamento;
							
							var _td_data = '<div class="input-group input-medium date date-picker" data-date-format="dd/mm/yyyy" data-date-start-date="0d" style="width:160px !important;">';
							_td_data += '<input id="dataPgto" type="text" class="form-control dtPgto" name="dataPgtoList['+ i +']" placeholder="Data" value="'+ dataPgto +'" disabled>';
							_td_data += '<span class="input-group-btn"><button class="btn default" type="button"><i class="fa fa-calendar"></i></button></span></div>';
							
							var _tr = '<tr id="' + identificador + '">';
							var _td1 = '<td>'+ _td_data +'</td>';
							var _td2 = '<td><div class="input-icon"><i class="fa fa-money"></i><input type="text" value="'+ valorPgto +'" class="form-control valor" name="valorPgtoList['+ i +']" placeholder="R$" style="width: 160px" onkeyup="moeda(this)" maxlength="14"></div></td>';
							var _td3 = '<td><input type="text" value="'+ descPgto +'" class="form-control" name="descPgtoList['+ i +']" placeholder="Descrição" style="width: 100%;"></td>';
							var _trFim = '</tr>';
							
							var newTr = _tr + _td1 + _td2 + _td3 + _trFim;
							
							$('#tabPgto tbody').append(newTr);
						}
						
						ComponentsPickers.init();
						
						$('.valor').priceFormat({
						    prefix: 'R$ ',
						    centsSeparator: ',',
						    thousandsSeparator: '.'
						});
						
						App.unblockUI();
						
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						App.unblockUI();
					}); 
					
				}
			});
		
		$('#btSalvar').click(
				function(e) {
					if ($('.propostaContrato-form').validate().form()) {
						
						if($('#clientePessFis').is(":checked")){
							$('#clienteCpfCnpj').attr('name', 'propostaContrato.nrCpf');
						}else if($('#clientePessJur').is(":checked")){
							$('#clienteCpfCnpj').attr('name', 'propostaContrato.nrCnpj');
						}
						
						$('#valorTotalBlind').attr("disabled", false);
						$('#vendedor').attr("disabled", false);
						$('#s2id_vendedor').attr("class", "select2-container select2-allowclear select2-container form-control select2me");
						
						var dtPgto = $(".dtPgto");
						$.each(dtPgto, function(index, value) {
							$(this).attr("disabled", false);
						});

						App.blockUI({boxed: true});
						$('.propostaContrato-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/propostaContrato/salvar");
						$('.propostaContrato-form').submit();
					}
					return false;
				});
		
		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".propostaContrato-form").validate().cancelSubmit = true;
					$('.propostaContrato-form').attr("action",
							$("#ctx").attr("value") + "/propostaContrato/novo");
					$('.propostaContrato-form').submit();
					return false;
				});
		
		$('#btCancelar').click(
				function(e) {
					App.blockUI({boxed: true});
					
					var motivo = $('#motCancelamento').val();
					$('#motivoCancelamento').val(motivo);
					
					$(".propostaContrato-form").validate().cancelSubmit = true;
					$('.propostaContrato-form').attr("action",
							$("#ctx").attr("value") + "/propostaContrato/cancelarContrato");
					$('.propostaContrato-form').submit();
					
					$("#portlet-cancelamento").modal("hide");
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".propostaContrato-form").validate().cancelSubmit = true;
					$('.propostaContrato-form').attr("action",
							$("#ctx").attr("value") + "/propostaContrato/voltar");
					$('.propostaContrato-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.propostaContrato-form').attr("action",
							$("#ctx").attr("value") + "/propostaContrato/consulta");
					$('.propostaContrato-form').submit();
					return false;
					displayObject('tbFornec', 'false');
				});	
		
		$('#btExcluirAgregado').click(
				function(e) {
					App.blockUI({boxed: true});
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModalAgreg').click();
					
					recalcularValor();
					
					App.unblockUI();
			});
		
		$('#btExcluirComissao').click(
				function(e) {
					App.blockUI({boxed: true});
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModalComissao').click();
					App.unblockUI();
			});
		
		new dgCidadesEstados({
			  cidade: document.getElementById('cidade'),
			  estado: document.getElementById('estado'),
			  change: true
			});
		
		$('.atualiza-sexo-resumo').change(function(e) {
			if($(this).val() == 'F'){
				$('#clienteSexo-resumo').html("Feminino");
			}
			else if($(this).val() == 'M'){
				$('#clienteSexo-resumo').html("Masculino");
			}
		});
		
		$('.atualiza-tippes-resumo').change(function(e) {
			if($(this).val() == 'F'){
				$('#clienteTipo-resumo').html("Fisica");
			}
			else if($(this).val() == 'J'){
				$('#clienteTipo-resumo').html("Juridica");
			}
		});
			
		$('#clientePessFis').change(function(e) {
			if($('#clientePessFis').is(":checked")){
				$("#clienteCpfCnpj").attr("value", "");
				$("#clienteCpfCnpj").inputmask("999.999.999-99");
			}
		});
		
		$('#clientePessJur').change(function(e) {
			if($('#clientePessJur').is(":checked")){
				$("#clienteCpfCnpj").attr("value", "");
				$("#clienteCpfCnpj").inputmask("99.999.999/9999-99");
			}
		});
		
		$('#btImprimir').click(
				function(e) {
					App.blockUI({boxed: true});
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_comissao_detalhado&NUM_OS=" + $("#numOs").attr("value") + "&URL_IMG=" + urlImg;
					$('.propostaContrato-form').attr("action", url);
					$('.propostaContrato-form').submit();
					App.unblockUI();
				});
		
		if($('#clientePessFis').is(":checked")){
			$("#clienteCpfCnpj").inputmask("999.999.999-99");
		}else if($('#clientePessJur').is(":checked")){
			$("#clienteCpfCnpj").inputmask("99.999.999/9999-99");
		}
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleProposta();
		}
	};

}();

function removerAgregado(idColuna){	
	//$("#" + idColuna).remove();
	$("#colunaSelecionada").val(idColuna);
};

function removerComissao(idColuna){	
	//$("#" + idColuna).remove();
	$("#colunaSelecionada").val(idColuna);
};

function removerTabelaComissao(obj){
	if(obj.value==0){
		$("#divComissao").hide();
	}else{
		$("#divComissao").show();
	}
	$("#estab").change();
};

function recalcularValor(){
	var total = 0.0;
	$('#tabAgregado tbody tr td:nth-child(2)').each(
		 function () {
			var valor = $(this).html().replace('R$ ','');
		 	total = parseFloat(valor.replace(".", "").replace(",", ".")) + total;
	});
	
	$('.valorTotal').html('R$ ' +  total.toFixed(2).replace(".", ","));
	
};


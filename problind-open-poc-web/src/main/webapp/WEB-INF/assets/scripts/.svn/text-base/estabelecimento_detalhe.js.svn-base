var Estabelecimento = function() {

	$("#cep").inputmask("99999-999");
	
	var handleEstabelecimento = function() {
		
		$('.estabelecimento-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"eestabelecimento.nmEstabelecimento" : {
					required : true
				},
				"estabelecimento.nrCep" : {
					required : true
				},
				"estabelecimento.dsEndereco" : {
					required : true
				},
				"estabelecimento.nrEndereco" : {
					required : true
				},
				"estabelecimento.dsBairro" : {
					required : true
				},
				"estabelecimento.sgUf" : {
					required : true
				},
				"estabelecimento.nmCidade" : {
					required : true
				}
					
			},

			messages : {
				"estabelecimento.nmEstabelecimento" : {
					required : "Nome deve ser informado"
				},
				"estabelecimento.nrCep" : {
					required : "CEP deve ser informado"
				},
				"estabelecimento.dsEndereco" : {
					required : "Endereço deve ser informado"
				},
				"estabelecimento.nrEndereco" : {
					required : "Número deve ser informado"
				},
				"estabelecimento.dsBairro" : {
					required : "Bairro deve ser informado"
				},
				"estabelecimento.sgUf" : {
					required : "Estado deve ser selecionado"
				},
				"estabelecimento.nmCidade" : {
					required : "Cidade deve ser selecionada"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.estabelecimento-form')).show();
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

		$('#responsavel-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"nomeResponsavel" : {
					required : true
				},
				"emailResponsavel" : {
					required : true
				},
				"vrPctComissao" : {
					required : true
				}					
			},

			messages : {
				"nomeResponsavel" : {
					required : "Nome deve ser informado"
				},
				"emailResponsavel" : {
					required : "Email deve ser informado"
				},
				"dsBancoAgCc" : {
					required : "Banco A/G e C/C deve ser informada"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.estabelecimento-form')).show();
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
		
		$('#btAssociarVendedor').click(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/estabelecimento/associarVendedor?id=" + $("#vendedorEstabelecimento").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				var contador = $('#tabVend tbody tr').length;
				var idNumber = 0;
				var idBase = "vend-";
				
				if(contador > 0){
					idNumber = 1 + parseInt($('#tabVend tbody tr:last').attr('id').substring(idBase.length));
				}

				var identificador = idBase + idNumber;
				$('#tabVend tbody').append('<tr id="' + identificador + '"><td><input type="hidden" name="estabelecimento.estabelecimentoMembroEs['+idNumber+'].membroE.cdMembro" value="' + data.list[0] + '">' +  data.list[1] + '</td><td><a href="#portlet-config-vendedor" onclick="removerVendedor(\''+identificador+'\',\'' + data.list[0] + '\',\'' + data.list[1] + '\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td></tr>');
				
				$("#vendedorEstabelecimento option[value='" + $("#vendedorEstabelecimento").attr("value") + "']").remove();
				
				$('#vendedorEstabelecimento option[selected="selected"]').each(
				    function() {
				        $(this).removeAttr('selected');
				    }
				);

				$("#vendedorEstabelecimento option:first").attr('selected','selected');
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#btAssociarResponsavel').click(function(e) {

			if ($('#responsavel-form').validate().form()) {
				App.blockUI({boxed: true});
				var contador = $('#tabResp tbody tr').length;
				var idNumber = 0;
				var idBase = "resp-";
				
				if($("#vrPctComissao").attr("value") > 100){
					$("#vrPctComissao").closest('.form-group').addClass('has-error');
					return false;
				}
				
				if(contador > 0){
					idNumber = 1 + parseInt($('#tabResp tbody tr:last').attr('id').substring(idBase.length));
				}
				
				var identificador = idBase + idNumber;
				var newTr = '';
				newTr += '<tr id="' + identificador + '">';
				newTr += '<td><input type="hidden" name="estabelecimento.responsavelEs[' + idNumber + '].cdResponsavel" value=""><input type="hidden" name="estabelecimento.responsavelEs[' + idNumber + '].nmResponsavel" value="' + $("#nomeResponsavel").attr("value") + '">' + $("#nomeResponsavel").attr("value") + '</td>';
				newTr += '<td><input type="hidden" name="estabelecimento.responsavelEs[' + idNumber + '].dsEmail" value="' + $("#emailResponsavel").attr("value") + '">' +  $("#emailResponsavel").attr("value") + '</td>';
				newTr += '<td><input type="hidden" name="estabelecimento.responsavelEs[' + idNumber + '].dsCargo" value="' + $("#cargoResponsavel").attr("value") + '" \>' +  $("#cargoResponsavel").attr("value") + '</td>';
				newTr += '<td><input type="hidden" name="estabelecimento.responsavelEs[' + idNumber + '].dsBancoAgCc" value="' + $("#dsBancoAgCc").attr("value") + '" \>' +  $("#dsBancoAgCc").attr("value") + '</td>';
				newTr += '<td><a href="#portlet-config-responsavel" onclick="removerResponsavel(\''+identificador+'\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td>';
				newTr += '</tr>';
				
				$('#tabResp tbody').append(newTr);
			
				$('#emailResponsavel').attr("value","");
				$('#nomeResponsavel').attr("value","");
				$('#dsBancoAgCc').attr("value","");
				
				$('#cargoResponsavel option[selected="selected"]').each(
				    function() {
				        $(this).removeAttr('selected');
				    }
				);

				$("#cargoResponsavel option:first").attr('selected','selected');
					
				App.unblockUI();
			}
			return false;
		});

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".estabelecimento-form").validate().cancelSubmit = true;
					$('.estabelecimento-form').attr("action",
							$("#ctx").attr("value") + "/estabelecimento/novo");
					$('.estabelecimento-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.estabelecimento-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.estabelecimento-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/estabelecimento/salvar");
						var form1 = $('#vendedor-form'), 
							form2 = $('#responsavel-form');
					      	form3 = $('#estabelecimento-form'); 
						form2form(form1, form3);
						form2form(form2, form3);
						$('.estabelecimento-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".estabelecimento-form").validate().cancelSubmit = true;
					$('.estabelecimento-form').attr("action",
							$("#ctx").attr("value") + "/estabelecimento/excluir");
					$('.estabelecimento-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".estabelecimento-form").validate().cancelSubmit = true;
					$('.estabelecimento-form').attr("action",
							$("#ctx").attr("value") + "/estabelecimento/voltar");
					$('.estabelecimento-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.estabelecimento-form').attr("action",
							$("#ctx").attr("value") + "/estabelecimento/consulta");
					$('.estabelecimento-form').submit();
					return false;
					displayObject('tbFornec', 'false');
				});
		
		
		$('#btExcluirVendedor').click(
			function(e) {
				App.blockUI({boxed: true});
					
				$("#vendedorEstabelecimento").append("<option value='" + $("#cdVendSel").val() + "'>" + $("#nmVendSel").val() + "</option>");
				$("#" + $("#colunaSelecionada").val()).remove();
				$('#btFechaModalVend').click();
				App.unblockUI();
		});
		
		$('#btExcluirResp').click(
			function(e) {
				App.blockUI({boxed: true});
				$("#" + $("#colunaSelecionada").val()).remove();
				$('#btFechaModalResp').click();
				App.unblockUI();
		});
		
		new dgCidadesEstados({
			  cidade: document.getElementById('cidade'),
			  estado: document.getElementById('estado'),
			  change: true
			});
	};

	return {
		// main function to initiate the module
		init : function() {
			handleEstabelecimento();
		}
	};

}();
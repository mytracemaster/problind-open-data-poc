var PedidoVidro = function() {

	var handlePedidoVidro = function() {
		
		if($('#cdPedidoVidro').val() != null && $('#cdPedidoVidro').val() > 0 ){
			$('#inputCliente').attr("disabled", true);
			$('#inputVeiculo').attr("disabled", true);
		}
		
		$('#inputCliente').change(function(e) {
			
			$('#s2id_inputVeiculo').find('a').find('span').first().html('');
			$('#s2id_inputVeiculo').find('a').find('abbr').remove();
			
			$('#observacao').val('');
			$('#vendedor').val('');
			
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/pedidoVidro/carregarVeiculosCliente?id=" + $("#inputCliente").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
								
				$('#inputVeiculo').find('option').remove();
				$('#inputVeiculo').append('<option value=""></option>');
				
				for (var i = 0; i < data.veiculoList.length; i++) {
					d = data.veiculoList[i];
					$('#inputVeiculo').append('<option value="' + d.cdVeiculo + '">[' + d.nrChassi + '] - ' + d.modeloE.nmModelo + '</option>');
				}
				
				App.unblockUI();
				
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		$('#inputVeiculo').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/pedidoVidro/carregarDadosVeiculo?id=" + $("#inputVeiculo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
					d = data.veiculoE;
					
					var str = '';
					str += 'Núm. OS: ' + d.numOS + '\n';
					str += 'Nível blindagem: ' + d.nivelBlindagem + '\n';
					str += 'CHASSI: ' + d.nrChassi + '\n';
					str += 'Modelo: ' + d.nmModelo + '\n';
					str += 'Fabricante: ' + d.nmFabricante + '\n';
					str += 'Ano Fabricação: ' + d.nrAnoFabricacao + '\n';
					str += 'Ano Modelo: ' + d.nrAnoModelo + '\n';
					str += 'Vidro: ' + d.nmProduto + '\n';
					str += 'Obs: ' + d.dsObservacao + '\n';
					
					$('#observacao').val(str);
					$('#vendedor').val(d.nmVendedor);
					
					App.unblockUI();
					
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				App.unblockUI();
			}); 
		});
		
		
		$('.pedido-vidro-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"pedidoVidro.dtPedido" : {
					required : true
				},
				"pedidoVidro.dtPrevisaoChegada" : {
					required : true
				},
				"pedidoVidro.nrPedidoFornecedor" : {
					required : true
				},
				"valorPedido" : {
					required : true
				},
				"pedidoVidro.veiculoE.cdVeiculo" : {
					required : true
				} 
					
			},

			messages : {
				"pedidoVidro.dtPedido" : {
					required : "Data pedido deve ser informada"
				},
				"pedidoVidro.dtPrevisaoChegada" : {
					required : "Data previsão chegada deve ser informada"
				},
				"pedidoVidro.nrPedidoFornecedor" : {
					required : "Núm. pedido fornecedor deve ser informado"
				},
				"valorPedido" : {
					required : "Valor do pedido deve ser informado"
				},
				"pedidoVidro.veiculoE.cdVeiculo" : {
					required : "Veículo deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.funcionario-form')).show();
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

		$('#btNovo').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".pedido-vidro-form").validate().cancelSubmit = true;
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/novo");
					$('.pedido-vidro-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.pedido-vidro-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.pedido-vidro-form')
								.attr("action",
										$("#ctx").attr("value")
												+ "/pedidoVidro/salvar");
						
						$('#inputCliente').attr("disabled", false);
						$('#inputVeiculo').attr("disabled", false);
						
						$('.pedido-vidro-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".pedido-vidro-form").validate().cancelSubmit = true;
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/excluir");
					$('.pedido-vidro-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".pedido-vidro-form").validate().cancelSubmit = true;
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/voltar");
					$('.pedido-vidro-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.pedido-vidro-form').attr("action",
							$("#ctx").attr("value") + "/pedidoVidro/consulta");
					$('.pedido-vidro-form').submit();
					return false;
				});
		
		$('#btImprimir').click(
				function(e) {
					App.blockUI({boxed: true});
					var urlImg = 'https://' + $('#server').val().toString() + ':' + $('#port').val().toString()  + '/' + $('#ctx').val().toString() + '/assets/img/problind.png';
					var url = $("#ctx").attr("value") + "/report?RPT_NAME=rpt_pedido_vidro&CD_PEDIDO_VIDRO=" + $('#cdPedidoVidro').val() + '&URL_IMG=' + urlImg;
					$('.pedido-vidro-form').attr("action", url);
					$('.pedido-vidro-form').submit();
					App.unblockUI();
				});
		
		$('.checkboxes').click(
				function(e){
					if($(this).attr('checked')){
						$(this).attr('value', 1);
					}else{
						$(this).attr('value', 0);
					}
				}
		);
		
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
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handlePedidoVidro();
		}
	};

}();

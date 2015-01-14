var Kit = function() {

	var handleKit = function() {
		
		$('#fornecedorKit').change(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/kit/carregarProdutos?id=" + $("#fornecedorKit").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#produtoKit').find('option').remove();
				$('#produtoKit').append('<option value="0">Selecione um produto</option>');
				
				for (var i = 0; i < data.produtoList.length; i++) {
					d = data.produtoList[i];
					$('#produtoKit').append('<option value="' + d.cdProduto + '">' + d.nmProduto + '</option>');
				}
					
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('#btAssociar').click(function(e) {
			
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/kit/associar?id=" + $("#produtoKit").attr("value");
			
				$.ajax({ 
					url: formURL, 
					type: 'POST', 
					data: postData,
					dataType: 'JSON',
				}).done(function(data, textStatus, jqXHR) {
					
					var contador = $('#tabProd tbody tr').length;
					var idNumber = 0;
					var idBase = "prod-";
					
					if(contador > 0){
						idNumber = 1 + parseInt($('#tabProd tbody tr:last').attr('id').substring(idBase.length));
					}
	
					var identificador = idBase + idNumber;
					
					$('#tabProd tbody').append('<tr id="' + identificador + '"><td><input type="hidden" name="produtoList[' + idNumber + ']" value="' + data.produto.cdProduto + '" \>' +  data.produto.nmProduto + '</td><td class="valorProduto">R$ ' + data.produto.vrProduto + '</td><td><a href="#portlet-config-produto" onclick="removerProduto(\''+identificador+'\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td></tr>');
					
					recalcularValor();
					
					$('#produtoKit option[selected="selected"]').each(
					    function() {
					        $(this).removeAttr('selected');
					    }
					);
	
					$("#fornecedorKit option:first").attr('selected','selected');
					$("#produtoKit option:first").attr('selected','selected');
						
					App.unblockUI();
					
				}).fail(function(jqXHR, textStatus, errorThrown) { 
					//alert("falha");
					App.unblockUI();
				}); 
				
			});
		
		$('#descontoKit').blur(function(e) {
			if($('#descontoKit').val()==null || $('#descontoKit').val()==''){
				$('#descontoKit').val(0);
			}
			recalcularValor();
		});
		
		$('.kit-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"kit.nmKit" : {
					required : true
				},
				"kit.dsKit" : {
					required : true
				},
				"kit.stKit" : {
					required : true
				}
			},

			messages : {
				"kit.nmKit" : {
					required : "Nome deve ser informado"
				},
				"kit.dsKit" : {
					required : "Descrição deve ser informada"
				},
				"kit.stKit" : {
					required : "Status deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.kit-form')).show();
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
					$(".kit-form").validate().cancelSubmit = true;
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/novo");
					$('.kit-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.kit-form').validate().form()) {
						App.blockUI({boxed: true});
						$('#totalKit').removeAttr("disabled");
						$('#precoKit').removeAttr("disabled");
						
						$('.kit-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/kit/salvar");
						$('.kit-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".kit-form").validate().cancelSubmit = true;
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/excluir");
					$('.kit-form').submit();
					return false;
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".kit-form").validate().cancelSubmit = true;
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/voltar");
					$('.kit-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.kit-form').attr("action",
							$("#ctx").attr("value") + "/kit/consulta");
					$('.kit-form').submit();
					return false;
					displayObject('tbKit', 'false');
				});
		
		$('#btExcluirProduto').click(
				function(e) {
					App.blockUI({boxed: true});
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModalProd').click();
					
					recalcularValor();
					
					App.unblockUI();
			});

	};	
	
	//if($('#tabProd tbody tr').length > 0){
	//	$('#fornecedorKit').prop('disabled', 'disabled');
	//}
	
	return {
		// main function to initiate the module
		init : function() {
			handleKit();
		}
	};

}();
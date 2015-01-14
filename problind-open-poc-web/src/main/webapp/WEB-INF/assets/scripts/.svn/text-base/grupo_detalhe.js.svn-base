var Grupo = function() {

	var handleGrupo = function() {
		
		$('#btAssociar').click(function(e) {
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/grupo/associar?id=" + $("#estabelecimentoGrupo").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				var contador = $('#tabGrup tbody tr').length;
				var idNumber = 0;
				var idBase = "estab-";
				
				if(contador > 0){
					idNumber = 1 + parseInt($('#tabGrup tbody tr:last').attr('id').substring(idBase.length));
				}
				
				var identificador = idBase + idNumber;
				
				$('#tabGrup tbody').append('<tr id="' + identificador + '"><td><input type="hidden" name="estabelecimentoList[' + contador + ']" value="' + data.estabelecimento.cdEstabelecimento + '" \>' +  data.estabelecimento.nmEstabelecimento + '</td><td><a href="#portlet-config-estabelecimento" onclick="removerColuna(\''+identificador+'\',\'' + data.estabelecimento.cdEstabelecimento + '\',\'' + data.estabelecimento.nmEstabelecimento + '\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td></tr>');
				
				$("#estabelecimentoGrupo option[value='" + $("#estabelecimentoGrupo").attr("value") + "']").remove();

				$('#estabelecimentoGrupo option[selected="selected"]').each(
				    function() {
				        $(this).removeAttr('selected');
				    }
				);

				$("#estabelecimentoGrupo option:first").attr('selected','selected');
				
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
			}); 
		});
		
		$('.grupo-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"grupo.nmGrupo" : {
					required : true
				},
				"grupo.stGrupo" : {
					required : true
				}
			},

			messages : {
				"grupo.nmgrupo" : {
					required : "Nome deve ser informado"
				},
				"grupo.stgrupo" : {
					required : "Status deve ser informado"
				}
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.grupo-form')).show();
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
					$(".grupo-form").validate().cancelSubmit = true;
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/novo");
					$('.grupo-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.grupo-form').validate().form()) {
						App.blockUI({boxed: true});
						$('#totalgrupo').removeAttr("disabled");
						$('#precogrupo').removeAttr("disabled");
						
						$('.grupo-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/grupo/salvar");
						$('.grupo-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".grupo-form").validate().cancelSubmit = true;
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/excluir");
					$('.grupo-form').submit();
					return false;
				});

		$('#btExcluirEstabelecimento').click(
				function(e) {
					App.blockUI({boxed: true});
					
					$("#estabelecimentoGrupo").append("<option value='" + $("#cdEstabSel").val() + "'>" + $("#cdEstabSel").val() + " - " + $("#nmEstabSel").val() + "</option>");
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModal').click();
					App.unblockUI();
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".grupo-form").validate().cancelSubmit = true;
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/voltar");
					$('.grupo-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.grupo-form').attr("action",
							$("#ctx").attr("value") + "/grupo/consulta");
					$('.grupo-form').submit();
					return false;
				});

	};	
	
	return {
		// main function to initiate the module
		init : function() {
			handleGrupo();
		}
	};

}();
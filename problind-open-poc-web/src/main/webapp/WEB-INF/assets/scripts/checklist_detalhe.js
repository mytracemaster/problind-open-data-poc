var Checklist = function() {

	$("#inputTelCom").inputmask("(99) 9999-9999");
	$("#inputTelCel").inputmask("(99) 99999-9999");
	$("#cnpjchecklist").inputmask("99.999.999/9999-99");
	$("#cepchecklist").inputmask("99999-999");
	
	var handleChecklist = function() {
		
		$('.checklist-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
					
			},

			messages : {
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.checklist-form')).show();
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

		$('.itemOkNaoOk').change(function(event) {

							var idBase = "upload_";
							var idItem = $(this).attr("id").substring("statusItem_".length);

							App.blockUI({boxed : true});

							if ($(this).attr("value") == 'NOK') {

								$('#' + idBase + idItem).html('<a id="upload_link_'+ idItem + '" onclick="enviarEvidencia('+ idItem + ');" class="btn red" style="margin-top:2px !important;width:106px !important;text-align:left !important;"><i class="m-icon-swapright m-icon-white"></i> Enviar</a> <input style="display:none" type="file" id="file_' + idItem + '" class="file_upload" data-url="'+ idItem + '/enviarEvidencia" name="imagem"> <a href="#modalEvidencia" class="modal-evidencia" data-toggle="modal" id="linkModalEvidencia_' + idItem + '"><button type="button" class="btn red" id="btEnviar_' + idItem + '"  style="margin-top:2px !important;"><i class="fa fa-search"></i> Ver Fotos</button></a>')
										.each(function() {
											bindFileUpload(idItem);
											bindVisualizar(idItem);
										});

								if ($('#aplicaItem_' + idItem).val() != '') {
									$('#linha' + idItem).attr('class','success');
								}
							} else if ($(this).attr("value") == 'OK') {
								$('#' + idBase + idItem).html('');
								if ($('#aplicaItem_' + idItem).val() != '') {
									$('#linha' + idItem).attr('class','success');
								}
							}  else if ($(this).attr("value") == 'NAP') {
								$('#' + idBase + idItem).html('');
								if ($('#aplicaItem_' + idItem).val() != '') {
									$('#linha' + idItem).attr('class','success');
								}
							} else {
								$('#' + idBase + idItem).html('');
								$('#linha' + idItem).attr('class', 'odd gradeX');
							}

							App.unblockUI();

						});
		
		jQuery(".file_upload").each(function() {
			$(".file_upload").fileupload({
                disableImageResize: false,
                maxFileSize: 10000000,
                singleFileUploads: true,
                autoUpload: true,
                maxNumberOfFiles: 1,
		        add: function (e, data) {
		            data.submit();
		            App.blockUI({boxed: true});
		        },
		        done: function (e, data) {
		        	App.unblockUI();
		        },
		        fail: function (e, data) {
		        	App.unblockUI();
		        }
		   });
		});
		
		$('#btSalvar').click(
				function(e) {
					if ($('.checklist-form').validate().form()) {

						App.blockUI({boxed: true});
						
						$("#inputCliente").attr("disabled", false);
						$("#inputVeiculo").attr("disabled", false);
						$("#inputTipo").attr("disabled", false);
						$("#inputStatus").attr("disabled", false);
						
						$('.checklist-form').attr("action", $("#ctx").attr("value") + "/checklist/salvar");
						$('.checklist-form').submit();	
						
					}
					return false;
				});
		
		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".checklist-form").validate().cancelSubmit = true;
					$('.checklist-form').attr("action",
							$("#ctx").attr("value") + "/checklist/voltar");
					$('.checklist-form').submit();
					return false;
		});

		$('#btEncerrar').click(
				function(e) {
					if ($('.checklist-form').validate().form()) {
						
						$("#modalEncerrar").modal("hide");
						
						App.blockUI({boxed: true});
						$('.checklist-form').attr("action", $("#ctx").attr("value") + "/checklist/finalizar");
						
						$("#inputCliente").attr("disabled", false);
						$("#inputVeiculo").attr("disabled", false);
						$("#inputTipo").attr("disabled", false);
						$("#inputStatus").attr("disabled", false);
						
						$('.checklist-form').submit();
					}
				
					return false;
				});
		
		function bindFileUpload(idItem) {
			$("#file_" + idItem).fileupload({
				disableImageResize: false,
                maxFileSize: 10000000,
                singleFileUploads: true,
                autoUpload: true,
                maxNumberOfFiles: 1,
                dataType: 'json',
		        add: function (e, data) {
		            data.submit();
		            App.blockUI({boxed: true});
		        },
		        done: function (e, data) {
		        	App.unblockUI();
		        },
		        fail: function (e, data) {
		        	App.unblockUI();
		        }
			});
		};
		
		function bindVisualizar(idItem){
			$('#linkModalEvidencia_' + idItem).click(function(event) {
				$('#modal-evidencia-body').empty();
				$.get($("#ctx").attr("value") + "/checklist/" + $(this).attr("id").substring("linkModalEvidencia_".length) + "/buscarEvidencias", function( data ) {
					
					for (var i = 0; i < data.evidenciaList.length; i++) {
						d = data.evidenciaList[i];
						$('#modal-evidencia-body').append('<p align="right"><button type="button" class="btn default" data-dismiss="modal">Fechar</button></p><button type="button" class="btn red" alt="Excluir" onClick=excluirEvidencia("' + d.cdChecklistItemEvidencia + '") ><i class="fa fa-trash-o"></i> Excluir</button> <img src="' + $("#ctx").attr("value") + '/checklist/evidencia/' + d.cdChecklistItemEvidencia + '" ' + ' alt="Evidencia" style="border:1px solid #ccc;width:80%;height:300px;"><br /><br />');
						$('#modal-evidencia-body').css({width:'auto',
	                        height:'auto', 
	                       'max-height':'100%'});
					}
					
					if(data.evidenciaList.length == 0){
						$('#modal-evidencia-body').append('<p>Nenhum registro encontrado.<p><br /><button type="button" class="btn red" data-dismiss="modal">Fechar</button>');
						$('#modal-evidencia-body').css({width:'auto',
	                        height:'auto', 
	                       'max-height':'100%'});
					}
					
				}, "json");
			});	
		}
		
		$('.modal-evidencia').click(function(event) {
			
			$('#modal-evidencia-body').empty();
			$.get($("#ctx").attr("value") + "/checklist/" + $(this).attr("id").substring("linkModalEvidencia_".length) + "/buscarEvidencias", function( data ) {
				
				for (var i = 0; i < data.evidenciaList.length; i++) {
					d = data.evidenciaList[i];
					$('#modal-evidencia-body').append('<p align="right"><button type="button" class="btn default" data-dismiss="modal">Fechar</button></p><button type="button" class="btn red" alt="Excluir" onClick=excluirEvidencia("' + d.cdChecklistItemEvidencia + '") ><i class="fa fa-trash-o"></i> Excluir</button> <img src="' + $("#ctx").attr("value") + '/checklist/evidencia/' + d.cdChecklistItemEvidencia + '" ' + ' alt="Evidencia" style="border:1px solid #ccc;width:80%;height:300px;"><br /><br />');
					$('#modal-evidencia-body').css({width:'auto',
                        height:'auto', 
                       'max-height':'100%'});
				}
				  
				if(data.evidenciaList.length == 0){
					$('#modal-evidencia-body').append('<p>Nenhum registro encontrado.<p><br /><button type="button" class="btn red" data-dismiss="modal">Fechar</button>');
					$('#modal-evidencia-body').css({width:'auto',
                        height:'auto', 
                       'max-height':'100%'});
				}
			}, "json");
		});
		
		
		$('#btSalvarComentario').click(function(e) {
			
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var id = $("#cdChecklistItem").val();
			var comentario = $("#txtComentario").val();
			var formURL = $("#ctx").attr("value") + "/checklist/salvarComentario?id=" + id + '&comentario=' + comentario;
			
				$.ajax({ 
					url: formURL, 
					type: 'POST', 
					data: postData,
					dataType: 'JSON',
				}).done(function(data, textStatus, jqXHR) {
					
					$('#coment' + id).val(data.checklistItem.dsObservacao);	
					$('#msgSuccess').show();
					$('#msgSuccess').html('<button class="close" data-close="alert"></button><span>Coment\u00e1rio salvo com sucesso.</span>');
					
					if(data.checklistItem.dsObservacao!=undefined){
						$('#btComentario_' + id).attr('class','btn red');
					}else{
						$('#btComentario_' + id).attr('class','btn default');
					}
					
					App.unblockUI();
					
				}).fail(function(jqXHR, textStatus, errorThrown) { 
					$('#msgFail').show();
					$('#msgFail').html('<button class="close" data-close="alert"></button><span>Ocorreu erro ao salvar o coment\u00e1rio.</span>');
					App.unblockUI();
				}); 
				
			});
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleChecklist();
		}
	};

}();

function salvar(){
	if ($('.checklist-form').validate().form()) {

		App.blockUI({boxed: true});
		
		$("#inputCliente").attr("disabled", false);
		$("#inputVeiculo").attr("disabled", false);
		$("#inputTipo").attr("disabled", false);
		$("#inputStatus").attr("disabled", false);
		
		$('.checklist-form').attr("action", $("#ctx").attr("value") + "/checklist/salvar");
		$('.checklist-form').submit();	
		
	}
	return false;
}

function voltar(){
	App.blockUI({boxed: true});
	$(".checklist-form").validate().cancelSubmit = true;
	$('.checklist-form').attr("action",
			$("#ctx").attr("value") + "/checklist/voltar");
	$('.checklist-form').submit();
	return false;
}

function enviarEvidencia(idProcesso){
    $("#file_" + idProcesso + ":hidden").trigger('click');
};

function setComentario(idx){
	$('#msgSuccess').hide();
	$('#msgFail').hide();
	var comentario = $('#coment' + idx).val();
	$('#txtComentario').val(comentario);
	$('#cdChecklistItem').val(idx);
}
var Equipe = function() {
	
	var handleEquipe = function() {
		
		$('#responsavel').change(function(e) {
			$('#responsavel').attr("disabled",true);
			App.blockUI({boxed: true});
			e.preventDefault(); 
			var postData = $(this).serializeArray();
			var formURL = $("#ctx").attr("value") + "/equipe/carregarMembrosParaAssociacao?idResp=" + $("#responsavel").val() + '&idEquipe=' + $("#idEquipe").val();
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				
				$('#membroEquipe').find('option').remove();
				$('#membroEquipe').append('<option value=""></option>');
				
				for (var i = 0; i < data.membroList.length; i++) {
					d = data.membroList[i];
					$('#membroEquipe').append('<option value="' + d.cdMembro + '">' + d.loginE.nmLogin + '</option>');
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
			
			var idMembro = $("#membroEquipe").attr("value");
			
			var formURL = $("#ctx").attr("value") + "/equipe/associar?id=" + $("#membroEquipe").attr("value");
			$.ajax({ 
				url: formURL, 
				type: 'POST', 
				data: postData,
				dataType: 'JSON',
			}).done(function(data, textStatus, jqXHR) {
				var contador = $('#tbEquipeMembro tbody tr').length;
				var idNumber = 0;
				var idBase = "mem-";
				
				if(contador > 0){
					idNumber = 1 + parseInt($('#tbEquipeMembro tbody tr:last').attr('id').substring(idBase.length));
				}
				
				var identificador = idBase + idNumber;
				
				
				$('#tbEquipeMembro tbody').append('<tr id="' + identificador + '"><td><input type="hidden" name="equipeMembroList[' + contador + ']" value="' + idMembro + '" \>' +  data.login.nmLogin + '</td><td><a href="#portlet-config-membro" onclick="removerColuna(\'' + identificador + '\',\'' + idMembro + '\',\'' + data.login.nmLogin + '\');" class="btn default btn-sm" data-toggle="modal"><i class="fa fa-trash-o"></i> Excluir</a></td></tr>');
				//Remove item da combobox
				$("#membroEquipe option[value='" + idMembro + "']").remove();
				App.unblockUI();
			}).fail(function(jqXHR, textStatus, errorThrown) { 
				//alert("falha");
				App.unblockUI();
			}); 
		});
		
		$('.equipe-form').validate({
			ignore: ".ignore",
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				"equipe.nmEquipe" : {
					required : true
				},
				"equipe.membroE.cdMembro" : {
					required : true
				}
					
			},

			messages : {
				"equipe.nmEquipe" : {
					required : "Nome deve ser informado"
				},
				"equipe.membroE.cdMembro" : {
					required : "Responsável deve ser informado"
				}
				
			},

			invalidHandler : function(event, validator) { // display error
				// alert on form
				// submit
				$('.alert-danger', $('.equipe-form')).show();
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
					$(".equipe-form").validate().cancelSubmit = true;
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/novo");
					$('.equipe-form').submit();
					return false;
				});

		$('#btSalvar').click(
				function(e) {
					if ($('.equipe-form').validate().form()) {
						App.blockUI({boxed: true});
						$('.equipe-form')
								.attr(
										"action",
										$("#ctx").attr("value")
												+ "/equipe/salvar");
						$('#responsavel').attr("disabled",false);
						$('.equipe-form').submit();
					}
					return false;
				});

		$('#btExcluir').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".equipe-form").validate().cancelSubmit = true;
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/excluir");
					$('.equipe-form').submit();
					return false;
				});
		
		$('#btExcluirMembro').click(
				function(e) {					
					App.blockUI({boxed: true});
					$("#membroEquipe").append("<option value='" + $("#cdMembroSel").val() + "'>" + $("#nmMembroSel").val() + "</option>");
					$("#" + $("#colunaSelecionada").val()).remove();
					$('#btFechaModal').click();
					App.unblockUI();
				});

		$('#btVoltar').click(
				function(e) {
					App.blockUI({boxed: true});
					$(".equipe-form").validate().cancelSubmit = true;
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/voltar");
					$('.equipe-form').submit();
					return false;
				});

		$('#btLimpar').click(
				function(e) {
					App.blockUI({boxed: true});
					$('.equipe-form').attr("action",
							$("#ctx").attr("value") + "/equipe/consulta");
					$('.equipe-form').submit();
					return false;
					displayObject('tbEquipe', 'false');
				});
		
	};

	return {
		// main function to initiate the module
		init : function() {
			handleEquipe();
		}
	};

}();

var postData = $(this).serializeArray();
var formURL = $("#ctx").attr("value") + "/equipe/carregarMembrosParaAssociacao?idResp=" + $("#responsavel").val() + '&idEquipe=' + $("#idEquipe").val();
$.ajax({ 
	url: formURL, 
	type: 'POST', 
	data: postData,
	dataType: 'JSON',
}).done(function(data, textStatus, jqXHR) {
	
	$('#membroEquipe').find('option').remove();
	$('#membroEquipe').append('<option value=""></option>');
	
	for (var i = 0; i < data.membroList.length; i++) {
		d = data.membroList[i];
		$('#membroEquipe').append('<option value="' + d.cdMembro + '">' + d.loginE.nmLogin + '</option>');
	}
		
	App.unblockUI();
}).fail(function(jqXHR, textStatus, errorThrown) { 
	//alert("falha");
}); 
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="sr" uri="statics-resources"%>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
<meta charset="utf-8" />
<jsp:include page="/WEB-INF/views/common/header.jsp" />
<c:set var="resourcesRoot">
	<sr:statics-resources />
</c:set>
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"
	rel="stylesheet" type="text/css" />
<link
	href="${resourcesRoot}/assets/plugins/bootstrap/css/bootstrap.min.css"
	rel="stylesheet" type="text/css" />
<link
	href="${resourcesRoot}/assets/plugins/uniform/css/uniform.default.css"
	rel="stylesheet" type="text/css" />
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN THEME STYLES -->
<link href="${resourcesRoot}/assets/css/style-metronic.css"
	rel="stylesheet" type="text/css" />
<link href="${resourcesRoot}/assets/css/style.css" rel="stylesheet"
	type="text/css" />
<link href="${resourcesRoot}/assets/css/style-responsive.css"
	rel="stylesheet" type="text/css" />
<link href="${resourcesRoot}/assets/css/plugins.css" rel="stylesheet"
	type="text/css" />
<link href="${resourcesRoot}/assets/css/pages/timeline.css"
	rel="stylesheet" type="text/css" />
<link href="${resourcesRoot}/assets/css/themes/default.css"
	rel="stylesheet" type="text/css" id="style_color" />
<link href="${resourcesRoot}/assets/css/custom.css" rel="stylesheet"
	type="text/css" />
<!-- END THEME STYLES -->
<link rel="shortcut icon" href="favicon.ico" />
<style>
</style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body>
	<div class="header-inner">
		<img class="navbar-brand"
		src="${resourcesRoot}/assets/img/logo.png"
		alt="logo"/>
	</div>
	<div class="clearfix"></div>
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- BEGIN SIDEBAR -->
		<div class="page-sidebar-wrapper" style="display: none">
			<div class="page-sidebar navbar-collapse collapse">
				<!-- BEGIN SIDEBAR MENU -->
				<ul class="page-sidebar-menu">
					<li>
						<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
						<div class="sidebar-toggler hidden-phone"></div> <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					</li>
					<li>&nbsp;</li>
					<li class=""><a href="index.html"> <i class="fa fa-home"></i>
							<span class="title">Dashboard</span> <span class="arrow"></span>
					</a></li>
					<li class=""><a href="javascript:;"> <i class="fa fa-lock"></i>
							<span class="title">Acesso</span> <span class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="perfil_consulta.html"> Perfil </a></li>
							<li><a href="usuario_consulta.html"> Usuário </a></li>
						</ul></li>
					<li class=""><a href="javascript:;"> <i
							class="fa fa-sitemap"></i> <span class="title">Equipe</span> <span
							class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="membro_consulta.html"> Membro</a></li>
							<li><a href="equipe_consulta.html"> Equipe</a></li>
						</ul></li>
					<li class=""><a href="javascript:;"> <i
							class="fa fa-map-marker"></i> <span class="title">Estabelecimento</span>
							<span class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="estabelecimento_consulta.html">
									Estabelecimento</a></li>
							<li><a href="grupo_estabelecimento_consulta.html"> Grupo</a></li>
						</ul></li>
					<li class=""><a href="javascript:;"> <i
							class="fa fa-share"></i> <span class="title">Parceiros</span> <span
							class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="categoria_produto_consulta.html"> Tipo de
									Fornecedor </a></li>
							<li><a href="fornecedor_consulta.html"> Fornecedor </a></li>
						</ul></li>
					<li class=""><a href="javascript:;"> <i class="fa fa-th"></i>
							<span class="title">Produto</span> <span class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="agregado_consulta.html"> Agregado </a></li>
							<li><a href="produto_consulta.html"> Produto </a></li>
							<li><a href="kit_consulta.html"> KIT </a></li>
						</ul></li>
					<li class="active"><a href="javascript:;"> <i
							class="fa fa-user"></i> <span class="title">Cliente</span> <span
							class="selected"></span>
					</a>
						<ul class="sub-menu">
							<li><a href="cliente_consulta.html"> Cliente</a></li>
							<li><a href="veiculo_consulta.html"> Veiculo</a></li>
							<li><a href="checklist_consulta.html"> Check-list</a></li>
							<li class="active"><a href="blindagem_cadastro.html">
									Blindagem</a></li>
						</ul></li>
					<li class=""><a href="javascript:;"> <i
							class="fa fa-file-text"></i> <span class="title">Serviço</span> <span
							class="arrow "></span>
					</a>
						<ul class="sub-menu">
							<li><a href="proposta_consulta.html"> Proposta </a></li>
							<li><a href="contrato_consulta.html"> Contrato </a></li>
						</ul></li>
					<li class="last "><a href="charts.html"> <i
							class="fa fa-bar-chart-o"></i> <span class="title">Gráfico</span>
					</a></li>
				</ul>
				<!-- END SIDEBAR MENU -->
			</div>
		</div>
		<!-- END SIDEBAR -->
		<!-- BEGIN CONTENT -->
		<div class="page-content-wrapper">
			<div class="page-content">
				<a id="modalEvidenciaLink" href="#modalEvidencia" class="modal-evidencia" data-toggle="modal" style="display:none"></a>
				
				<div class="modal" id="modalEvidencia" style="none;">	    
  				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body" id="modal-evidencia-body" style="width: auto; height: auto; max-height: 100%;">
						
						<p align="right">
							<img id="btClose" data-dismiss="modal" src="${resourcesRoot}/assets/img/close.png"/>
						</p>
						<div id="modal_imgs">
							<img src="" class="imgproc1" id="img_proc1_1" style="border:1px solid #ccc;height:300px; display:none"/>
							<img src="" class="imgproc1" id="img_proc1_2" style="border:1px solid #ccc;height:300px; display:none"/>
							<img src="" class="imgproc1" id="img_proc1_3" style="border:1px solid #ccc;height:300px; display:none"/>
						</div>
						
						</div>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
				</div>


				<!-- BEGIN PAGE HEADER-->
				<div class="row">
					<div class="col-md-12">
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Blindagem <small>rastreabilidade</small>
						</h3>

						<!-- END PAGE TITLE & BREADCRUMB-->
					</div>
				</div>
				<!-- END PAGE HEADER-->

				<!-- BEGIN PAGE CONTENT-->
				<div class="row"></div>
				<div class="row ">
					<div class="col-md-12">
						<div id="teste"></div>
						<form class="form-horizontal" role="form">


							<!-- BEGIN SAMPLE FORM PORTLET-->
							<div id="portlet_blindadora" class="portlet box grey"
								style="display: none">

								<div class="portlet-title">
									<div class="caption">
										<i class="fa fa-reorder"></i> Dados da Blindadora
									</div>
									<div class="tools">
										<a href="" class="collapse"></a> <a href="" class="remove"></a>
									</div>
								</div>

								<div class="portlet-body">

									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Blindadora</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="nome_blindadora"></span></strong>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="inputTipo" class="col-md-2 control-label">Endereço</label>
										<div class="col-md-4">
											<div class="input-icon">
												End.: <strong><span id="endereco_blindadora"></span></strong><br>
												Cidade.: <strong><span id="cidade_blindadora"></span></strong><br>
												CEP.: <strong><span id="cep_blindadora"></span></strong><br>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Site</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="site_blindadora"></span></strong>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Telefone</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="telefone_blindadora"></span></strong>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">CR</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="cr_blindadora"></span></strong>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div id="portlet_veiculo" class="portlet box grey"
								style="display: none">

								<div class="portlet-title">
									<div class="caption">
										<i class="fa fa-reorder"></i> Dados do Veículo
									</div>
									<div class="tools">
										<a href="" class="collapse"></a> <a href="" class="remove"></a>
									</div>
								</div>

								<div class="portlet-body">

									<div class="form-group">
										<label for="inputRenavan" class="col-md-2 control-label">Fabricante</label>
										<div class="col-md-4">
											<b><span id="veiculo_fabricante"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputRenavan" class="col-md-2 control-label">Modelo</label>
										<div class="col-md-4">
											<b><span id="veiculo_modelo"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputRenavan" class="col-md-2 control-label">Renavan</label>
										<div class="col-md-4">
											<b><span id="veiculo_renavan"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputChassi" class="col-md-2 control-label">CHASSI</label>
										<div class="col-md-4">
											<b><span id="veiculo_chassi"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputPlaca" class="col-md-2 control-label">Placa</label>
										<div class="col-md-4">
											<b><span id="veiculo_placa"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputCor" class="col-md-2 control-label">Cor</label>
										<div class="col-md-4">
											<b><span id="veiculo_cor"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputAnoFab" class="col-md-2 control-label">Ano
											Fabricação</label>
										<div class="col-md-4">
											<b><span id="veiculo_ano_fabricacao"></span></b>
										</div>
									</div>
									<div class="form-group">
										<label for="inputAnoMod" class="col-md-2 control-label">Ano
											Modelo</label>
										<div class="col-md-4">
											<b><span id="veiculo_ano_modelo"></span></b>
										</div>
									</div>
								</div>
							</div>

							<div id="portlet_blindagem" class="portlet box grey"
								style="display: none">
								<div class="portlet-title">

									<div class="caption">
										<i class="fa fa-reorder"></i> Dados da Blindagem
									</div>
									<div class="tools">
										<a href="" class="collapse"></a> <a href="" class="remove"></a>
									</div>
								</div>

								<div class="portlet-body">

									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Data
											Blindagem</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="blindagem_data"></span></strong>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Data
											Vencto garantia</label>
										<div class="col-md-4">
											<div class="input-icon">
												<strong><span id="blindagem_vencimento_garantia"></span></strong>
											</div>
										</div>
									</div>
									
									<div id="form_group_vidro" class="form-group" style="display:none;">
										<label for="inputTipo" class="col-md-2 control-label">Vidro</label>
										<div class="col-md-4">
											<div class="input-icon">
												Fornecedor <strong><span id="vidro_fornecedor"></span></strong><br> 
												Modelo <strong><span id="vidro_modelo"></span></strong><br> 
												<!-- N° Lote <strong>PB
													1231 - VG 3424 - PD 1204 - PE 54332 - TD 43211 - TE 75833 <br>
													FD 43221 - FE 12312 - QD 34234 - QE 65434
												</strong> -->
											</div>
										</div>
									</div>
									
									<div class="form-group">
										<label for="inputCliente" class="col-md-2 control-label">Agregados</label>
										<div class="col-md-4">
											<div id="group_agregados" class="input-icon">
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<!-- BEGIN TIMELINE-->
							<div class="row">
								<div class="col-md-12">
									<div id="processos">
										<ul class="timeline">
										</ul>
									</div>
							</div>
							<!-- END TIMELINE-->
				</div>
				<!-- END PAGE CONTENT-->

						</form>
					</div>
				</div>
				<!-- END CONTENT -->
			</div>
			<!-- END CONTAINER -->
			<!-- BEGIN FOOTER -->
			<div class="footer">
				<div class="footer-inner">PRO BLIND | Controle e eficiência.</div>
				<div class="footer-tools">
					<span class="go-top">
					</span>
				</div>
			</div>
			<!-- END FOOTER -->
			<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
			<!--[if lt IE 9]>
<script src="${resourcesRoot}/assets/plugins/respond.min.js"></script>
<script src="${resourcesRoot}/assets/plugins/excanvas.min.js"></script> 
<![endif]-->
			<script src="${resourcesRoot}/assets/plugins/jquery-1.10.2.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/jquery.blockui.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/jquery.cookie.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/plugins/colorbox-master/jquery.colorbox.js" type="text/javascript"></script>
			<script src="${resourcesRoot}/assets/scripts/app.js"></script>
			<script type="text/javascript" src="${resourcesRoot}/assets/scripts/android_bridge.js"></script>
			<script>

				var selectedImg = null;
				var modalImgsCount = 0;
				jQuery(document).ready(function() {
					App.init();
					AndroidBridge.init();

					var postUrl = "/consultar/blindagem";
					var codBlindagem = AndroidBridge.obtemCodigoBlindagem();

					$.ajax({ 
						url: postUrl, 
						type: 'POST', 
						data: "codLeitura=" + codBlindagem,
						dataType: 'JSON',
						cache: false,
					}).done(function(data, textStatus, jqXHR) {
						
						if(data.status == 0){//status de sucesso

							var msgNaoInformado = "N&#227;o informado";
							
							$("#nome_blindadora").html(data.blindagem.blindadora.nome == null ? msgNaoInformado : data.blindagem.blindadora.nome);
							$("#telefone_blindadora").html(data.blindagem.blindadora.telefone == null ? msgNaoInformado : data.blindagem.blindadora.telefone);
							$("#site_blindadora").html(data.blindagem.blindadora.site == null ? msgNaoInformado : data.blindagem.blindadora.site);
							$("#endereco_blindadora").html(data.blindagem.blindadora.endereco == null ? msgNaoInformado : data.blindagem.blindadora.endereco);
							$("#cidade_blindadora").html(data.blindagem.blindadora.cidade == null ? msgNaoInformado : data.blindagem.blindadora.cidade);
							$("#cep_blindadora").html(data.blindagem.blindadora.cep == null ? msgNaoInformado : data.blindagem.blindadora.cep);
							$("#cr_blindadora").html(data.blindagem.blindadora.numCr == null ? msgNaoInformado : data.blindagem.blindadora.numCr);

							$("#portlet_blindadora").show();

							$("#veiculo_fabricante").html(data.blindagem.veiculo.fabricante == null ? msgNaoInformado : data.blindagem.veiculo.fabricante);
							$("#veiculo_modelo").html(data.blindagem.veiculo.modelo == null ? msgNaoInformado : data.blindagem.veiculo.modelo);
							$("#veiculo_renavan").html(data.blindagem.veiculo.renavan == null ? msgNaoInformado : data.blindagem.veiculo.renavan);
							$("#veiculo_chassi").html(data.blindagem.veiculo.chassi == null ? msgNaoInformado : data.blindagem.veiculo.chassi);
							$("#veiculo_placa").html(data.blindagem.veiculo.placa == null ? msgNaoInformado : data.blindagem.veiculo.placa);
							$("#veiculo_cor").html(data.blindagem.veiculo.cor == null ? msgNaoInformado : data.blindagem.veiculo.cor);
							$("#veiculo_ano_fabricacao").html(data.blindagem.veiculo.anoFabricacao == null ? msgNaoInformado : data.blindagem.veiculo.anoFabricacao);
							$("#veiculo_ano_modelo").html(data.blindagem.veiculo.anoModelo == null ? msgNaoInformado : data.blindagem.veiculo.anoModelo);

							$("#portlet_veiculo").show();

							$("#blindagem_data").html(data.blindagem.dataBlindagem == null ? msgNaoInformado : data.blindagem.dataBlindagem);
							$("#blindagem_vencimento_garantia").html(data.blindagem.dataVencimentoGarantia == null ? msgNaoInformado : data.blindagem.dataVencimentoGarantia);

							if(data.blindagem.vidro != null){
								$("#vidro_fornecedor").html(data.blindagem.vidro.fornecedor == null ? msgNaoInformado : data.blindagem.vidro.fornecedor);
								$("#vidro_modelo").html(data.blindagem.vidro.modelo == null ? msgNaoInformado : data.blindagem.vidro.modelo);

								$("#form_group_vidro").show();
							}

							var agregados = data.blindagem.agregados;
							if(data.blindagem.agregados != null){
								var htmlAgregados = "";
								for(var i = 0; i < agregados.length; i++){
									htmlAgregados  += "<strong>"+ agregados[i] +"</strong><br>";
								}

								$("#group_agregados").html(htmlAgregados);
							}
							
							$("#portlet_blindagem").show();
						} else{
							AndroidBridge.handleError(data.message);
						}
						
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						 var errorMsg = "Pedimos desculpas! Nosso servi&#231;o de consulta aparentemente esta com um problema." + 
					     " Estamos trabalhando para resolv&#234;-lo. Por favor, tente novamente mais tarde.";
					     AndroidBridge.handleError(errorMsg);		
					});

					postUrl = "/consultar/timeline";
					$.ajax({ 
						url: postUrl, 
						type: 'POST', 
						data: "codLeitura=" + codBlindagem,
						dataType: 'JSON',
						cache: false,
					}).done(function(data, textStatus, jqXHR) {
						
						if(data.status == 0){//status de sucesso

							if(data.timeline != null && data.timeline.processos != null){
								$.each(data.timeline.processos, function(i, processo) {
									var numProcesso = i + 1;
									var htmlTimeline = "<li class=\"timeline-grey\">";
									
									htmlTimeline += "<li class=\"timeline-grey\">";
									htmlTimeline += "<div class=\"timeline-time\">";
									htmlTimeline += "<span class=\"date\">";
									htmlTimeline += processo.dtInicio;
									htmlTimeline += "</span>";
									htmlTimeline += "<span class=\"time\">";
									htmlTimeline +=  processo.horarioInicio;
									htmlTimeline += "</span>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-icon\">";
									htmlTimeline += "<i class=\"fa fa-check\"></i>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-body\">";
									htmlTimeline += "<h2>" + numProcesso + " - " + processo.descricaoProcesso + "</h2>";
									htmlTimeline += "<div class=\"timeline-content\">";
									htmlTimeline += "<table>";

									if(processo.evidencias != null){
										htmlTimeline += "<tr>";
										$.each(processo.evidencias, function(j, evidencia) {

											var imgClass = "imgproc" + numProcesso;
											var imgId = imgClass + "_" + j;

											var onClickFunction = "onImgClick(\'" + imgId + "\', \'" + imgClass + "\');";

											htmlTimeline += "<td>";
											/* htmlTimeline += "<a href=\"#modalEvidencia\" class=\"modal-evidencia\" data-toggle=\"modal\" id=\"linkModalEvidencia_17204\">"; */
											htmlTimeline +=	"<img class=\"timeline-img pull-left " + imgClass + "\" id= \"" + imgId + "\" onclick=\"" + onClickFunction + "\" src=\"data:image/png;base64, " + evidencia + "\">";
											/* htmlTimeline += "</a>"; */
											htmlTimeline += "</td>";
										});
										htmlTimeline += "</tr>";
									}
									
									htmlTimeline += "</table>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-footer\"></div>";
									htmlTimeline += "</div>";
									htmlTimeline += "</li>";

									$("#processos ul").append(htmlTimeline);							
								});
							}
						} 
					});

				});

				function teste1(){
					
					var postUrl = "${pageContext.request.contextPath}" + "/consultar/blindagem";
					$.ajax({ 
						url: postUrl, 
						type: 'POST', 
						data: "codLeitura=concept|140719",
						dataType: 'JSON',
						cache: false,
					}).done(function(data, textStatus, jqXHR) {
						
						if(data.status == 0){//status de sucesso

							var msgNaoInformado = "N&#227;o informado";
							
							$("#nome_blindadora").html(data.blindagem.blindadora.nome == null ? msgNaoInformado : data.blindagem.blindadora.nome);
							$("#telefone_blindadora").html(data.blindagem.blindadora.telefone == null ? msgNaoInformado : data.blindagem.blindadora.telefone);
							$("#site_blindadora").html(data.blindagem.blindadora.site == null ? msgNaoInformado : data.blindagem.blindadora.site);
							$("#endereco_blindadora").html(data.blindagem.blindadora.endereco == null ? msgNaoInformado : data.blindagem.blindadora.endereco);
							$("#cidade_blindadora").html(data.blindagem.blindadora.cidade == null ? msgNaoInformado : data.blindagem.blindadora.cidade);
							$("#cep_blindadora").html(data.blindagem.blindadora.cep == null ? msgNaoInformado : data.blindagem.blindadora.cep);
							$("#cr_blindadora").html(data.blindagem.blindadora.numCr == null ? msgNaoInformado : data.blindagem.blindadora.numCr);

							$("#portlet_blindadora").show();

							$("#veiculo_fabricante").html(data.blindagem.veiculo.fabricante == null ? msgNaoInformado : data.blindagem.veiculo.fabricante);
							$("#veiculo_modelo").html(data.blindagem.veiculo.modelo == null ? msgNaoInformado : data.blindagem.veiculo.modelo);
							$("#veiculo_renavan").html(data.blindagem.veiculo.renavan == null ? msgNaoInformado : data.blindagem.veiculo.renavan);
							$("#veiculo_chassi").html(data.blindagem.veiculo.chassi == null ? msgNaoInformado : data.blindagem.veiculo.chassi);
							$("#veiculo_placa").html(data.blindagem.veiculo.placa == null ? msgNaoInformado : data.blindagem.veiculo.placa);
							$("#veiculo_cor").html(data.blindagem.veiculo.cor == null ? msgNaoInformado : data.blindagem.veiculo.cor);
							$("#veiculo_ano_fabricacao").html(data.blindagem.veiculo.anoFabricacao == null ? msgNaoInformado : data.blindagem.veiculo.anoFabricacao);
							$("#veiculo_ano_modelo").html(data.blindagem.veiculo.anoModelo == null ? msgNaoInformado : data.blindagem.veiculo.anoModelo);

							$("#portlet_veiculo").show();

							$("#blindagem_data").html(data.blindagem.dataBlindagem == null ? msgNaoInformado : data.blindagem.dataBlindagem);
							$("#blindagem_vencimento_garantia").html(data.blindagem.dataVencimentoGarantia == null ? msgNaoInformado : data.blindagem.dataVencimentoGarantia);

							if(data.blindagem.vidro != null){
								$("#vidro_fornecedor").html(data.blindagem.vidro.fornecedor == null ? msgNaoInformado : data.blindagem.vidro.fornecedor);
								$("#vidro_modelo").html(data.blindagem.vidro.modelo == null ? msgNaoInformado : data.blindagem.vidro.modelo);

								$("#form_group_vidro").show();
							}

							var agregados = data.blindagem.agregados;
							if(data.blindagem.agregados != null){
								var htmlAgregados = "";
								for(var i = 0; i < agregados.length; i++){
									htmlAgregados  += "<strong>"+ agregados[i] +"</strong><br>";
								}

								$("#group_agregados").html(htmlAgregados);
							}
							
							$("#portlet_blindagem").show();
						} else{
							AndroidBridge.handleError(data.message);
						}
						
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						$("#teste").html("erro:" + errorThrown);
					}); 
				}

				function teste2(){
					
					var postUrl = "${pageContext.request.contextPath}" + "/consultar/timeline";
					$.ajax({ 
						url: postUrl, 
						type: 'POST', 
						data: "codLeitura=concept|140719",
						dataType: 'JSON',
						cache: false,
						beforeSend:function(){
				             $("#loading_img").show();
				        },
				    	complete:function(){
				             $("#loading_img").hide();
				        }
					}).done(function(data, textStatus, jqXHR) {
						
						if(data.status == 0){//status de sucesso

							if(data.timeline != null && data.timeline.processos != null){
								$.each(data.timeline.processos, function(i, processo) {
									var numProcesso = i + 1;
									var htmlTimeline = "<li class=\"timeline-grey\">";
									
									htmlTimeline += "<li class=\"timeline-grey\">";
									htmlTimeline += "<div class=\"timeline-time\">";
									htmlTimeline += "<span class=\"date\">";
									htmlTimeline += processo.dtInicio;
									htmlTimeline += "</span>";
									htmlTimeline += "<span class=\"time\">";
									htmlTimeline +=  processo.horarioInicio;
									htmlTimeline += "</span>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-icon\">";
									htmlTimeline += "<i class=\"fa fa-check\"></i>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-body\">";
									htmlTimeline += "<h2>" + numProcesso + " - " + processo.descricaoProcesso + "</h2>";
									htmlTimeline += "<div class=\"timeline-content\">";
									htmlTimeline += "<table>";

									if(processo.evidencias != null){
										htmlTimeline += "<tr>";
										$.each(processo.evidencias, function(j, evidencia) {

											var imgClass = "imgproc" + numProcesso;
											var imgId = imgClass + "_" + j;

											var onClickFunction = "onImgClick(\'" + imgId + "\', \'" + imgClass + "\');";

											htmlTimeline += "<td>";
											/* htmlTimeline += "<a href=\"#modalEvidencia\" class=\"modal-evidencia\" data-toggle=\"modal\" id=\"linkModalEvidencia_17204\">"; */
											htmlTimeline +=	"<img class=\"timeline-img pull-left " + imgClass + "\" id= \"" + imgId + "\" onclick=\"" + onClickFunction + "\" src=\"data:image/png;base64, " + evidencia + "\">";
											/* htmlTimeline += "</a>"; */
											htmlTimeline += "</td>";
										});
										htmlTimeline += "</tr>";
									}
									
									htmlTimeline += "</table>";
									htmlTimeline += "</div>";
									htmlTimeline += "<div class=\"timeline-footer\"></div>";
									htmlTimeline += "</div>";
									htmlTimeline += "</li>";

									$("#processos ul").append(htmlTimeline);							
								});
							}
						} 
						
					}).fail(function(jqXHR, textStatus, errorThrown) { 
						$("#teste").html("erro:" + errorThrown);
					}); 
				}

				function onImgClick(timeLineId, imgClass){
					$("#modal_imgs").html("");

					var btLeft = "<img class=\"topArrow\" onclick=\"onDownArrowClick();\" style=\"width:5%; display:none\" src=\"${resourcesRoot}/assets/img/left.png\"/>";
					$("#modal_imgs").append(btLeft);
					
					/* $("#modalEvidencia").show(); */
					$("#modalEvidenciaLink").click();
					modalImgsCount = 0;
					$.each($("." + imgClass), function(i, img){
						modalImgsCount++;
						var timelineImg = $(img);

						var modalId = "modal_" + i;
						var modalImg = null;
						if(timelineImg.attr("id") == timeLineId){
							selectedImg = i;

							modalImg = "<img src=\"" + timelineImg.attr("src") + "\"  id=\"" + modalId + "\" style=\"border:1px solid #ccc;width:90%;height:300px;\"/>";
						}else{
							modalImg = "<img src=\"" + timelineImg.attr("src") + "\"  id=\"" + modalId + "\" style=\"border:1px solid #ccc;width:90%;height:300px; display:none\"/>";
						}
						$("#modal_imgs").append(modalImg);
					});

					var btRight = "<img class=\"topArrow\" onclick=\"onTopArrowClick();\" style=\"width:5%; display:none\" src=\"${resourcesRoot}/assets/img/right.png\"/>";
					$("#modal_imgs").append(btRight);

					$(".topArrow").show();
					$(".downArrow").show();
				}

				function onDownArrowClick(){
					$("#modal_" + selectedImg).hide();
					
					selectedImg--;
					
					if(selectedImg <= 0){
						selectedImg = 0;
					}

					$("#modal_" + selectedImg).show();
				}

				function onTopArrowClick(){
					$("#modal_" + selectedImg).hide();
					
					selectedImg++;
					
					if(selectedImg >= modalImgsCount -1){
						selectedImg = modalImgsCount - 1;
					}

					$("#modal_" + selectedImg).show();
				}

				function onModalClose(){
					$('#modalEvidencia').hide();
				}
			</script>
			<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>
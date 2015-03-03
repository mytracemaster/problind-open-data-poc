package br.com.mytrace.problind.web.controller;

import javax.ws.rs.core.MediaType;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.mytrace.problind.trace.core.exception.CodigoLeituraInvalidoException;
import br.com.mytrace.problind.trace.core.exception.CommunicationException;
import br.com.mytrace.problind.trace.model.TraceResponse;
import br.com.mytrace.problind.trace.service.BlindagemService;

@Controller
public class TraceController {

	private static final String VIEW_NAME_DETALHE = "blindagem/detalhe";

	@Autowired
	private BlindagemService consultaService;

	private static final Logger LOG = LogManager
			.getLogger(TraceController.class);

	@RequestMapping("/carregar")
	public String consultar() {
		return VIEW_NAME_DETALHE;
	}

	@RequestMapping(value = "/consultar/blindagem", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody TraceResponse consultarBlindagem(
			@RequestParam String codLeitura) {
		TraceResponse response = null;
		try {
			response = consultaService.consultar(codLeitura);
		} catch (CommunicationException e) {
			LOG.error(e);

			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_FALHA_COMUNICACAO_ENDPOINT);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("Pedimos desculpas! Mas os dados desta blindadora encontram-se indisponiveis no momento. "
					+ "Por favor, tente novamente mais tarde.");
		}catch (CodigoLeituraInvalidoException e) {
			LOG.error(e);

			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_FALHA_COMUNICACAO_ENDPOINT);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("QR Code invalido.");
		} 
		catch (Exception e) {
			LOG.error(e);
			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_STATUS_ERRO_NAO_TRATADO);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("Pedimos desculpas! Nosso servico de consulta aparentemente esta com um problema. "
					+ "Estamos trabalhando para resolve-lo. Por favor, tente novamente mais tarde.");
			return response;
		}

		LOG.info("Processado sem erros.");
		return response;
	}

	@RequestMapping(value = "/consultar/timeline", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody TraceResponse consultarTimeline(
			@RequestParam String codLeitura) {
		TraceResponse response = null;
		try {
			response = consultaService.consultarTimeline(codLeitura);
		} catch (CommunicationException e) {
			LOG.error(e);

			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_FALHA_COMUNICACAO_ENDPOINT);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("Pedimos desculpas! Mas os dados desta blindadora encontram-se indisponiveis no momento. "
					+ "Por favor, tente novamente mais tarde.");
		} catch (CodigoLeituraInvalidoException e) {
			LOG.error(e);
			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_STATUS_COD_BARRA_INVALIDO);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("Codigo de barras informado invalido.");
			
			return response;
		} catch (Exception e) {
			LOG.error(e);
			response = new TraceResponse();
			response.setStatus(TraceResponse.COD_STATUS_ERRO_NAO_TRATADO);

			// FIXME obter msg de um arquivo de properties
			response.setMessage("Pedimos desculpas! Nosso servico de consulta aparentemente esta com um problema. "
					+ "Estamos trabalhando para resolve-lo. Por favor, tente novamente mais tarde.");
			return response;
		}

		LOG.info("Processado sem erros.");
		return response;
	}

}

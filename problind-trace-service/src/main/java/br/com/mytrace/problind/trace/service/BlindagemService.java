package br.com.mytrace.problind.trace.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import br.com.mytrace.problind.trace.core.exception.CodigoLeituraInvalidoException;
import br.com.mytrace.problind.trace.core.exception.CommunicationException;
import br.com.mytrace.problind.trace.core.util.EnviromentConfigs;
import br.com.mytrace.problind.trace.core.util.JsonUtil;
import br.com.mytrace.problind.trace.model.TraceResponse;

@Service
public class BlindagemService {

	private static final String ACTION_TRACE_CONSULTAR_BLINDAGEM = "/trace/consultar/blindagem";

	private static final String ACTION_TRACE_CONSULTAR_TIMELINE = "/trace/consultar/timeline";

	private static final Logger LOG = Logger.getLogger(BlindagemService.class);

	@Autowired
	private EnviromentConfigs configUtil;

	public TraceResponse consultar(String codLeitura)
			throws CommunicationException, CodigoLeituraInvalidoException {
		
		final String[] tokensLeitura = parseCodigoLeitura(codLeitura);
		final String codBlindadora = tokensLeitura[0];
		final String idBlindagem = tokensLeitura[1];

		LOG.info("Iniciando tratamento para consulta de dados de blindagem...");
		LOG.info("ID blindagem informado : " + idBlindagem);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("numOs", idBlindagem);

		final RestTemplate restTemplate = new RestTemplate();

		LOG.info("Resolvendo endpoint...");
		/*
		 * FIXME por enquanto apenas pega o endpoint da concept
		 */
		String uri = configUtil.getEndpoint(codBlindadora);
		uri += ACTION_TRACE_CONSULTAR_BLINDAGEM;

		LOG.info("ENDPOINT = " + uri);

		ResponseEntity<String> httpResponse = restTemplate.postForEntity(uri,
				map, String.class);
		if (httpResponse.getStatusCode() != HttpStatus.OK) {
			if (httpResponse.getStatusCode() == HttpStatus.FOUND) {
				LOG.info("Servidor retornou status de redirect");
				LOG.info("location: "
						+ httpResponse.getHeaders().getLocation().getPath());
			}

			final String errorMsg = "Falha de comunicacao com o servidor. HTTP erro: "
					+ httpResponse.getStatusCode();
			LOG.error(errorMsg);
			throw new CommunicationException(errorMsg);
		} else {
			final String jsonObject = httpResponse.getBody();

			return JsonUtil.fromString(jsonObject, TraceResponse.class);
		}
	}

	public TraceResponse consultarTimeline(String codLeitura)
			throws CommunicationException, CodigoLeituraInvalidoException {

		final String[] tokensLeitura = parseCodigoLeitura(codLeitura);
		final String codBlindadora = tokensLeitura[0];
		final String idBlindagem = tokensLeitura[1];
		
		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("numOs", idBlindagem);

		final RestTemplate restTemplate = new RestTemplate();

		LOG.info("Resolvendo endpoint...");
		/*
		 * FIXME por enquanto apenas pega o endpoint da concept
		 */
		String uri = configUtil.getEndpoint(codBlindadora);
		uri += ACTION_TRACE_CONSULTAR_TIMELINE;

		LOG.info("ENDPOINT = " + uri);

		ResponseEntity<String> httpResponse = restTemplate.postForEntity(uri,
				map, String.class);
		if (httpResponse.getStatusCode() != HttpStatus.OK) {
			if (httpResponse.getStatusCode() == HttpStatus.FOUND) {
				LOG.info("Servidor retornou status de redirect");
				LOG.info("location: "
						+ httpResponse.getHeaders().getLocation().getPath());
			}

			final String errorMsg = "Falha de comunicacao com o servidor. HTTP erro: "
					+ httpResponse.getStatusCode();
			LOG.error(errorMsg);
			throw new CommunicationException(errorMsg);
		} else {
			final String jsonObject = httpResponse.getBody();

			return JsonUtil.fromString(jsonObject, TraceResponse.class);
		}
	}

	/*
	 * Retorna um array com dois elementos, sendo o primeiro o codigo da
	 * blindadora e o segundo o numero da OS
	 */
	private String[] parseCodigoLeitura(String codLeitura)
			throws CodigoLeituraInvalidoException {
		try {
			if (codLeitura == null || codLeitura.isEmpty()) {
				throw new CodigoLeituraInvalidoException(
						"Codigo invalido. String vazia ou nula.");
			}

			String[] tokens = codLeitura.split("\\|");
			if (tokens == null || tokens.length != 2) {
				throw new CodigoLeituraInvalidoException(
						"Codigo invalido. Padrao de conteudo invalido. "
								+ "Verificar se o codigo lido esta no padrao [CODIGO_BLINDADORA]|[NUMERO_OS]");
			}

			return tokens;
		} catch (CodigoLeituraInvalidoException e) {
			throw e;
		} catch (Exception e) {
			throw new CodigoLeituraInvalidoException(e);
		}
	}
}

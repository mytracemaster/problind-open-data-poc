package br.com.mytrace.problind.trace.core.util;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;

import br.com.mytrace.problind.trace.core.exception.SerializationException;

public class JsonUtil {

	private static final Logger LOG = LogManager.getLogger(JsonUtil.class);
	
	private final static ObjectMapper MAPPER = new ObjectMapper();

	{
		MAPPER.configure(
				DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}

	public static <T> T fromString(String json, Class<T> type) {
		try {
			return MAPPER.readValue(json, type);
		} catch (Exception e) {
			LOG.error("Falha ao teantar deserializar objeto: ");
			LOG.error(json);
			
			throw new SerializationException(
					"Falha ao tentar deserializar o Objeto informado.", e);
		}

	}

}

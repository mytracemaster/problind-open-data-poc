package br.com.mytrace.problind.trace.core.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
public class EnviromentConfigs {

	private Properties configsProperties;

	private String environment;

	private static final String KEY_PROPERTY_ENVIRONMENT = "problind_enviroment";
	private static final String KEY_PROPERTY_STATIC_URL = "static.url";

	private static final String DEFAULT_VALUE_ENVIRONMENT = "dev";

	public EnviromentConfigs() throws IOException {
		this.environment = System.getProperty(KEY_PROPERTY_ENVIRONMENT);
		if (environment == null) {
			this.environment = System.getenv(KEY_PROPERTY_ENVIRONMENT);
		}

		if (environment == null) {
			this.environment = DEFAULT_VALUE_ENVIRONMENT;
		}

		InputStream in = null;
		try {
			in = this.getClass().getClassLoader()
					.getResourceAsStream("config.properties");

			configsProperties = new Properties();
			configsProperties.load(in);

		} catch (IOException e) {
			throw e;
		} finally {
			if (in != null) {
				in.close();
			}
		}
	}

	public String getStaticUrl() {
		return configsProperties.getProperty(String.format("%s.%s",
				this.environment, KEY_PROPERTY_STATIC_URL));
	}

	public String getEndpoint(String nomeBlindadora) {
		return configsProperties.getProperty(String.format("%s.endpoint.%s",
				this.environment, nomeBlindadora));
	}
}

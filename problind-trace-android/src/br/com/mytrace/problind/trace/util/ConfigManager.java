package br.com.mytrace.problind.trace.util;

import java.io.IOException;
import java.io.InputStream;
import java.text.MessageFormat;
import java.util.Properties;

import android.util.Log;

public class ConfigManager {

	private static ConfigManager configManager;
	private Properties configProperty;
	
	private final static String TAG = ConfigManager.class.toString();

	private ConfigManager() throws IOException {
		
		InputStream in = null;
		try {
			in = this.getClass().getResourceAsStream(
					"/br/com/mytrace/problind/android/resources/config.properties");

			configProperty = new Properties();
			configProperty.load(in);

		} catch (IOException e) {
			throw e;
		} finally{
			if(in != null){
				try {
					in.close();
				} catch (Exception e) {
					Log.e(TAG, "Falha ao fechar stream de leitura de arquivo de config.", e);
				}
			}
		}
	}

	public static ConfigManager getInstance() {
		try {
			if (configManager == null) {
				configManager = new ConfigManager();
			}
		} catch (IOException e) {
			Log.e(TAG, "Erro ao recuperar o arquivo de config", e);
		}
		return configManager;
	}

	public String getProperty(String key, Object... params) {
		if (params == null) {
			return this.configProperty.getProperty(key);
		} else {
			return MessageFormat.format(this.configProperty.getProperty(key),
					params);
		}
	}

	public String getProperty(String key) {
		return this.configProperty.getProperty(key);
	}

}

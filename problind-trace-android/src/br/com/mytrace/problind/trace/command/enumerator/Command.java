package br.com.mytrace.problind.trace.command.enumerator;

/**
 * Classe que encapsula comandos a serem trocados entre app web e app mobile
 * embarcada
 * 
 * @author dinterliche
 * 
 */
public enum Command {

	/**
	 * Chama a Activity de captura de codigo QR e direciona para tela de blindagem
	 */
	CAPTURE_BLINDAGEM,
	
	/**
	 * Chama a Activity de captura de codigo QR e direciona para tela de blindagem
	 */
	CAPTURE_CHECKLIST,

	/**
	 * Chama a Activity de captura de imagens para amostragem de avarias no
	 * processo de blindagem
	 */
	CAPTURE_IMAGE,
	
	SEND_LOGIN_DATA;
	;

}

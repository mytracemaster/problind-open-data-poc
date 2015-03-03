package br.com.mytrace.problind.trace.core.exception;

public class CodigoLeituraInvalidoException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 478035442316693709L;
	
	public CodigoLeituraInvalidoException(String message){
		super(message);
	}
	
	public CodigoLeituraInvalidoException(Throwable e){
		super(e);
	}

}

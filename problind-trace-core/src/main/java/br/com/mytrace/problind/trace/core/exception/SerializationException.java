package br.com.mytrace.problind.trace.core.exception;

public class SerializationException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -921719151702928877L;
	
	public SerializationException(String msg, Throwable e){
		super(msg, e);
	}

}

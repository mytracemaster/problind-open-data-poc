package br.com.mytrace.problind.trace.core.exception;

public class CommunicationException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1127788947939980657L;
	
	private Integer httpStatusError;

	public CommunicationException(String msg, Throwable e) {
		super(msg, e);
	}

	public CommunicationException(String msg) {
		super(msg);
	}

	public Integer getHttpStatusError() {
		return httpStatusError;
	}

	public void setHttpStatusError(Integer httpStatusError) {
		this.httpStatusError = httpStatusError;
	}
}

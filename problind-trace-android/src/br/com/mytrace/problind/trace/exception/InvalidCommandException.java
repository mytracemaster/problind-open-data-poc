package br.com.mytrace.problind.trace.exception;

public class InvalidCommandException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4565044684875800716L;

	public InvalidCommandException() {
		super();
	}

	public InvalidCommandException(String message) {
		super(message);
	}

	public InvalidCommandException(String message, Throwable e) {
		super(message, e);
	}

	public InvalidCommandException(Throwable e) {
		super(e);
	}
}

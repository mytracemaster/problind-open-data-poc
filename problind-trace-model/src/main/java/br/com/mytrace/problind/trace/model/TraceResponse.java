package br.com.mytrace.problind.trace.model;

import java.io.Serializable;

public class TraceResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2486238640062355806L;
	
	public static final Integer COD_STATUS_SUCESSO = 0;
	public static final Integer COD_STATUS_COD_BARRA_INVALIDO = 10;
	public static final Integer COD_STATUS_NUM_OS_N_EXISTENTE = 20;
	public static final Integer COD_STATUS_BLINDADORA_NAO_EXISTENTE = 30;
	public static final Integer COD_STATUS_ERRO_NAO_TRATADO = 40;
	public static final Integer COD_FALHA_COMUNICACAO_ENDPOINT = 50;
	
	private Integer status;
	private String message;
	private Blindagem blindagem;
	private Timeline timeline;
	
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Blindagem getBlindagem() {
		return blindagem;
	}
	public void setBlindagem(Blindagem blindagem) {
		this.blindagem = blindagem;
	}
	public Timeline getTimeline() {
		return timeline;
	}
	public void setTimeline(Timeline timeline) {
		this.timeline = timeline;
	}
}

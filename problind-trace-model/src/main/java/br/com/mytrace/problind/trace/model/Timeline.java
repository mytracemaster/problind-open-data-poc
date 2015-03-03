package br.com.mytrace.problind.trace.model;

import java.io.Serializable;
import java.util.List;

public class Timeline implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8947134494255567897L;
	
	List<Processo> processos;

	public List<Processo> getProcessos() {
		return processos;
	}
	public void setProcessos(List<Processo> processos) {
		this.processos = processos;
	}
}

package br.com.mytrace.problind.trace.model;

import java.io.Serializable;
import java.util.List;

public class Processo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -628303246275459830L;
	
	private String dtInicio;
	private String horarioInicio;
	private String descricaoProcesso;
	private List<String> evidencias;
	
	public String getDtInicio() {
		return dtInicio;
	}
	public void setDtInicio(String dtInicio) {
		this.dtInicio = dtInicio;
	}
	public String getHorarioInicio() {
		return horarioInicio;
	}
	public void setHorarioInicio(String horarioInicio) {
		this.horarioInicio = horarioInicio;
	}
	public String getDescricaoProcesso() {
		return descricaoProcesso;
	}
	public void setDescricaoProcesso(String descricaoProcesso) {
		this.descricaoProcesso = descricaoProcesso;
	}
	public List<String> getEvidencias() {
		return evidencias;
	}
	public void setEvidencias(List<String> evidencias) {
		this.evidencias = evidencias;
	}
}

package br.com.mytrace.problind.trace.model;

import java.io.Serializable;

public class Vidro implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1967029348444643270L;
	
	private String modelo;
	private String fornecedor;
	private String lote;
	
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getLote() {
		return lote;
	}
	public void setLote(String lote) {
		this.lote = lote;
	}
	public String getFornecedor() {
		return fornecedor;
	}
	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}
}

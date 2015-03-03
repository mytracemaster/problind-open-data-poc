package br.com.mytrace.problind.trace.model;

import java.io.Serializable;

public class Blindadora implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -9162256783307566436L;
	
	private String nome;
	private String endereco;
	private String site;
	private String telefone;
	private String numCr;
	private String cidade;
	private String cep;
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getSite() {
		return site;
	}
	public void setSite(String site) {
		this.site = site;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getNumCr() {
		return numCr;
	}
	public void setNumCr(String numCr) {
		this.numCr = numCr;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
}

package br.com.mytrace.problind.trace.model;

import java.io.Serializable;

public class Blindagem implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8921899871189444169L;

	private String dataBlindagem;
	private String dataVencimentoGarantia;
	private Vidro vidro;
	private Blindadora blindadora;
	private Veiculo veiculo;
	private String[] agregados;
	
	public String getDataBlindagem() {
		return dataBlindagem;
	}
	public void setDataBlindagem(String dataBlindagem) {
		this.dataBlindagem = dataBlindagem;
	}
	public String getDataVencimentoGarantia() {
		return dataVencimentoGarantia;
	}
	public void setDataVencimentoGarantia(String dataVencimentoGarantia) {
		this.dataVencimentoGarantia = dataVencimentoGarantia;
	}
	public Vidro getVidro() {
		return vidro;
	}
	public void setVidro(Vidro vidro) {
		this.vidro = vidro;
	}
	public Blindadora getBlindadora() {
		return blindadora;
	}
	public void setBlindadora(Blindadora blindadora) {
		this.blindadora = blindadora;
	}
	public Veiculo getVeiculo() {
		return veiculo;
	}
	public void setVeiculo(Veiculo veiculo) {
		this.veiculo = veiculo;
	}
	public String[] getAgregados() {
		return agregados;
	}
	public void setAgregados(String[] agregados) {
		this.agregados = agregados;
	}
}

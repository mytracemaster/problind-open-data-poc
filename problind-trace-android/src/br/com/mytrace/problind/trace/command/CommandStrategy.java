package br.com.mytrace.problind.trace.command;

import android.content.Context;

/**
 * Strategy de execucao de comandos provenientes do client Web
 * 
 * @author dinterliche
 * 
 */
public interface CommandStrategy {

	/**
	 * Encapsula logia de execucao de um comando
	 * 
	 * @param data
	 *            parametros necessarios para execucao do comando
	 */
	void execute();

	/**
	 * 
	 * @param context
	 *            o contexto da Activity em execucao no momento da execucao do
	 *            comando
	 */
	void setContext(Context context);

}

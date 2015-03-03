package br.com.mytrace.problind.trace.command;


/**
 * Executa o comando proveniente da app web de acordo com a estrategia de
 * execucao definida em parametro
 * 
 * @author dinterliche
 * 
 */
public class CommandRunner {

	/**
	 * Excuta um comando
	 * 
	 * @param commandStrategy
	 *            Estrategia de execucao do comando
	 */
	public void run(CommandStrategy commandStrategy) {
		commandStrategy.execute();
	}

}

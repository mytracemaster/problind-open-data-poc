package br.com.mytrace.problind.trace.util;

public class UrlFormatter {
	
	
	public static String filterUrlParameters(String url){
		String[] tokens = url.split("\\?");
		return tokens[0];
	}

}

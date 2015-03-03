package br.com.mytrace.problind.trace;

import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Implementacao do client da webview especifica e customizada para o problind.
 * Esta classe também possui a responsabilidade de interceptar as URLs
 * carregadas na webview, detectar as funcoes javascript que devem ser acionadas
 * no client WEB
 * 
 * @author dinterliche
 * 
 */
public class ProblindWebViewClient extends WebViewClient {

	private final String TAG = ProblindWebViewClient.class.toString();

	@Override
	public boolean shouldOverrideUrlLoading(WebView view, String url) {
		Log.d(TAG, String.format("Loading URL <%s>", url));
		
		Log.d(TAG, String.format("Verificando conectividade do dispositivo...", url));
		
		view.loadUrl(url);
		return true;
	}
	
	@Override
	public void onLoadResource(WebView view, String url) {
		super.onLoadResource(view, url);
	}
	
	@Override
	public void onReceivedError(WebView view, int errorCode,
			String description, String failingUrl) {
		//TODO tratar caso de erro 404 ou sistema indisponivel
		super.onReceivedError(view, errorCode, description, failingUrl);
	}
}

package br.com.mytrace.problind.trace.command;

import android.content.Context;
import android.content.Intent;
import android.webkit.JavascriptInterface;
import br.com.mytrace.problind.trace.activity.QrCodeCaptureActivity;
import br.com.mytrace.problind.trace.activity.WebProviderActivity;

/**
 * Classe que encapsula operacoes Javascripts proveniente da aplicaçao Web
 * 
 * @author dinterliche
 * 
 */
public class JavaScriptHandler {

	private Context context;

	public JavaScriptHandler(WebProviderActivity parentActivity) {
		context = parentActivity;
	}

	@JavascriptInterface
	public String obtemCodigoBlindagem() {
		WebProviderActivity caller = (WebProviderActivity) context;
		return caller.getCodBlindagem();
	}

	@JavascriptInterface
	public void handleError(String errorMsg) {
		WebProviderActivity caller = (WebProviderActivity) context;

		Intent i = new Intent(caller,
				QrCodeCaptureActivity.class);
		i.putExtra(QrCodeCaptureActivity.KEY_INTENT_EXTRA_ERROR_MSG, errorMsg);
		
		caller.startActivity(i);
		
		caller.finish();
	}

}

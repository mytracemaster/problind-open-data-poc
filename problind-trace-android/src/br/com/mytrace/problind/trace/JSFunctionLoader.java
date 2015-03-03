package br.com.mytrace.problind.trace;

import android.webkit.WebView;

public class JSFunctionLoader {

	public static final String JS_FUNCTION_HANDLE_CAPTURED_CODE = "js_handleCapturedCode";

	private WebView view;

	public JSFunctionLoader(WebView view) {
		this.view = view;
	}
	
	public void handleCapturedCode(String code) {
		view.loadUrl("javascript:handleCapturedCode('" + code + "')");
	}

}

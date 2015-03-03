package br.com.mytrace.problind.trace.activity;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;
import android.webkit.WebView;
import br.com.mytrace.problind.trace.ProblindWebViewClient;
import br.com.mytrace.problind.trace.R;
import br.com.mytrace.problind.trace.command.JavaScriptHandler;
import br.com.mytrace.problind.trace.util.NetworkUtil;

/**
 * Activity responsavel por prover container/web widget. Alem de carregar a
 * webview, atua como um direcionador de chamadas proveniente da Web
 * 
 * @author dinterliche
 * 
 */
public class WebProviderActivity extends Activity {

	public static final String DESTINO_PARAM = "DESTINO";
	public static final String RESULT_CODE_PARAM = "RESULT";
	public static final String RESULT_FORMAT_PARAM = "SCAN_RESULT_FORMAT";

	public static final Integer FILECHOOSER_RESULTCODE = 2;
	public static final Integer QRCAPTURE_RESULTCODE = 1;

	public static final String CODE_WEB_PARAM = "codigo";

	private static final String PROBLIND_TRACE_URL = "http://web-problindtrace.rhcloud.com/carregar";
	// private static final String PROBLIND_TRACE_URL =
	// "http://192.168.0.28:8080/problind-trace-web/carregar";

	private final String TAG = WebProviderActivity.class.toString();
	private WebView webView;
	private boolean isDeviceOffline = false;

	/**
	 * Codigo de barras capturado na leitura
	 */
	private String codBlindagem;

	@SuppressLint("SetJavaScriptEnabled")
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.activity_web);

//		getWindow().setFeatureInt(Window.FEATURE_CUSTOM_TITLE,
//				R.layout.header_tile);

		this.codBlindagem = (String) this.getIntent().getExtras()
				.get(QrCodeCaptureActivity.CAPTURED_CODE);

		Log.d(TAG, "Iniciando carregamento da webview...");

		if (!NetworkUtil.isNetworkAvailable(this)) {
			isDeviceOffline = true;
			new AlertDialog.Builder(this)
					.setTitle("Atenção")
					.setMessage(
							"Não foi possível consultar os dados por que seu dispositivo encontra-se offline."
									+ " Verifique suas configurações de rede e tente novamente.")
					.setPositiveButton(android.R.string.ok,
							new DialogInterface.OnClickListener() {
								public void onClick(DialogInterface dialog,
										int which) {
									callQrActivity();
								}
							}).setIcon(android.R.drawable.ic_dialog_alert)
					.show();
		}else{
			isDeviceOffline = false;
		}
		Log.d(TAG, "Carregado configuracoes da webview...");

		if (!isDeviceOffline) {
			webView = (WebView) findViewById(R.id.webview_view);
			webView.setWebViewClient(new ProblindWebViewClient());
			webView.setVerticalScrollBarEnabled(true);
			webView.setHorizontalScrollBarEnabled(true);
			webView.getSettings().setAllowFileAccess(true);
			webView.getSettings().setAppCacheEnabled(true);
			webView.getSettings().setJavaScriptEnabled(true);
			webView.getSettings().setAllowFileAccess(true);
			webView.clearCache(true);
			webView.addJavascriptInterface(new JavaScriptHandler(this),
					"JavaScriptHandler");

			webView.loadUrl(PROBLIND_TRACE_URL);
			Log.d(TAG, "Webview carregada com sucesso.");
		} else {
			Log.d(TAG, "Dispositivo OFFLINE. Webview nao sera carregada");
		}
	}

	private void callQrActivity() {
		Intent i = new Intent(this, QrCodeCaptureActivity.class);
		startActivity(i);

		finish();
	}

	@Override
	public void onBackPressed() {
		callQrActivity();
	}

	public String getCodBlindagem() {
		return codBlindagem;
	}

	public void setCodBlindagem(String codBlindagem) {
		this.codBlindagem = codBlindagem;
	}
}

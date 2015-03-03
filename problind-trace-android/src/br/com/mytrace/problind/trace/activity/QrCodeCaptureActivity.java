package br.com.mytrace.problind.trace.activity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import br.com.mytrace.problind.trace.R;

import com.google.zxing.Result;
import com.google.zxing.client.android.CaptureActivity;

/**
 * Activity que trata captura/leitura/codificação de codigos de barra
 * 
 * @author dinterliche
 * 
 */
// TODO definir em properties os tipos de codigos de barras que devem ser
// tratados
public class QrCodeCaptureActivity extends CaptureActivity {

	public static final String KEY_INTENT_EXTRA_ERROR_MSG = "error.msg";

	public static final int CAPTURE_CODE_REQUEST = 0;
	public static final String CALLBACK_DESTINO_PARAM = "CALLBACK_DESTINO";
	public static final String CALLBACK_STRATEGY_PARAM = "STRATEGY";

	public static final String STRATEGY_BLINDAGEM = "blindagem";
	public static final String STRATEGY_CHECKLIST = "checklist";

	public static final String CAPTURED_CODE = "CAPTURED_CODE";

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.capture);

		final Bundle extras = this.getIntent().getExtras();
		if (extras != null) {
			final String errorMsg = (String) extras
					.get(KEY_INTENT_EXTRA_ERROR_MSG);
			if (errorMsg != null && !errorMsg.isEmpty()) {
				exibirAlertaDeErro(errorMsg);
			}
		}
	}

	@Override
	public void handleDecode(Result rawResult, Bitmap barcode, float scaleFactor) {
		String codBarras = rawResult.getText();
		if (validateCode(codBarras)) {

			final Intent intent = new Intent(this, WebProviderActivity.class);
			intent.putExtra(CAPTURED_CODE, rawResult.getText());

			this.startActivity(intent);
			finish();
		} else {
			// TODO
		}
	}

	private boolean validateCode(String codBarras) {
		// TODO
		return true;
	}

	private void exibirAlertaDeErro(String msg) {

		new AlertDialog.Builder(this)
				.setTitle("Erro detectado na leitura")
				.setMessage(msg)
				.setPositiveButton(android.R.string.ok,
						new DialogInterface.OnClickListener() {
							public void onClick(DialogInterface dialog,
									int which) {
							}
						}).setIcon(android.R.drawable.ic_dialog_alert).show();
	}
}

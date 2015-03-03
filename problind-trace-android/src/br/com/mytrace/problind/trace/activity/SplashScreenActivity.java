package br.com.mytrace.problind.trace.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.Window;
import br.com.mytrace.problind.trace.R;

/**
 * Renderiza Splash Screen e direciona para tela principal
 * 
 * @author dinterliche
 * 
 */
public class SplashScreenActivity extends Activity{
	
	// Splash screen timer
    private static int SPLASH_TIME_OUT = 3000;
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.splash_activity);
 
        new Handler().postDelayed(new Runnable() {
 
            @Override
            public void run() {
                Intent i = new Intent(SplashScreenActivity.this, QrCodeCaptureActivity.class);
                startActivity(i);
 
                finish();
            }
        }, SPLASH_TIME_OUT);
    }

}

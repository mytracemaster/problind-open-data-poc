package br.com.mytrace.problind.trace.util;

import android.app.AlertDialog;
import android.content.Context;

public class MessageUtil {
	
	public static void showAlertOffline(Context context){
		 AlertDialog.Builder dlgAlert  = new AlertDialog.Builder(context);

         dlgAlert.setMessage("Verifique suas configura��es de rede e tente novamente.");
         dlgAlert.setTitle("Seu dispositivo continua offline!");
         dlgAlert.setPositiveButton("OK", null);
         dlgAlert.setCancelable(true);
         dlgAlert.create().show();
	}

}

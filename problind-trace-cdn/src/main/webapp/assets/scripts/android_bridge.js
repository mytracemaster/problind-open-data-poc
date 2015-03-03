var AndroidBridge = function() {

	return {

		init : function() {
		},

		isAndroidWebView : function() {
			var ua = navigator.userAgent.toLowerCase();
			return ua.indexOf('problind') > -1;
		},
		obtemCodigoBlindagem : function() {
			return window.JavaScriptHandler.obtemCodigoBlindagem();
		},
		handleError : function(errorMsg) {
			window.JavaScriptHandler.handleError(errorMsg);
		},
	};

}();
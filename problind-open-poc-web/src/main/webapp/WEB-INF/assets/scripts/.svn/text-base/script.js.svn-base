// JavaScript Document
function displayObject(obj,action){
	_obj = document.getElementById(obj);
	if(action=='true'){
		_obj.style.display ='';
	}else if(action=='false'){
		_obj.style.display ='none';
	}
}

function moeda(z){  
	v = z.value;
	v = v.replace(/\D/g,"");  //permite digitar apenas n�meros
	v = v.replace(/[0-9]{12}/,"invalido");   //limita pra m�ximo 999.999.999,99
	v = v.replace(/(\d{1})(\d{8})$/,"$1.$2");  //coloca ponto antes dos �ltimos 8 digitos
	v = v.replace(/(\d{1})(\d{5})$/,"$1.$2");  //coloca ponto antes dos �ltimos 5 digitos
	v = v.replace(/(\d{1})(\d{1,2})$/,"$1,$2");        //coloca virgula antes dos �ltimos 2 digitos
	z.value = v;
}

function buscarEndereco(cep){
	
	  cep = cep.replace(/\D/g,"");
	  url="http://cep.correiocontrol.com.br/"+cep+".json";
	  
	  App.blockUI({boxed: true});

		var formURL = url;
		
		$.ajax({ 
			url: formURL, 
			type: 'GET', 
			dataType: 'JSON',
		}).done(function(valor, textStatus, jqXHR) {
			
			if (valor.erro) {
				alert('Cep n\u00e3o encontrado.');
				document.getElementById('endereco').value='';
				document.getElementById('bairro').value='';
				new dgCidadesEstados({
					  estado: document.getElementById('estado'),
					  cidade: document.getElementById('cidade'),
					  change: true
					});
				return;
			};
			
			var maxLenEndereco = $('#endereco').attr('maxlength');
			var maxLenBairro = $('#bairro').attr('maxlength');
			
			document.getElementById('endereco').value=valor.logradouro.substring(0, maxLenEndereco - 1);
			document.getElementById('bairro').value=valor.bairro.substring(0, maxLenBairro - 1);

			new dgCidadesEstados({
				  estado: document.getElementById('estado'),
				  estadoVal: valor.uf,
				  cidade: document.getElementById('cidade'),
				  cidadeVal: valor.localidade,
				  change: true
				});
			
			App.unblockUI();
				
		}).fail(function(jqXHR, textStatus, errorThrown) { 
			//alert('Erro: ' + errorThrown);
			App.unblockUI();
		}); 
	  
}

function buscarEnderecoCep(cep){
	
	  cep = cep.replace(/\D/g,"");
	  url="http://cep.correiocontrol.com.br/"+cep+".js";
	  s=document.createElement('script');
	  s.setAttribute('charset','utf-8');
	  s.src=url;
	  document.querySelector('head').appendChild(s);
	  
}

function correiocontrolcep(valor){
	if (valor.erro) {
		alert('Cep n\u00e3o encontrado.');
		document.getElementById('endereco').value='';
		document.getElementById('bairro').value='';
		new dgCidadesEstados({
			  estado: document.getElementById('estado'),
			  cidade: document.getElementById('cidade'),
			  change: true
			});
		return;
	};
	
	var maxLenEndereco = $('#endereco').attr('maxlength');
	var maxLenBairro = $('#bairro').attr('maxlength');
	
	document.getElementById('endereco').value=valor.logradouro.substring(0, maxLenEndereco - 1);
	document.getElementById('bairro').value=valor.bairro.substring(0, maxLenBairro - 1);

	new dgCidadesEstados({
		  estado: document.getElementById('estado'),
		  estadoVal: valor.uf,
		  cidade: document.getElementById('cidade'),
		  cidadeVal: valor.localidade,
		  change: true
		});
	
}

function somenteNumeros(z){  
	v = z.value;
	v = v.replace(/\D/g,"");  //permite digitar apenas numeros
	z.value = v;
}

function validaCPF(cpf){ 

        var cpfv  = jQuery.trim(cpf);
        
        if(cpfv.length == 14 || cpfv.length == 11){
            cpfv = cpfv.replace('.', '');
            cpfv = cpfv.replace('.', '');
            cpfv = cpfv.replace('-', '');
  
            var nonNumbers = /\D/;
    
            if(nonNumbers.test(cpfv)){
                return false;
            }else{
                if (cpfv == "00000000000" ||
                    cpfv == "11111111111" ||
                    cpfv == "22222222222" ||
                    cpfv == "33333333333" ||
                    cpfv == "44444444444" ||
                    cpfv == "55555555555" ||
                    cpfv == "66666666666" ||
                    cpfv == "77777777777" ||
                    cpfv == "88888888888" ||
                    cpfv == "99999999999") {
                	return false;
                }
                var a = [];
                var b = new Number;
                var c = 11;
  
                for(i=0; i<11; i++){
                    a[i] = cpfv.charAt(i);
                    if (i < 9) b += (a[i] * --c);
                }
                if((x = b % 11) < 2){
                    a[9] = 0
                }else{
                    a[9] = 11-x
                }
                b = 0;
                c = 11;
                for (y=0; y<10; y++) b += (a[y] * c--);
    
                if((x = b % 11) < 2){
                    a[10] = 0;
                }else{
                    a[10] = 11-x;
                }
                if((cpfv.charAt(9) != a[9]) || (cpfv.charAt(10) != a[10])){
                	return false;
                }
            }
        }else{
            if(cpfv.length == 0){
                return false;
            }else{
            	return false;
            }
        }
        
        return true;

}

function validaCNPJ(cnpj) {
	
	   cnpj = jQuery.trim(cnpj);// retira espacos em branco
	   // DEIXA APENAS OS NUMEROS
	   cnpj = cnpj.replace('/','');
	   cnpj = cnpj.replace('.','');
	   cnpj = cnpj.replace('.','');
	   cnpj = cnpj.replace('-','');
	 
	   var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
	   digitos_iguais = 1;
	 
	   if (cnpj.length < 14 && cnpj.length < 15){
	      return false;
	   }
	   for (i = 0; i < cnpj.length - 1; i++){
	      if (cnpj.charAt(i) != cnpj.charAt(i + 1)){
	         digitos_iguais = 0;
	         break;
	      }
	   }
	 
	   if (!digitos_iguais){
	      tamanho = cnpj.length - 2
	      numeros = cnpj.substring(0,tamanho);
	      digitos = cnpj.substring(tamanho);
	      soma = 0;
	      pos = tamanho - 7;
	 
	      for (i = tamanho; i >= 1; i--){
	         soma += numeros.charAt(tamanho - i) * pos--;
	         if (pos < 2){
	            pos = 9;
	         }
	      }
	      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	      if (resultado != digitos.charAt(0)){
	         return false;
	      }
	      tamanho = tamanho + 1;
	      numeros = cnpj.substring(0,tamanho);
	      soma = 0;
	      pos = tamanho - 7;
	      for (i = tamanho; i >= 1; i--){
	         soma += numeros.charAt(tamanho - i) * pos--;
	         if (pos < 2){
	            pos = 9;
	         }
	      }
	      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	      if (resultado != digitos.charAt(1)){
	         return false;
	      }
	      return true;
	   }else{
	      return false;
	   }

}

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 * http://blog.stevenlevithan.com/archives/date-time-format
 */

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    isoDateBrasil:  "dd/mm/yyyy"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

$.ajaxSetup({  
	contentType: "application/x-www-form-urlencoded;charset=UTF-8"  
});
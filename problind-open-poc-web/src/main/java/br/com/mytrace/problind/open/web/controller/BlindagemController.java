package br.com.mytrace.problind.open.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BlindagemController {
	
	@RequestMapping("/blindagem/detalhe")
	public String index(){
		return "blindagem/detalhe";
	}

}

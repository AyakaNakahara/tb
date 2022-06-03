package com.example.tb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ShainController {

	@GetMapping("/shain_all")
	public String shainAll() {
		return "shain_all";
	}

}

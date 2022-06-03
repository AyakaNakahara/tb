package com.example.tb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MonthlyController {

	@GetMapping("/monthly_salto")
	public String monthly() {
		return "monthly";
	}

}

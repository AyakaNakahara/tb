package com.example.tb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HistoryController {

	@GetMapping("/history")
	public String history() {
		return "history";
	}

}

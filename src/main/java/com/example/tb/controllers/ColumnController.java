package com.example.tb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ColumnController {

	@GetMapping("/column4")
	public String column4() {
		return "column4";
	}

	@GetMapping("/column5")
	public String column5() {
		return "column5";
	}

	@GetMapping("/column6")
	public String column6() {
		return "column6";
	}

}

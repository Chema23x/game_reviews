package com.gamereview.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@GetMapping
	public String function() {
	    System.out.println("Hola desde el controlador");
	    return "Hola desde el controlador"; // Retorna un mensaje al cliente
	}
}

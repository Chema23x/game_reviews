package com.gamereview.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long user_id;
	
	@Column(nullable = false)
	private String user_name;
	
	@Column(nullable = false)
	private String user_password;
	
	@Column(nullable = false)
	private String user_phone;
	
	@Column(nullable = false, unique = true)
	private String user_email;
}

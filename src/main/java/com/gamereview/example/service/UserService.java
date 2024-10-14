package com.gamereview.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamereview.example.model.User;
import com.gamereview.example.repository.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	 public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }
	
}

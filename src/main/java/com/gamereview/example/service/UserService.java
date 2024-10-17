package com.gamereview.example.service;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gamereview.dto.LoginRequest;
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

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUserOptional = userRepository.findById(id);
        
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            existingUser.setUserEmail(updatedUser.getUserEmail());
            existingUser.setUserName(updatedUser.getUserName());
            existingUser.setUserPassword(updatedUser.getUserPassword());
            existingUser.setUserPhone(updatedUser.getUserPhone());
            
            return userRepository.save(existingUser);
        } else {
            throw new IllegalArgumentException("Usuario no encontrado con id: " + id);
        }
    }

	public User getUser(LoginRequest loginRequest) {
		Optional<User> existingUserOptional = userRepository.findByUserName(loginRequest.getUsername());
		if(existingUserOptional.isPresent()) {
			User existingUser = existingUserOptional.get();
			
			if(existingUser.getUserPassword().equals(loginRequest.getPassword())) {				
				return existingUser;
			}else {
				throw new IllegalArgumentException("Credenciales inválidas");
			}
		}
		else {
            throw new IllegalArgumentException("Credenciales inválidas");
        }
	}


	
}

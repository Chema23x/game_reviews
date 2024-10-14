package com.gamereview.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gamereview.example.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
}
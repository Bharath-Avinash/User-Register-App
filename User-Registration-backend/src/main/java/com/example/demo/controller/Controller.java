package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.UserService;
import com.example.demo.entity.User;
@CrossOrigin
@RestController
public class Controller {

	@Autowired
	UserService service;
	
	@PostMapping("/save-user")
	public String SaveUser(@RequestBody User user) {
		
		return service.saveUser(user);
		
	}
	@GetMapping("/all-users")
	public List<User> getAllUser(){
		
		return service.getAllUser();
	}
	@GetMapping("/delete/{username}")
	public List<User> deleteUser(@PathVariable String username) {
		return this.service.deleteUser(username);
		
	}
}

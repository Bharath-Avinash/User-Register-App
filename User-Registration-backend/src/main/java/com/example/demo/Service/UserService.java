package com.example.demo.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.HobbiesRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepo;
	@Autowired
	HobbiesRepository hobbiesRepo;
	
	
	public String saveUser(User user) {
		
		this.userRepo.save(user);
		return "User saved";
	}
	
	public List<User> getAllUser() {
		
		return this.userRepo.findAll();
	}
	@Transactional
	public List<User> deleteUser(String userName) {
List<	User> user=	userRepo.deleteByUsername(userName);
	System.out.println(user);
		return userRepo.findAll();
		
		
	}
	
	
	

}

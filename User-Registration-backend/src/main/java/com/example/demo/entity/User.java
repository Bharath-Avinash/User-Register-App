package com.example.demo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	
	
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", username=" + username + ", age=" + age + ", gender=" + gender
				+ ", address=" + address + ", hobbies=" + hobbies + "]";
	}
	String username;
	String age;
	String gender;
	String address;
	@OneToMany( cascade = CascadeType.ALL)
	@JoinColumn(name="user")
	List<Hobbies> hobbies;
	public User() {
		super();
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public List<Hobbies> getHobbies() {
		return hobbies;
	}
	public void setHobbies(List<Hobbies> hobbies) {
		this.hobbies = hobbies;
	}
	

}

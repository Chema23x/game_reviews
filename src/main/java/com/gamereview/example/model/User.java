package com.gamereview.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User") 
public class User {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, name = "user_name")
	private String userName;
	
	@Column(nullable = false, name = "user_password")
	private String userPassword;
	
	@Column(nullable = false, name = "user_phone")
	private String userPhone;
	
	@Column(nullable = false, unique = true, name = "user_email")
	private String userEmail;
	
	protected User() {}

	/**
	 * @param id
	 * @param userName
	 * @param userPassword
	 * @param userPhone
	 * @param userEmail
	 */
	public User(Long id, String userName, String userPassword, String userPhone, String userEmail) {
		super();
		this.id = id;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userPhone = userPhone;
		this.userEmail = userEmail;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", userPassword=" + userPassword + ", userPhone="
				+ userPhone + ", userEmail=" + userEmail + "]";
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setid(Long id) {
		this.id = id;
	}

	/**
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the userPassword
	 */
	public String getUserPassword() {
		return userPassword;
	}

	/**
	 * @param userPassword the userPassword to set
	 */
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	/**
	 * @return the userPhone
	 */
	public String getUserPhone() {
		return userPhone;
	}

	/**
	 * @param userPhone the userPhone to set
	 */
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	/**
	 * @return the userEmail
	 */
	public String getUserEmail() {
		return userEmail;
	}

	/**
	 * @param userEmail the userEmail to set
	 */
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}


	
	
	
}

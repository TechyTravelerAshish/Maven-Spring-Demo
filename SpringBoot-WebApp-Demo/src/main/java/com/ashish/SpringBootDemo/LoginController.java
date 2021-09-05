package com.ashish.SpringBootDemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController 
{
	@RequestMapping("/home")
	public String login()
	{		
		System.out.println("Inside LoginController");
		return "HomePage.jsp";		
	}

}

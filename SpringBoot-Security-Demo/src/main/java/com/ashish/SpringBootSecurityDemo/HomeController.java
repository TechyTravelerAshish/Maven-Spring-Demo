package com.ashish.SpringBootSecurityDemo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController 
{
	@RequestMapping("/")
	public String home()
	{		
		//return "index.jsp";
		System.out.println("Inside HomeController home()");
		return "HomePage.jsp";  // Commenting to test suffix configured in application.properties file
	}

	@RequestMapping("/homepage")
	public String homepage()
	{		
		//return "index.jsp";
		System.out.println("Inside HomeController homepage()");
		return "HomePage.jsp";  // Commenting to test suffix configured in application.properties file
	}
	
	
	
	
	//---username - user
	// passwrod - look in console logs
}

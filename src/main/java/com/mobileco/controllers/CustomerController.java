package com.mobileco.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mobileco.exceptions.MobilecoException;
import com.mobileco.model.Customer;
import com.mobileco.services.CustomerService;
import com.mobileco.util.SecurePassword;

@Controller
public class CustomerController {
	
	public CustomerController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired(required=true)
	private CustomerService customerService;
	
	@GetMapping("/home")
	public ModelAndView homepage(HttpSession session) {
		ModelAndView view = new ModelAndView("homepage");
		Object object = session.getAttribute("login-user");
		if(object != null){
			Customer customer = (Customer) object;
			view.addObject("success", customer.getName());
		}
		return view;
	}  
	
	@GetMapping("/logout")
	public ModelAndView logout(HttpSession session) {
		ModelAndView view = new ModelAndView("homepage");
		session.invalidate();
		return view;
	} 

	@GetMapping("/signuppage")
	public String signuppage() {
		return "signuppage";
	}  


	@GetMapping("/loginpage")
	public String loginpage() {
		return "loginpage";
	}  
	

	@GetMapping("/homepage")
	public String homepage() {
		return "homepage";
	}  
	

	@GetMapping("/searchlistresult")
	public String searchlistresult() {
		return "searchlistresult";
	}  

	
	@PostMapping("/login")
	public ModelAndView login(Customer customer, HttpSession session)
	{
		String view = "loginpage";
		customer.setPassword (SecurePassword.encrypt(customer.getPassword()));
		ModelAndView mav=null;
		Customer loggedCustomer = customerService.loginCheck(customer);
		
		if(loggedCustomer != null)
		{
			view = "homepage";
			mav = new ModelAndView(view);
			mav.addObject("success",loggedCustomer.getName());
			session.setAttribute("login-user", loggedCustomer);
		}
		
		else{
			mav = new ModelAndView(view);
			mav.addObject("error","Please enter correct credentials ");
		}
		
		return mav;
	}
	
	@PostMapping("/signme")
	public ModelAndView signup(Customer customer, HttpSession session) {
	
		
		String view = "signuppage";
		ModelAndView mav = null;
		Customer loggedInUser = customerService.loginCheck(customer);
		customer.setPassword ( SecurePassword.encrypt(customer.getPassword()));

		try {
			if(loggedInUser != null)
			{
				mav = new ModelAndView(view);
				mav.addObject("existing","User with email id "+customer.getName()+" already exist");
				
			}
			else{
				int custId=customerService.registerCustomer(customer);
				loggedInUser=new Customer();
				loggedInUser.setId(custId);
				view="homepage";
				mav = new ModelAndView(view);
				mav.addObject("success",customer.getName());
				session.setAttribute("login-user", loggedInUser);
				
			}
		} 
		
		catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return mav;
	}
	
}

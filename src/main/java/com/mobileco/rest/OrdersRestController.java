package com.mobileco.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mobileco.exceptions.MobilecoException;
import com.mobileco.model.CartResponseModel;
import com.mobileco.model.Customer;
import com.mobileco.model.Orders;
import com.mobileco.services.OrdersService;

@RestController
public class OrdersRestController {

	@Autowired
	private OrdersService ordersService;
	
	public OrdersRestController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/orders/all")
	public List<Orders> getAllOrders(HttpSession session)
	{
		Customer customer=(Customer)session.getAttribute("login-user");
		System.out.println(customer);
		return ordersService.getAllOrders(customer);
	}
	
	@GetMapping("/orders/pending")
	public List<Orders> getPendingOrders(HttpSession session)
	{
		Customer customer=(Customer)session.getAttribute("login-user");
		System.out.println(customer);
		return ordersService.getPendingOrders(customer);
	}
	
	@PostMapping("/placeorder")
	public Map<String, String> placeOrder(@RequestBody CartResponseModel response, HttpSession session){
		Map<String, String> result = new HashMap<>();
		String msg = "Order Placed";
		
		if(response.getResults().size() <=0
				|| response.getResults() == null){
			msg = "Oops! Something went wrong";
		}
		
		else{
			Customer customer = (Customer) session.getAttribute("login-user");
			if(customer == null)
				msg = "Please login to continue";
			else{
				try {
					ordersService.placeOrder(response.getResults(), customer);
				} catch (MobilecoException e) {
					// TODO Auto-generated catch block
					msg = e.getMessage();
					e.printStackTrace();
				}
			}
		}
		result.put("message", msg);
		return result;
	}
}

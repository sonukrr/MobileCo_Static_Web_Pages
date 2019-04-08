package com.mobileco.rest;



import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mobileco.exceptions.MobilecoException;
import com.mobileco.model.Cart;
import com.mobileco.model.CartResponseModel;
import com.mobileco.model.Customer;
import com.mobileco.services.CartService;

@RestController
public class CartRestController {

	@Autowired(required=true)
	private CartService cartService;
	
	@PostMapping("/addtocart")
	public CartResponseModel addtoCart(@RequestBody Cart cart, HttpSession session){
		Customer customer = (Customer) session.getAttribute("login-user");
		System.out.println("REST: " + customer + " " +cart);
		if(customer == null){
			return new CartResponseModel("Please Login to buy items.", null);
		}
		
		try {
			return new CartResponseModel("Item Added to cart :)", cartService.addToCart(customer, cart.getProduct()));
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new CartResponseModel(e.getMessage(),null);
		}
		
	}
	
	@PostMapping("/updatecart")
	public CartResponseModel updateCart(@RequestBody Cart cart, HttpSession session){
		Customer customer = (Customer) session.getAttribute("login-user");
		System.out.println("REST UPDATE: " + customer + " " +cart);
		if(customer == null){
			return new CartResponseModel("Please Login to buy items.", null);
		}
		cart.setCustomer(customer);
		
		try {
			int orderQuantity = cart.getOrderQuantity();
			int stockQuantity = cart.getProduct().getQuantity();
			
			if(orderQuantity <= 0)
				return new CartResponseModel("Quantity can't be less than or Zero.", null);
			
			if(orderQuantity > stockQuantity)
				return new CartResponseModel("You exceeded stock Quantity, you can only order max: "+stockQuantity+" quantity for this item", null);
			
			return new CartResponseModel(null,
					cartService.updateCartQuantity(cart));
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new CartResponseModel(e.getMessage(), null);
		}
	}

	@PostMapping("/removecartitem")
	public CartResponseModel removeCartItem(@RequestBody Cart cart, HttpSession session){
		Customer customer = (Customer) session.getAttribute("login-user");
		System.out.println("REST UPDATE: " + customer + " " +cart);
		if(customer == null){
			return new CartResponseModel("Please Login to buy items.", null);
		}
		cart.setCustomer(customer);
		try {
			return new CartResponseModel(null,
					cartService.removeFromCart(cart));
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new CartResponseModel(e.getMessage(), null);
		}
	}
	
	@GetMapping("/cartitems")
	public CartResponseModel getItemsInCart(HttpSession session){
		Customer customer = (Customer) session.getAttribute("login-user");
		System.out.println(customer);
		if(customer == null)
			return new CartResponseModel("Please Login to buy items.", null);
		
		try {
			return new CartResponseModel(null, cartService.getItemsInCart(customer));
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new CartResponseModel(e.getMessage(), null);
		}
	}
	
	
	
}

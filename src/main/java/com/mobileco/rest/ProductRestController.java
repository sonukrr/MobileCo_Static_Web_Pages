package com.mobileco.rest;

//Author: Abhishek Kumar

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mobileco.exceptions.MobilecoException;
import com.mobileco.model.Product;
import com.mobileco.services.ProductService;

@RestController
public class ProductRestController {

	@Autowired(required=true)
	private ProductService service;
	
	@GetMapping("/items")
	public List<Product> getItem(){		
		
		try {
			return service.getAllProducts(null);
		} 
		
		catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/items/{str}")
	public List<Product> getAllItems(@PathVariable String str){		
		
		try {
			return service.getAllProducts(str);
		} 
		
		catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/items/mobile")
	public List<Product> getAllMobiles(){
		try {
			return service.getAllMobiles();
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@GetMapping("/items/acc")
	public List<Product> getAllAccessories(){
		try {
			return service.getAllAccessories();
		} catch (MobilecoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
}

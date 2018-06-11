package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.IUserService;

/**
 * 中央控制器
 * @author wangzehua
 *
 */
@Controller
public class MainController {
	@Autowired
	private IUserService userService;
	
	@RequestMapping(value="/")
	public String index(){
		return "index";
	}
	
	@RequestMapping(value="/search")
	public String search(){
		return "search";
	}
	
	@ResponseBody
	@RequestMapping(value="/Json")
	public List<Map<String,Object>> Json(){
		return userService.findAllUser();
	}
	
	@ResponseBody
	@RequestMapping(value="/abc")
	public String abc(){
		return "[{name:petter}]";
	}
}

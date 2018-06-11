package com.example.demo.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.service.IUserService;
@Service
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserMapper userMapper;
	@Override
	public List<Map<String, Object>> findAllUser() {
		// TODO Auto-generated method stub
		return userMapper.findAllUser();
	}

}

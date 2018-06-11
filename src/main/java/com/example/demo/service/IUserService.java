package com.example.demo.service;

import java.util.List;
import java.util.Map;
/**
 * 服务层用户接口
 * @author wangzehua
 *
 */
public interface IUserService {
	/**
	 * 查找所有的用户
	 * @return
	 */
	List<Map<String,Object>> findAllUser();
}

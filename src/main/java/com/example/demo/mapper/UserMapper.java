package com.example.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
/**
 * 
 * @author wangzehua
 * 用户信息Mapper
 */
@Mapper
public interface UserMapper {
	/**
	 * 查找所有的用户
	 * @return
	 */
	List<Map<String,Object>> findAllUser();
}

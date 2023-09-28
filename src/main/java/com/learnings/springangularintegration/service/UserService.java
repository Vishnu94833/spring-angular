package com.learnings.springangularintegration.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.learnings.springangularintegration.entity.Blog;
import com.learnings.springangularintegration.entity.User;

public interface UserService
{
    User saveUser(Map<String,String> request);

    ResponseEntity<List<User>> getAllUsers();

    List<User> findByTitleContainingOrContentContaining(Map<String, String> body);

    User updateUserById(String id, Map<String, String> body);

    User findOne(String id);

    void deleteById(String id);
}

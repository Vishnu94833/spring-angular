package com.learnings.springangularintegration.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.learnings.springangularintegration.entity.Blog;

public interface BlogService
{
    Blog saveUser(Map<String,String> request);

    ResponseEntity<List<Blog>> getAllBlogs();

    List<Blog> findByTitleContainingOrContentContaining(Map<String, String> body);

    Blog updateBlogById(String id, Map<String, String> body);

    Blog findOne(String id);

    void deleteById(String id);
}

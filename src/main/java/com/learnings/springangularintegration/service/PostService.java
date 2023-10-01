package com.learnings.springangularintegration.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.learnings.springangularintegration.model.PostModel;

public interface PostService
{
    ResponseEntity<PostModel> createPost(Map<String, String> body);

    ResponseEntity<List<PostModel>> getAllPosts();
}

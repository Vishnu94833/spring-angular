package com.learnings.springangularintegration.rest;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learnings.springangularintegration.implementation.PostServiceImpl;
import com.learnings.springangularintegration.model.PostModel;
import com.learnings.springangularintegration.repository.PostRepository;

@RestController()
@RequestMapping("/api/v1")
public class PostsController
{
    @Autowired
    PostServiceImpl postService;


    @PostMapping("post")
        public PostModel createPost(@RequestBody Map<String, String> body){
        ResponseEntity<PostModel> responseEntity = postService.createPost(body);
        return responseEntity.getBody();
    }

    @GetMapping("posts")
    public List<PostModel> getPosts(){
        ResponseEntity<List<PostModel>> responseEntity = postService.getAllPosts();
        return responseEntity.getBody();
    }
}

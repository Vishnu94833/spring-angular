package com.learnings.springangularintegration.rest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;

import com.learnings.springangularintegration.constants.PostConstants;
import com.learnings.springangularintegration.implementation.PostServiceImpl;
import com.learnings.springangularintegration.model.FeatureModel;
import com.learnings.springangularintegration.model.PostModel;
import com.learnings.springangularintegration.repository.PostRepository;

class PostsControllerTest
{

    @Spy
    @InjectMocks
    private PostsController postsController;

    @Spy
    private PostServiceImpl postService;

    @Mock
    private PostRepository postRepository;

    @Test
    public void createPost()
    {

        PostModel mockResponse = new PostModel("123456","Vishnu","vkuppan","Premium");
        List<FeatureModel> featureModelList = new ArrayList<>();
        featureModelList.add(new FeatureModel(PostConstants.PREMIUM.name()));
        mockResponse.setFeature(featureModelList);

        doReturn(mockResponse).when(postRepository).save(any());
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("Id","123456");
        requestBody.put("Name","Vishnu");
        requestBody.put("UserName","vkuppan");
        requestBody.put("Category","Premium");



        PostModel response = postsController.createPost(requestBody);

        assertEquals(response,mockResponse);
    }
}
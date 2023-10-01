package com.learnings.springangularintegration.implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.learnings.springangularintegration.constants.PostConstants;
import com.learnings.springangularintegration.model.FeatureModel;
import com.learnings.springangularintegration.model.PostModel;
import com.learnings.springangularintegration.repository.PostRepository;
import com.learnings.springangularintegration.service.PostService;

@Component
public class PostServiceImpl implements PostService
{
    @Autowired
    PostRepository postRepository;

    @Override
    public ResponseEntity<PostModel> createPost(Map<String, String> body)
    {
        PostModel postModelResponse = postRepository.save(getPostModelRequest(body));

        return new ResponseEntity<>(postModelResponse, HttpStatus.OK);
    }

    private static PostModel getPostModelRequest(Map<String, String> body)
    {
        List<FeatureModel> featureList = new ArrayList<>();
        PostModel postModelRequest = new PostModel(body.get("Id"), body.get("Name"), body.get("UserName"),
                body.get("Category"));
        if (body.get("Category").equalsIgnoreCase(PostConstants.PREMIUM.name()))
        {
            featureList.add(new FeatureModel(PostConstants.PREMIUM.name()));
        }
        else
        {
            featureList.add(new FeatureModel(PostConstants.BASIC.name()));
        }

        postModelRequest.setFeature(featureList);
        return postModelRequest;
    }

    @Override
    public ResponseEntity<List<PostModel>> getAllPosts()
    {
        List<PostModel> postModelResponse = postRepository.findAll();

        return new ResponseEntity<>(postModelResponse, HttpStatus.OK);
    }
}

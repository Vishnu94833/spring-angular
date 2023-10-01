package com.learnings.springangularintegration.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document("posts")
public class PostModel
{
    @Id
    @JsonProperty("Id")
    private String id;

    @JsonProperty("Name")
    private String name;
    @JsonProperty("UserName")
    private String userName;
    @JsonProperty("Category")
    private String category;

    @JsonProperty("Features")
    private List<FeatureModel> feature;

    public List<FeatureModel> getFeature()
    {
        return feature;
    }

    public void setFeature(List<FeatureModel> feature)
    {
        this.feature = feature;
    }

    public PostModel(String id, String name, String userName, String category) {
        super();
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.category = category;
    }
}

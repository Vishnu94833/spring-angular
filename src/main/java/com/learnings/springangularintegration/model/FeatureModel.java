package com.learnings.springangularintegration.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document("features")
public class FeatureModel
{
    @JsonProperty("Feature")
    private String feature;

    public FeatureModel(String feature) {
        super();
        this.feature = feature;
    }
}

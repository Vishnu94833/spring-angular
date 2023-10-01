package com.learnings.springangularintegration.constants;

public enum PostConstants
{
    PREMIUM("Premium"),
    BASIC("Basic"),
    ;

    final String constantId;
    PostConstants(String constantId)
    {
        this.constantId = constantId;
    }
}

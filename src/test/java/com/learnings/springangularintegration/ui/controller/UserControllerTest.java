package com.learnings.springangularintegration.ui.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doReturn;

import java.util.Map;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import com.learnings.springangularintegration.config.ProxyProperties;
import com.learnings.springangularintegration.service.UserService;

class UserControllerTest
{

    @Spy
    @InjectMocks
    UserController userController;

    @Spy
    @InjectMocks
    private Environment environment;

    @InjectMocks
    private UserService userService;

    @InjectMocks
    private ProxyProperties proxyProperties;

    @Test
    public void getAllUsers()
    {
    }

    @Test
    public void getBlogById()
    {
    }

    @Test
    public void search()
    {
    }

    @Test
    public void create()
    {
    }

    @Test
    public void update()
    {
    }

    @Test
    public void delete()
    {
    }

    @Test
    public void checkProfile()
    {
        String[] array={"PROD","DEV","STAGE"};
        doReturn(array).when(environment).getActiveProfiles();
        Map responseMap = userController.checkProfile();

        Assertions.assertEquals(responseMap,"");
    }
}
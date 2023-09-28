package com.learnings.springangularintegration.ui.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.learnings.springangularintegration.config.ProxyProperties;
import com.learnings.springangularintegration.entity.Blog;
import com.learnings.springangularintegration.entity.User;
import com.learnings.springangularintegration.service.UserService;

@RestController
@RequestMapping("users")
public class UserController
{

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private ProxyProperties proxyProperties;

    //    @ResponseBody
    //    @RequestMapping(value = "", method = RequestMethod.GET)
    //    public Map<String, String> getUser()
    //    {
    //        Map<String, String> object = new HashMap<String, String>();
    //        object.put("authUrl", proxyProperties.getAuthUrl());
    //        object.put("clientId", proxyProperties.getClientId());
    //        object.put("clientSecret", proxyProperties.getClientSecret());
    //        object.put("url", proxyProperties.getUrl());
    //        object.put("username", proxyProperties.getUsername());
    //        object.put("password", proxyProperties.getPassword());
    //        object.put("organization", proxyProperties.getOrganization());
    //        return object;
    //    }

    @RequestMapping(value = "users", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers()
    {
        logger.info("--getAllBlogs ");
        ResponseEntity<List<User>> response = userService.getAllUsers();
        return response;
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.GET)
    public User getBlogById(@PathVariable String id)
    {
        logger.info("--getBlogById ");
        return userService.findOne(id);
    }

    @RequestMapping(value = "blog/search", method = RequestMethod.POST)
    public List<User> search(@RequestBody Map<String, String> body)
    {

        return userService.findByTitleContainingOrContentContaining(body);
    }

    @RequestMapping(value = "save", method = RequestMethod.POST)
    public User create(@RequestBody Map<String, String> request)
    {
        return userService.saveUser(request);
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.PUT)
    public User update(@PathVariable String id, @RequestBody Map<String, String> body)
    {
        return userService.updateUserById(id, body);
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id)
    {
        userService.deleteById(id);
    }

    @Autowired
    private org.springframework.core.env.Environment environment;
    @GetMapping("/checkProfile")
    public Map checkProfile() {
        Map response = new HashMap();
        String[] activeProfiles = environment.getActiveProfiles();      // it will return String Array of all active profile.
        Boolean isProdEnabled = Arrays.stream(activeProfiles).anyMatch(
                env -> (env.equalsIgnoreCase("PROD")));

        response.put("IsProdEnabled",isProdEnabled);
        return response;
    }

}

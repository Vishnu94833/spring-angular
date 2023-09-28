package com.learnings.springangularintegration.ui.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.learnings.springangularintegration.config.ProxyProperties;
import com.learnings.springangularintegration.entity.Blog;
import com.learnings.springangularintegration.service.BlogService;

@RestController
@RequestMapping("blog")
public class BlogController
{

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private BlogService blogService;

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

    @RequestMapping(value = "blog", method = RequestMethod.GET)
    public ResponseEntity<List<Blog>> getAllBlogs()
    {
        logger.info("--getAllBlogs ");
        ResponseEntity<List<Blog>> response = blogService.getAllBlogs();
        return response;
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.GET)
    public Blog getBlogById(@PathVariable String id)
    {
        logger.info("--getBlogById ");
        return blogService.findOne(id);
    }

    @RequestMapping(value = "blog/search", method = RequestMethod.POST)
    public List<Blog> search(@RequestBody Map<String, String> body)
    {

        return blogService.findByTitleContainingOrContentContaining(body);
    }

    @RequestMapping(value = "blog", method = RequestMethod.POST)
    public Blog create(@RequestBody Map<String, String> request)
    {
        return blogService.saveUser(request);
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.PUT)
    public Blog update(@PathVariable String id, @RequestBody Map<String, String> body)
    {
        return blogService.updateBlogById(id, body);
    }

    @RequestMapping(value = "blog/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id)
    {
        blogService.deleteById(id);
    }

}

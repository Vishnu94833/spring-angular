package com.learnings.springangularintegration.implmentation;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.learnings.springangularintegration.db.BlogRepository;
import com.learnings.springangularintegration.entity.Blog;
import com.learnings.springangularintegration.service.BlogService;

@Component
public class BlogServiceImpl implements BlogService
{

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public Blog saveUser(Map<String, String> request)
    {

        logger.info("--saveUser request: {}",request);

        String title = request.get("title");
        String content = request.get("content");
        Blog response = null;
        try
        {
            response = blogRepository.save(new Blog(title, content));
        }
        catch (Exception e)
        {
            System.out.println(e.toString());
        }
        logger.info("--saveUser response: {}", response);
        return response;
    }

    @Override
    public ResponseEntity<List<Blog>> getAllBlogs()
    {
        List<Blog> list = blogRepository.findAll();
        if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @Override
    public List<Blog> findByTitleContainingOrContentContaining(Map<String,String> body)
    {
        logger.info("--findByTitleContainingOrContentContaining request: {}", body);
        String title = body.get("title");
        String content = body.get("content");
        List<Blog> list = null;
        if (body != null)
        {
            list = blogRepository.findByTitleContainingOrContentContaining(title, content);
        }
        return list;
    }

    @Override
    public Blog updateBlogById(String id, Map<String, String> body)
    {
        Blog updatedResponse = null;
        int blogId = Integer.parseInt(id);
        try
        {
            Blog blog = blogRepository.findById(blogId).get();
            if (blog != null)
            {
                blog.setTitle(body.get("title"));
                blog.setContent(body.get("content"));
            }

            updatedResponse =  blogRepository.save(blog);
        }
        catch (Exception e)
        {
            logger.error(e.getMessage());
        }

        return updatedResponse;
    }

    @Override
    public Blog findOne(String id)
    {
        Blog response = null;

        if (id != null)
        {
            int blogId = Integer.parseInt(id);
            response = blogRepository.findById(blogId).get();
        }
        return response;
    }

    @Override
    public void deleteById(String id)
    {
        if (id != null)
        {
            int blogId = Integer.parseInt(id);
            blogRepository.deleteById(blogId);
        }
    }

}

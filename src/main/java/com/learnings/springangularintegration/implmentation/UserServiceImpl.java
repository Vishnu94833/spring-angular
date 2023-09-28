package com.learnings.springangularintegration.implmentation;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.learnings.springangularintegration.db.UsersRepository;
import com.learnings.springangularintegration.entity.User;
import com.learnings.springangularintegration.service.UserService;

@Component
public class UserServiceImpl implements UserService
{

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UsersRepository usersRepository;

    /**
     *
     * @param request
     * @return
     */
    @Override
    public User saveUser(Map<String, String> request)
    {

        logger.info("--saveUser request: {}", request);

        String userName = "Vishnu";
        String email = "vishnu@vk.com";
        User response = null;
        try
        {
            response = usersRepository.save(new User(userName, email, null, null));
        }
        catch (Exception e)
        {
            System.out.println(e.toString());
        }
        logger.info("--saveUser response: {}", response);
        return response;
    }

    @Override
    public ResponseEntity<List<User>> getAllUsers()
    {
        List<User> list = usersRepository.findAll();
        if (list.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @Override
    public List<User> findByTitleContainingOrContentContaining(Map<String, String> body)
    {
        logger.info("--findByTitleContainingOrContentContaining request: {}", body);
        String title = body.get("title");
        String content = body.get("content");
        List<User> list = null;
        if (body != null)
        {
//                        list = usersRepository.findByTitleContainingOrContentContaining(title, content);
        }
        return list;
    }

    @Override
    public User updateUserById(String id, Map<String, String> body)
    {
        User updatedResponse = null;
        int blogId = Integer.parseInt(id);
        try
        {
            User user = usersRepository.findById(blogId).get();
            if (user != null)
            {
                user.setEmail(body.get("title"));
                user.setPhoneNumber(body.get("content"));
            }

            updatedResponse = usersRepository.save(user);
        }
        catch (Exception e)
        {
            logger.error(e.getMessage());
        }

        return updatedResponse;
    }

    @Override
    public User findOne(String id)
    {
        User response = null;

        if (id != null)
        {
            int blogId = Integer.parseInt(id);
            response = usersRepository.findById(blogId).get();
        }
        return response;
    }

    @Override
    public void deleteById(String id)
    {
        if (id != null)
        {
            int blogId = Integer.parseInt(id);
            usersRepository.deleteById(blogId);
        }
    }

}

package com.learnings.springangularintegration.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.learnings.springangularintegration.dto.ErrorResponseDto;
import com.learnings.springangularintegration.dto.LoginRequestDto;
import com.learnings.springangularintegration.dto.LoginResponseDto;
import com.learnings.springangularintegration.dto.UserCredDto;
import com.learnings.springangularintegration.utils.JwtUtil;

@RestController()
@RequestMapping("/auth")
public class AuthController
{
//    private final AuthenticationManager authenticationManager;
//
//
//    private JwtUtil jwtUtil;
//    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
//        this.authenticationManager = authenticationManager;
//        this.jwtUtil = jwtUtil;
//
//    }

//    @ResponseBody
//    @RequestMapping(value = "/login",method = RequestMethod.POST)
//    public ResponseEntity login(@RequestBody LoginRequestDto loginReq)  {
//
//        try {
//            Authentication authentication =
//                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
//            String email = authentication.getName();
//            UserCredDto user = new UserCredDto(email,"");
//            String token = jwtUtil.createToken(user);
//            LoginResponseDto loginRes = new LoginResponseDto(email,token);
//
//            return ResponseEntity.ok(loginRes);
//
//        }catch (BadCredentialsException e){
//            ErrorResponseDto errorResponse = new ErrorResponseDto(HttpStatus.BAD_REQUEST,"Invalid username or password");
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//        }catch (Exception e){
//            ErrorResponseDto errorResponse = new ErrorResponseDto(HttpStatus.BAD_REQUEST, e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
//        }
//    }

    @GetMapping("login")
    public String helloWorld()  {
        return "Hello World!";
    }
}

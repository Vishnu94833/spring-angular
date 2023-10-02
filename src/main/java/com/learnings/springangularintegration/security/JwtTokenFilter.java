package com.learnings.springangularintegration.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.learnings.springangularintegration.implementation.UserDetailsServiceImpl;
import com.learnings.springangularintegration.model.User;
import com.learnings.springangularintegration.utils.JwtUtil;

@Component
public class JwtTokenFilter extends OncePerRequestFilter
{
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//            HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException
//    {
//
//        if (!hasAuthorizationBearer(request)) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String token = getAccessToken(request);
//
//        if (!jwtUtil.validateAccessToken(token)) {
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        setAuthenticationContext(token, request);
//        filterChain.doFilter(request, response);
//
////        String authorizationHeader = request.getHeader("Authorization");
////
////        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
////            String jwt = authorizationHeader.substring(7);
////            String username = jwtUtil.extractUsername(jwt);
////
////            if(username != null && SecurityContextHolder.getContext().getAuthentication() == null){
////                UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
////
////                if(jwtUtil.validateToken(jwt, userDetails)){
////                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
////                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
////
////                    SecurityContextHolder.getContext().setAuthentication(authToken);
////                }
////            }
////        }
////
////        filterChain.doFilter(request, response);
//    }
//
//    private boolean hasAuthorizationBearer(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//        if (ObjectUtils.isEmpty(header) || !header.startsWith("Bearer")) {
//            return false;
//        }
//
//        return true;
//    }
//
//    private String getAccessToken(HttpServletRequest request) {
//        String header = request.getHeader("Authorization");
//        String token = header.split(" ")[1].trim();
//        return token;
//    }
//
//    private void setAuthenticationContext(String token, HttpServletRequest request) {
//        UserDetails userDetails = getUserDetails(token);
//
//        UsernamePasswordAuthenticationToken
//                authentication = new UsernamePasswordAuthenticationToken(userDetails, null, null);
//
//        authentication.setDetails(
//                new WebAuthenticationDetailsSource().buildDetails(request));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//    }
//
//    private UserDetails getUserDetails(String token) {
//        User userDetails = new User();
//        String[] jwtSubject = jwtUtil.getSubject(token).split(",");
//
//        userDetails.setId(jwtSubject[0]);
//        userDetails.setEmail(jwtSubject[1]);
//
//        return userDetails;
//    }

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = parseJwt(request);
            if (jwt != null && jwtUtil.validateAccessToken(jwt)) {
                String username = jwtUtil.getSubject(jwt);

                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: {}", e);
        }

        filterChain.doFilter(request, response);
    }

    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");

        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7);
        }

        return null;
    }
}

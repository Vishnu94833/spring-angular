package com.learnings.springangularintegration.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learnings.springangularintegration.entity.User;

@Repository
public interface UsersRepository extends JpaRepository<User, Integer>
{
}

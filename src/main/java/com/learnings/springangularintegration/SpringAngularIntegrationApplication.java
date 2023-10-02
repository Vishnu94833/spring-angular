package com.learnings.springangularintegration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class SpringAngularIntegrationApplication {

	public static void main(String[] args) {
		System.out.println("Hello World !!!");
		SpringApplication.run(SpringAngularIntegrationApplication.class, args);
	}

}

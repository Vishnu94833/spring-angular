package com.learnings.springangularintegration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.learnings.springangularintegration.config.ProxyProperties;

@SpringBootApplication
@EnableJpaRepositories
@EnableConfigurationProperties({ ProxyProperties.class})
public class SpringAngularIntegrationApplication {

	public static void main(String[] args) {
		System.out.println("Hello World !!!");
		SpringApplication.run(SpringAngularIntegrationApplication.class, args);
	}

}

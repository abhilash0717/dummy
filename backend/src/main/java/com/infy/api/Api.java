package com.infy.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.infy.model.Data;
import com.infy.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping(value = "/BooksByKilo")
public class Api {

	@Autowired
	private ProjectService projectService;

	@Autowired
	private Environment environment;

	@GetMapping(value = "/NewBooks")
	public ResponseEntity<List<Data>> getNewBooks() throws Exception {
		try {
			List<Data> books = projectService.getNewBooks();
			ResponseEntity<List<Data>> response = new ResponseEntity<List<Data>>(books, HttpStatus.CREATED);
			return response;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
}

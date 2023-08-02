package org.myapi.controller;



import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.myapi.dto.PersonDTO;
import org.myapi.service.LdapAuthenticationService;
import org.myapi.service.LdapUserService;
import org.myapi.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@CrossOrigin(origins = "*")
@RestController
@RequestMapping(PersonController.URLSERVER)
public class PersonController {

    public static final String URLSERVER = "/api/persons";
    public static final String LOGIN = "/login";
    public static final String NEWUSER = "/new";
    public static final String REGISTERUSER = "/register";
    public static final String DELETEUSER = "/delete";



    private static final Logger LOGGER = LogManager.getLogger(PersonController.class);


    private final PersonService personService;

    @Autowired
    LdapUserService ldapUserService;
    @Autowired
    LdapAuthenticationService ldapAuthenticationService;


    public PersonController(PersonService personService) {
        this.personService = personService;
    }



    @PostMapping(LOGIN)
    public String loginUser(@RequestBody PersonDTO user) {

        return ldapAuthenticationService.authenticateUser(user.getUsername(), user.getPassword());


    }



    @PostMapping(REGISTERUSER)
    public String registerUser(@RequestBody PersonDTO user) {

        ldapUserService.registerUser(user.getUsername(), user.getPassword());
        return LOGGER.getMessageFactory().toString();
    }



    @GetMapping
    public Flux<PersonDTO> getAllPersons() {
        return personService.getAllPersons();
    }


    @GetMapping("/{id}")
    public Mono<ResponseEntity<PersonDTO>> getPersonById(@PathVariable String id) {
        return personService.getPersonById(id)
                .map(person -> ResponseEntity.ok(person))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }



    @RequestMapping(
            value = NEWUSER,
            method = RequestMethod.POST)
    public Mono<ResponseEntity<PersonDTO>> createPerson(@RequestBody PersonDTO person) {

        return personService.createPerson(person)
                .map(savedPerson -> ResponseEntity.status(HttpStatus.CREATED).body(savedPerson));
    }


    @GetMapping(DELETEUSER+"/{id}")
    public Mono<ResponseEntity<Void>> deletePerson(@PathVariable String id) {
        return personService.deletePerson(id)
                .then(Mono.just(ResponseEntity.noContent().<Void>build()))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}
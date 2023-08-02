package org.myapi.service;

import org.myapi.dto.PersonDTO;
import org.myapi.repository.PersonDAO;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class PersonService {

    private final PersonDAO personDAO;

    public PersonService(PersonDAO personDAO) {
        this.personDAO = personDAO;
    }

    public Flux<PersonDTO> getAllPersons() {
        return personDAO.findAll();
    }

    public Mono<PersonDTO> getPersonById(String id) {
        return personDAO.findById(id);
    }

    public Mono<PersonDTO> createPerson(PersonDTO person) {
        return personDAO.save(person);
    }

    public Mono<Void> deletePerson(String id) {
        return personDAO.deleteById(id);
    }
}
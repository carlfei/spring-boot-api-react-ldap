package org.myapi.repository;

import org.myapi.dto.PersonDTO;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonDAO extends ReactiveMongoRepository<PersonDTO, String> {

}
package org.myapi.dto;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.ldap.odm.annotations.Attribute;
import org.springframework.ldap.odm.annotations.Entry;


@Data
@Entry(objectClasses = {"inetOrgPerson", "top"})
@Document(collection = "persons")
public class PersonDTO {


    @Id
    private String id;



    @Attribute(name = "cn")
    private String username;


    @Attribute(name = "userPassword")
    private String password;


    private String name;
    private String age;

    public PersonDTO() {
    }

    public PersonDTO(String id, String name, String age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }


}
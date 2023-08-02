package org.myapi.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.support.LdapNameBuilder;
import org.springframework.stereotype.Service;

import javax.naming.Name;


@Service
public class LdapUserService {


    private final LdapTemplate ldapTemplate;

    @Autowired
    public LdapUserService(LdapTemplate ldapTemplate) {
        this.ldapTemplate = ldapTemplate;
    }

    public void registerUser(String username, String password) {

        try {

            Name dn = LdapNameBuilder.newInstance().add("dc", "com").add("dc", "mycompany").add("ou", "users").add("cn", username + ".lopez").build();


            DirContextAdapter context = new DirContextAdapter(dn);

            context.setAttributeValues("objectClass", new String[]{"top", "organizationalUnit"});

            context.setAttributeValues("objectClass", new String[]{"top", "inetOrgPerson"});
            context.setAttributeValue("cn", username + ".lopez");
            context.setAttributeValue("sn", "lopez");
            context.setAttributeValue("userPassword", password);

            ldapTemplate.bind(context);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
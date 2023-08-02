package org.myapi.service;


import org.myapi.configurations.ServerLogs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.stereotype.Service;


@Service
public class LdapAuthenticationService {




    private final LdapTemplate ldapTemplate;

    @Autowired
    public LdapAuthenticationService(LdapTemplate ldapTemplate) {
        this.ldapTemplate = ldapTemplate;
    }


    public String authenticateUser(String username, String password) {

        ServerLogs serverLogs = new ServerLogs();
        try {

            ldapTemplate.authenticate("cn=" + username + ".lopez,ou=users,dc=mycompany,dc=com", "(|(objectClass=inetOrgPerson)(objectClass=top))", password);

            return "ok";
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());

            return "Error";
        }


    }
}

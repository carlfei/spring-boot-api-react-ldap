# spring-boot-api-react-ldap
rest api reactive with mongodb spring boot, registration and ldap authentication

Tiene un ldap embebido con ldif, te puedes registrar en ldap y logearte, el pasword lo guarda en texto plano.
El rest hace peticiones reactivas a mongodb con webflux.
Front simple en angular, recibe y manda datos a los endpoint en json

El ldap se maneja con LdapTemplate, el próximo quiero hacerlo con LdapRepository es mucho mas simple y adecuado para la escalabilidad del sistema.

# [![My Skills](https://skillicons.dev/icons?i=java,react)](https://skillicons.dev) auth0-spring-reactTS-security
A sample code that shows how to secure springboot-backend and react/typescript-frontend application using auth0.
this is a simplified code from [@auth0-developer-hub](https://github.com/auth0-developer-hub)
## Built with
<a href="https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html">JDK<a/>: oracle openJDK v19.0.2
<br/>
Spring Boot: v2.7.12
<br/>
React/Typescript
<br/>
<a href="https://auth0.com">Auth0<a/>
## Setup June 2023
### Auth0 setups
1. Create an Application
   > To create an application, open the Applications section of Dashboard and click on the Create Application
   * Name: `Hello World Client`
   > You can use any name
   * Application Type: `Single Page Web Applications`
2. Fill out Application URIs
   > Click on Settings tab of your Application page, and scroll until you see Application URIs
   * Allowed Callback URLs: `http://localhost:4040/callback`
   * Allowed Logout URLs: `http://localhost:4040`
   * Allowed Web Origins: `http://localhost:4040`
3. click the Save Changes
4. Create API
   > To create API, open the APIs section of Dashboard and Click on the Create API
   * Name: `Name: Hello World Server`
     > you can use any name
   * Identifier: `https://hello-world.example.com`
     > you can use any logical identifier
### Spring setups
1. edit [.env](https://github.com/errixed/auth0-spring-reactTS-security/blob/main/backend/.env) file
   * AUTH0-DOMAIN: go to `Applications > Applications > your application > Domain`
   * AUTH0-AUDIENCE: go to `Applications > APIs > your server > Identifier`
### React setups
1. In the [frontend](https://github.com/errixed/auth0-spring-reactTS-security/tree/main/frontend) directory, run this code on terminal:
```
npm install
```
2. edit [.env](https://github.com/errixed/auth0-spring-reactTS-security/blob/main/frontend/.env) file
   * AUTH0-DOMAIN: go to `Applications > Applications > your application > Domain`
   * AUTH0-CLIENT-ID: go to `Applications > Applications > your application > Client ID`
   * AUTH0-AUDIENCE: go to `Applications > APIs > your server > Identifier`
# Sources
more info: [auth0 developers documantation](https://developer.auth0.com/resources/code-samples/full-stack/hello-world/basic-role-based-access-control/spa/react-javascript/spring-java#quick-auth-0-set-up) 

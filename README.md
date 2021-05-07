# Tutorial-Vue-Authentication-NodeJS-Backend
This repository is dedicated to [Lamin Sanneh](https://blog.jscrambler.com/author/lamin-sanneh)'s tutorial, [Vue.js Authentication System with Node.js Backend](https://blog.jscrambler.com/vue-js-authentication-system-with-node-js-backend/).  **All credit for code origination goes to Lamin Sanneh's blog post from JScrambler, and this is hosted as an academic exercise to learn more about Authentication with Vue.js, as well as improve skills with the Git version control software**

## Breakdown
The Tutorial is broken down into a **Front End** (client) and a **Back End** (server).  

- The **Front End** uses the following packages:
  - [Vue CLI](https://www.npmjs.com/package/@vue/cli) to scaffold project.
  - [@vue/cli-init](https://www.npmjs.com/package/@vue/cli-init) to initialize front end project folder.
  - [webpack](https://webpack.js.org/) to bundle the JS.
  - [axios](https://www.npmjs.com/package/axios) to perform network calls.
  - [vue-cookies](https://www.npmjs.com/package/vue-cookies) to store session data.

- The **Back End** uses the following packages:
  - [Node.js](https://nodejs.org/en/) to run.
  - [Express.js](https://www.npmjs.com/package/express) to act as an API server.
  - [body-parser](https://www.npmjs.com/package/body-parser) to access values from AJAX requests.
  - [cookie-session](https://www.npmjs.com/package/cookie-session) to work with cookies server-side.
  - [Passport](https://www.npmjs.com/package/passport) to help authenticate users.
  - [passport-local](https://www.npmjs.com/package/passport-local) to add a *Strategy* (which is a passport.js-specific authentication module) to passport for local authentication.

## Summary
The end product will have two pages:  *login* and  *dashboard*.  *Login* is available to guests **and** authenticated users, while *dashboard* is only accessible to the authenticated users.  This tutorial is primarily about the authentication mechanism, not the storage of credentials.  Therefore it will have some shortcuts on the server (Such as using an array data storage method instead of database connection).  Lastly, the tutorial already supplies GitHub links to the [Front End](https://github.com/JscramblerBlog/jscrambler-vueauthclient) and [Back End](https://github.com/JscramblerBlog/jscrambler-vueauthclient-backend).

## Notes
1. Tutorial summary:
    * Scaffolded a **webpack** based folder structure
    * Installed additional **npm** packages
    * Created the *Dashboard* and *Login* components
    * Updated the **Vue** routing to direct to the *Login* & *Dashboard* components
    * Updated base **App** to include a logout function
    * Initialized **npm** in an empty folder
    * Installed **npm** packages
    * Instantiated packages to use for serving
    * Configured **Express.js** to use middleware
    * Configured **passport** authentication
    * Added dummy data for user information
    * Added routes for server api
    * Added execution code for server to run
    * Linked server's public folder to the client's *dist* folder
2. The **webpack** proxy setting
    * When I first followed the proxy setting, I was deceived by the 400 'bad request' I was receiving from the server, and began working as if the proxy setting was bad.  Once I viewed the response content of the bad request was an 'invalid login', I learned the original setting was working correctly after all.
    * It was strange in the tutorial itself to flip between faking the api in a development server, and then hosting the client on the server as well.
3. **ESLint** in **Visual Studio Code**
    * I had to add the *.eslintrc.js* file into the server's folder so all of the **ESLint** linting would work correctly.
4. *node_modules* folder
    * I copied the *.gitignore* from the client folder to the server folder to prevent adding all the packages to **GitHub**
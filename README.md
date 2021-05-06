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
The end product will have two pages:  a login page and a dashboard page.  The login page is available to guests and authenticated users, while the dashboard page is only accessible to the authenticated users.  This tutorial is primarily about the authentication mechanism, not the storage of credentials.  Therefore it will have some shortcuts on the server (Such as using an array data storage method instead of database connection).  Lastly, the tutorial already supplies GitHub links to the [Front End](https://github.com/JscramblerBlog/jscrambler-vueauthclient) and [Back End](https://github.com/JscramblerBlog/jscrambler-vueauthclient-backend).

## Note
***I have just started the tutorial.  I'll remove this note when the tutorial is complete.***
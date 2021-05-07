const express = require('express')

// Create the Express.js Instance
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')

// Get the local passport authentication Strategy
const LocalStrategy = require('passport-local').Strategy

// Initialize middleware
app.use(bodyParser.json()) // May no longer be necessary.

app.use(cookieSession({
  name: 'randomSessionName',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize())

app.use(passport.session())


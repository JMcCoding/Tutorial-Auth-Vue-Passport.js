const express = require('express')

// Create the Express.js Instance
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')

// Get the local passport authentication Strategy
const LocalStrategy = require('passport-local').Strategy

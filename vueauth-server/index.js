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

// Create auth check routing middleware
const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated())
    res.status(401).send('You are not authenticated')
  else
    return next()
}

// Simulated Database Information (just an array)
let users = [
  {
    id: 1,
    name: 'Jude',
    email: 'jude@email.com',
    password: 'password'
  },
  {
    id: 2,
    name: 'Emma',
    email: 'emma@email.com',
    password: 'password2'
  }
]

// Set up server routes
app.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err)
    if (!user)
      return res.status(400).send([user, 'Cannot log in', info])
    req.login(user, err => res.send('Logged in'))
  })(req, res, next)
})

app.get('/api/logout', (req, res) => {
  req.logout()

  console.log('Logged out')

  return res.send()
})

app.get('/api/user', authMiddleware, (req, res) => {
  let user = users.find(user => user.id === req.session.passport.user)
  
  console.log([user, req.session])

  res.send({user: user})
})
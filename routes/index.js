var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// ROOT ROUTE
router.get('/', (req, res) => {
  res.render('landing');
});

// REGISTER ROUTE - Form 
router.get('/register', (req, res) => {
  res.render('register', { page: 'register' });
});

// Sign Up Logic
router.post('/register', (req, res) => {
  var newUser = new User({ username: req.body.username });

  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      return res.render("register", { "error": err.message });
    }
    passport.authenticate('local')(req, res, () => {
      req.flash('success', `Welcome to Yelp Camp ${user.username}`);
      res.redirect('/campgrounds');
    });
  });
});

// SHOW Login Form
router.get('/login', (req, res) => {
  res.render('login', { page: 'login' });
});

// LOGIN Logic
router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/campgrounds',
    failureRedirect: '/login'
  }), (req, res) => {

  });

// LOGOUT 
router.get('/logout', (req, res) => {
  req.logOut();
  req.flash('success', 'See you later');
  res.redirect('/campgrounds');
});

module.exports = router;
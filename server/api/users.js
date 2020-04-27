var express = require('express');
var Users = require('../models/users');

var router = express.Router();

router.get('/', (req, res) => {
  Users.retrieveAll((err, users) => {
    if (err) return res.json(err);
    return res.json(users);
  });
});

/* LoginPage.js */
router.get('/checkIfUserAlreadyExist/:username', (req, res) => {
  var username = req.params.username;
  Users.checkIfUserAlreadyExist(username, (err, users) => {
    if (err) return res.json(err);
    return res.json(users);
  });
});

/* LoginPage.js */
router.get('/validateCredentials/:username/:password', (req, res) => {
  var username = req.params.username;
  var password = req.params.password;
  Users.validateCredentials(username, password, (err, users) => {
    if (err) return res.json(err);
    return res.json(users);
  });
});

/* LoginPage.js */
router.post('/signup', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var name = req.body.name;
  Users.signup(username, password, name, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

module.exports = router;

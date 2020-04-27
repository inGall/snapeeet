const db = require('../database');

class Users {
  static retrieveAll(callback) {
    db.query('SELECT * from users', (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  /* LoginPage.js */
  static checkIfUserAlreadyExist(username, callback) {
    db.query('SELECT * from users WHERE UPPER(username) = UPPER($1)', [username], (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }

  /* LoginPage.js */
  static validateCredentials(username, password, callback) {
    db.query(
      'SELECT username from users WHERE UPPER(username) = UPPER($1) AND password = $2',
      [username, password],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }

  /* LoginPage.js */
  static signup(username, password, name, callback) {
    db.query(
      'INSERT INTO Users (username, password, name) VALUES ($1, $2, $3)',
      [username, password, name],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Users;

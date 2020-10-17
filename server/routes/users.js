const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = ({ getUsers }) => {

  router.get('/', (req, res) => {
    getUsers()
      .then(users => res.json(users))
      .catch(err => res.json({err}))
  });
  return router;
}


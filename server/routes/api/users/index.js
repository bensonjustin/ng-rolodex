const express = require('express');
const router = express.Router();
const User = require('../../../../database/models/User');

router.get('/', (req, res) => {
  return req.database.User.fetch().then(results => {
    res.render({
      user: results.toJson()
    });
  });
});

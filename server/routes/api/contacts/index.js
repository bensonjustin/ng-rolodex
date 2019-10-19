const express = require('express');
const router = express.Router();
const Contact = require('../../../../database/models/Contact');

router.get('/', (req, res) => {
  return req.database.Contact.fetch().then(results => {
    res.render({
      user: results.toJson()
    });
  });
});

router
  .post('/create', (req, res) => {
    console.log(req.body);
    return req.database.Contact.forge({
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      email: req.body.email,
      created_by: 'me'
    });
  })
  .save()
  .then(() => {
    res.redirect('/');
  });

var express = require('express');
var router = express.Router();
const Items = require('../models/items');

router.get('/', async function(req, res, next) {
  try {
    const affirmations = await Items.find();

    res.render('index', {
      title: 'Daily Affirmations',
      list: affirmations
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
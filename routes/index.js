const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', function(req, res, next) {
  console.log(req.body.message);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;

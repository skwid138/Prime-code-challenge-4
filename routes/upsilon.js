/** --- DO NOT MODIFY --- **/
var router = require('express').Router();

var upsilon = [
  "Ahkillah",
  "Bill",
  "Bob",
  "Brian",
  "Charles K",
  "Erik Noonan",
  "Erik Nelson",
  "Ethan",
  "Hue",
  "Jake",
  "Mathias",
  "Nolan",
  "Priscilla",
  "Rukia",
  "Scott",
  "Tyler",
];

router.get('/', function (req, res) {
  res.send(upsilon);
});

module.exports = router;

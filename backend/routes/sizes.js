var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const sizes = ["Pequena", "Média", "Grande", "Extra-Grande"];
  res.json(sizes);
});

module.exports = router;

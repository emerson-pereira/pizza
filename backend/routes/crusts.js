var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const crusts = ["Fina", "Tradicional", "Recheada com Queijo"];
  res.json(crusts);
});

module.exports = router;

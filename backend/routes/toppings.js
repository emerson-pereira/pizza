var express = require("express");
var router = express.Router();

const toppings = [
  "Queijo",
  "Calabresa",
  "Frango",
  "Milho e Bacon",
  "Margherita",
];

/*
  Pizzas especiais por dia da semana
  Cada index é um dia de semana
*/

const specialsPerDay = [
  toppings[0], // Sun
  toppings[0], // Mon
  toppings[0], // Tue
  toppings[1], // Wed
  toppings[1], // Thu
  toppings[2], // Fri
  toppings[3], // Sat
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(toppings);
});

/* GET users listing. */
router.get("/special", function (req, res, next) {
  const day = new Date().getDay();
  res.json({
    day,
    topping: specialsPerDay[day],
  });
});

module.exports = router;

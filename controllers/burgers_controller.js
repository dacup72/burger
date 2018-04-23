
var express = require("express");
var router = express.Router();
var db = require('../models');

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	db.Burger.findAll({
    include: [db.Customer],
    order: [
      ["burger_name", "ASC"]
    ]
  })
})


router.put("/burger/update", function(req, res) {
	burger.update(req.body.burger_id, function(result) {
		res.redirect("/");
	})
});

router.post("/burger/create", function(req, res) {
	burger.create(req.body.burger_name, function(result) {
		res.redirect('/');
	})
})

module.exports = router;
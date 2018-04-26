
var express = require("express");
var router = express.Router();
var db = require('../models');

router.get("/", function (req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
	db.Burger.findAll({
		include: [
			db.Customer
		],
		order: [
			["burger_name", "ASC"]
		]
	}).then(function (dbBurger) {
		// into the main index, updating the page
		var hbsObject = {
			burger: dbBurger
		};
		return res.render("index", hbsObject);
	});
})

// post route to create burgers
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(function(dbBurger) {
      // console.log(dbBurger);
      res.redirect("/");
    });
});


router.put("/burger/update", function (req, res) {
	burger.update(req.body.burger_id, function (result) {
		res.redirect("/");
	})
});

router.put("/burgers/update", function(req, res) {
})


module.exports = router;
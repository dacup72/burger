
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
router.post("/burgers/create", function (req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	})
		.then(function (dbBurger) {
			// console.log(dbBurger);
			res.redirect("/");
		});
});


router.put("/burgers/update", function (req, res) {
	//console.log("=======", req.body);
	if (req.body.customer) {
		db.Customer.create({
			customer: req.body.customer,
			BurgerId: req.body.burger_id
		})
			.then(function (dbCustomer) {
				return db.Burger.update({
					devoured: true
				}, {
						where: {
							id: req.body.burger_id
						}
					});
			})
			.then(function (dbBurger) {

				res.json("/");
			});
	}
	else if (req.body.devoured) {
		db.Burger.update({
			devoured: false
		}, {
				where: {
					id: req.body.burger_id
				}
			})
			.then(function (dbBurger) {
				res.json("/");
			});
	}
	// If we aren't given a customer, just update the burger to be devoured
	else {
		db.Burger.update({
			devoured: true
		}, {
				where: {
					id: req.body.burger_id
				}
			})
			.then(function (dbBurger) {
				res.json("/");
			});
	}
});


router.delete("/burgers/deleteCart", function (req, res) {

	db.Burger.destroy({
		where: {
			devoured: 1
		}
	}).then(function (dbBurger) {
		console.log("burgers deleted");
	});

	db.Customer.destroy({
		where: {},
		truncate: true
	}).then(function (dbCustomer) {
		console.log("all customers deleted");
		res.json("/");
	});
});

router.delete("/burgers/deleteBurger", function (req, res) {
	db.Burger.destroy({
		where: {
			id: req.body.burger_id
		}
	})
		.then(function (dbBurger) {
			res.json("/");
		});
});

module.exports = router;
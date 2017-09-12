//import express

//import burgers.js

//create the router for the app and export the router

var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js')

router.get("/", function(req, res) {
	burger.all(function(burger_data) {
		res.render("index", {burger_data});
	})
});

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
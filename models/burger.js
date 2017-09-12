//import orm.js

//create code that will call th ORM functions using burger specific input for the ORM

//export this file

var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		})
	},

	update: function(id, cb) {
		orm.update("burgers", id, cb);
	},

	create: function(name, cb) {
		orm.create("burgers", name, cb);
	}
}

module.exports = burger;
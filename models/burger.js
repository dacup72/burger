

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
};




// var orm = require("../config/orm.js");

// var burger = {
// 	all: function(cb){
// 		orm.all("burgers", function(res){
// 			cb(res);
// 		})
// 	},
// 	update: function(id, cb) {
// 		orm.update("burgers", id, cb);
// 	},
// 	create: function(name, cb) {
// 		orm.create("burgers", name, cb);
// 	}
// }

// module.exports = burger;
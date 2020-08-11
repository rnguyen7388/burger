const orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers" , function (res) {
            cb(res);
        });
    },
    insertOne: function (val, cb) {
        orm.insertOne("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;



const connection = require("../config/connection.js");

function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

let orm = {

  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM " + table + ";"
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    })

  },

  insertOne: function (table, col, val, cb) {
    let queryString = "INSERT INTO " + table + '(' + col + ') VALUES ("' + val + '");'
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    })
  },

  updateOne: function (table, colVal, condition, cb) {
    let queryString = "UPDATE " + table + " SET " + objToSql(colVal) + " WHERE " + condition + ";"
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;

      cb(response);
    })
  }
}

module.exports = orm;
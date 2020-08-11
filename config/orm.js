const connection = require("./connection");

function questionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

const orm = {
  selectAll: function (table, cb) {
    connection.query("SELECT * FROM ??" + [table], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: function (table, columns, values, cb) {
    connection.query(
      `INSERT INTO ${table} (${columns.toString()}) VALUES (${questionMarks(
        values
      )})`,
      values,
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
  updateOne: function (table, id, cb) {
    connection.query(
      `UPDATE ${table} SET devoured = true WHERE id = ?`,
      [id],
      (err, data) => {
        if (err) throw err;
        cb(data);
      }
    );
  },
};

module.exports = orm;
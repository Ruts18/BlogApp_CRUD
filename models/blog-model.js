const db = require("../config/db");
module.exports = {
  create(name, information, image, date, callback) {
    const query =
      "insert into blog(name,information,image, date) values(?, ?, ?, ?)";
    db.query(query, [name, information, image, date], (err, data) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  },
  getAll(callback) {
    const query = "select * from blog";
    db.query(query, (err, data) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  },
  update(id,name, information, image, date, callback) {
    const query =
      "update blog set name=?, information=?, image=?,date=? where id=?";
    db.query(query, [name, information, image, date, id], (err, data) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  },
  delete(id, callback) {
    const query = "delete from blog where id=?";
    db.query(query, [id], (err, data) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, data);
    });
  },
};

// This module defines functions to interact with the MySQL database for 
//performing CRUD operations on the blog table. 
//It exports these functions to be used in the blog-controller module.

import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

let config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
};
let pool = mysql.createPool(config);

pool.on("acquire", function (connection) {
  console.log("***");
  console.log("Connection %d acquired", connection.threadId);
});

pool.on("release", function (connection) {
  console.log("Connection %d released", connection.threadId);
});

let dbFunctions = {
  createTable: () =>
    new Promise((resolve, reject) => {
      let sql =
        "create table if not exists `exove-products`(`id` varchar(40), `name` varchar(70) unique, `description_en` varchar(250), `description_fi` varchar(250), `description_es` varchar(250), `price` decimal(8,2), `categories` varchar(200))";
      pool.query(sql, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Table created succesfully");
        }
      });
    }),

  saveProducts: (product) =>
    new Promise((resolve, reject) => {
      let sql =
        "insert into `exove-products` (id, name, description_en, description_fi, description_es, price, categories) values (" +
        pool.escape(product.id) +
        ", " +
        pool.escape(product.name) +
        ", " +
        pool.escape(product.description_en) +
        ", " +
        pool.escape(product.description_fi) +
        ", " +
        pool.escape(product.description_es) +
        ", " +
        pool.escape(product.price) +
        ", " +
        pool.escape(product.categories) +
        ") on duplicate key update description_en = " +
        pool.escape(product.description_en) +
        ", description_fi = " +
        pool.escape(product.description_fi) +
        ", description_es = " +
        pool.escape(product.description_es) +
        ", price = " +
        pool.escape(product.price) +
        ", categories = " +
        pool.escape(product.categories);

      pool.query(sql, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Data pushed to table");
        }
      });
    }),
};

export default dbFunctions;

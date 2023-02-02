import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

//Configuration for the mysql modules createPool function. These properties are stored in
// the .env file so they are secured.
let config = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
};
let pool = mysql.createPool(config);

// Functions that give logs when connections are acquired and released.
pool.on("acquire", function (connection) {
  console.log("***");
  console.log("Connection %d acquired", connection.threadId);
});

pool.on("release", function (connection) {
  console.log("Connection %d released", connection.threadId);
});

//These functions are exported so the index.js can use them

let dbFunctions = {
  /**
   * This function is used to create a new table to the database.
    If the table already exists, it is not created.
   */
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

  /**
   * This function is used to save a new tag to tags table in the database.
   * The parameter "product" is the object that contains all the data that is wanted to store to the database.
   * pool.escape() is used to prevent SQL injection (although in this case the app doesn't deal with user input)
   * If there is a chance of duplicate entry then fields are just updated.
   * The function returns a Promise that is resolved or rejected.
   */
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

  closeConnection: () =>
    new Promise((resolve, reject) => {
      pool.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Data saved, connections closed!");
        }
      });
    }),
};

export default dbFunctions;

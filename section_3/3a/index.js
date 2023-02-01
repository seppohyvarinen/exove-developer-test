import fetch from "node-fetch";
import dbFunctions from "./database.js";

async function getData() {
  try {
    let response = await fetch(
      "https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json"
    );

    let jsoned = await response.json();

    console.log(jsoned);

    let create = await dbFunctions.createTable();

    console.log(create);
  } catch (error) {
    console.error(error);
  }
}

getData();

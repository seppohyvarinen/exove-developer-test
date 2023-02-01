import fetch from "node-fetch";
import dbFunctions from "./database.js";

import translatte from "translatte";

async function getData() {
  try {
    let response = await fetch(
      "https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json"
    );

    let jsoned = await response.json();

    let create = await dbFunctions.createTable();
    jsoned.products.forEach((product) => {
      let descFI = "";
      let descES = "";
      translatte(product.description, { to: "fi" })
        .then((res) => {
          descFI = res.text;
          console.log(descFI);
        })
        .catch((err) => {
          console.error(err);
        });
      translatte(product.description, { to: "es" })
        .then((res) => {
          descES = res.text;
          console.log(descES);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  } catch (error) {
    console.error(error);
  }
}

getData();

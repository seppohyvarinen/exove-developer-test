import fetch from "node-fetch";
import dbFunctions from "./database.js";

import translatte from "translatte";

/*
The main function of this application.
It's an async function that first fetches data from the API (or in this case github repo)
and then transforms it to json.
A table is then created (if it doesn't already exist) and then the json is parsed and a "parsedProduct"
object is passed to the database function that handles saving the data to SQL database.
*/
async function getData() {
  try {
    let response = await fetch(
      "https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json"
    );

    let jsoned = await response.json();

    let create = await dbFunctions.createTable();
    console.log(create);
    jsoned.products.forEach(async (product) => {
      let categories = "";

      let translations = await translate(product);
      product.categories.forEach((c) => {
        categories += c.name + " ";
      });

      product.variations.forEach(async (variation) => {
        let parsedProduct = {
          id: product.id,
          name: product.name,
          description_en: product.description,
          description_fi: translations.finnish,
          description_es: translations.spanish,
          price: 0.0,
          categories: categories,
        };
        parsedProduct.price = variation.price;
        if ("size" in variation) {
          parsedProduct.name += " " + variation.size;
        }

        if ("paper size" in variation) {
          parsedProduct.name += " " + variation["paper size"];
        }

        await dbFunctions.saveProducts(parsedProduct);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

//Async function that uses translatte library to handle translations in the application.

async function translate(product) {
  let descFI = await translatte(product.description, { to: "fi" });
  let descES = await translatte(product.description, { to: "es" });

  let translation = { finnish: descFI.text, spanish: descES.text };

  return translation;
}

getData();

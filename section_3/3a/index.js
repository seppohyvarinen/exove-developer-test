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

async function translate(product) {
  let descFI = await translatte(product.description, { to: "fi" });
  let descES = await translatte(product.description, { to: "es" });

  let translation = { finnish: descFI.text, spanish: descES.text };

  return translation;
}

getData();

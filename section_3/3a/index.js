import fetch from "node-fetch";

async function getData() {
  let response = await fetch(
    "https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json"
  );

  let jsoned = await response.json();

  console.log(jsoned);
}

getData();

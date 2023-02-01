import React from "react";
import { Carousel } from "./components/Carousel";

import "./App.css";

function App() {
  const carouselItems = [
    {
      imageSrc: "./images/smiley1.png",
      imageAlt: "A regular smiley",
    },
    {
      imageSrc: "./images/smiley2.png",
      imageAlt: "A strange smiley",
    },
    {
      imageSrc: "./images/smiley3.png",
      imageAlt: "Smiley that says I don't know",
    },
  ];
  return (
    <div className="mainContainer">
      <Carousel items={carouselItems} />
    </div>
  );
}

export default App;

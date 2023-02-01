import { useState } from "react";

import { CarouselItemType } from "../types/types";
import { Item } from "./Item";

export const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const length = 3;
  const items = [
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

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={() => handlePrevious()}>{"<"}</button>

      <Item
        imageSrc={items[index].imageSrc}
        imageAlt={items[index].imageAlt}
      ></Item>

      <button onClick={() => handleNext()}>{">"}</button>
    </div>
  );
};

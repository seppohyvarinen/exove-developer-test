import { useState, useEffect } from "react";

import { CarouselType } from "../types/types";
import { Item } from "./Item";

export const Carousel = ({ rolling }: CarouselType) => {
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
  useEffect(() => {
    const interval = setInterval(() => {
      rolling && handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, rolling]);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const setClass = (num: number) => {
    const classArr = ["Card center-box"];
    if (num === index) classArr.push("present");
    if (num > index) classArr.push("next");
    if (num < index) classArr.push("previous");
    return classArr.join(" ");
  };

  return (
    <div className="carousel-container">
      <button className="button" onClick={() => handlePrevious()}>
        {"◄"}
      </button>

      <Item
        imageSrc={items[0].imageSrc}
        imageAlt={items[0].imageAlt}
        classType={setClass(0)}
      ></Item>
      <Item
        imageSrc={items[1].imageSrc}
        imageAlt={items[1].imageAlt}
        classType={setClass(1)}
      ></Item>
      <Item
        imageSrc={items[2].imageSrc}
        imageAlt={items[2].imageAlt}
        classType={setClass(2)}
      ></Item>

      <button className="button" onClick={() => handleNext()}>
        {"►"}
      </button>
    </div>
  );
};

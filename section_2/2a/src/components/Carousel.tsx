import { useState, useEffect } from "react";

import { CarouselType } from "../types/types";
import { Item } from "./Item";
import "./Carousel.css";

/*  Component for the carousel and it's functionality.
    Carousel component is typed as CarouselType which has "rolling" property, a boolean value
    of whether carousel should roll or not.
*/

export const Carousel = ({ rolling }: CarouselType) => {
  //State defines which image is visible
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

  /*
  This useEffect handles the automatic rolling. It is called every 3 seconds
  and if the rolling prop is true, the index state is incremented with handleNext() function
 */
  useEffect(() => {
    const interval = setInterval(() => {
      rolling && handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, rolling]);

  // Decrements the state, in other words handles showing the previous picture
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  // Increments the state, in other words handles showing the next picture
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  /* This function returns a array of strings that are essentially css class names.
     The classNames are then passed to Item components and define how the Items are positioned,
     in other words are they visible to user or not.
 */
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

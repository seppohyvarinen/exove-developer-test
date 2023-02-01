import { useState } from "react";

export const Carousel: React.FC<{}> = () => {
  const [index, setIndex] = useState<number>(0);
  const length = 3;

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
      <ul className="carousel-list"></ul>
    </div>
  );
};

import { CarouselItemType } from "../types/types";

export const Item = ({ imageSrc, imageAlt }: CarouselItemType) => {
  return (
    <li className="carousel-item">
      <img src={imageSrc} alt={imageAlt} className="carousel-img" />
    </li>
  );
};

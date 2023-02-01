import { CarouselItemType } from "../types/types";

export const Item = ({ imageSrc, imageAlt, classType }: CarouselItemType) => {
  return (
    <div className={classType}>
      <img src={imageSrc} alt={imageAlt} className="carousel-img" />
    </div>
  );
};

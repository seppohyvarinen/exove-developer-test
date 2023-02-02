import { CarouselItemType } from "../types/types";
import "./Item.css";

/*  Component for the Item.
    Item component is typed as CarouselItemType which has three properties: imageSrc (image source as string),
    imageAlt (the alternative description of image as string) and classType (a string that defines the div's classname)
    of whether carousel should roll or not.
*/
export const Item = ({ imageSrc, imageAlt, classType }: CarouselItemType) => {
  return (
    <div className={classType}>
      <img src={imageSrc} alt={imageAlt} className="carousel-img" />
    </div>
  );
};

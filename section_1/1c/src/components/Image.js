import "./Image.css";

/*
    Image component renders a square with a certain opacity value. The opacity value is received
    in transParency prop. It is divided with 100 at the div's "style" property since opacity
    values are in the range of 0.0 - 1.0.
*/

const Image = ({ transParency }) => {
  return (
    <div className="transParentImg" style={{ opacity: transParency / 100 }}>
      <div className="content">{transParency}</div>
    </div>
  );
};

export default Image;

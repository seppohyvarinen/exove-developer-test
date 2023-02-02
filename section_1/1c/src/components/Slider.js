import "./Slider.css";

/*
    Slider component takes props value and setValue. The value prop is used in input elements
    defaultValue property while the setValue is triggered via handleRelease function that is
    called onMouseUp event from the input element.
*/

const Slider = ({ value, setValue }) => {
  const handleRelease = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        type="range"
        defaultValue={value}
        onMouseUp={handleRelease}
      ></input>
    </div>
  );
};

export default Slider;

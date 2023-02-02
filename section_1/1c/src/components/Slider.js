import "./Slider.css";

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

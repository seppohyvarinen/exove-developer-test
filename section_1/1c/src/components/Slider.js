const Slider = ({ value, setValue }) => {
  const handleRelease = (e) => {
    console.log("setting level", e.target.value);
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

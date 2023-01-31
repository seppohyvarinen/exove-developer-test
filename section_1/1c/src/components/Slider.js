const Slider = ({ value }) => {
  return (
    <div>
      <input type="range" defaultValue={value}></input>
    </div>
  );
};

export default Slider;

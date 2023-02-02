import "./App.css";
import Slider from "./components/Slider";
import Image from "./components/Image";
import { useState } from "react";

/*
    Simple application where user can use slider to adjust transparency of a square.
    The adjusted value is stored to state (default value 24) and it is stored only when user
    stops moving it (onMouseUp event).
*/

function App() {
  const [transParency, setTransParency] = useState(24);
  return (
    <div className="App">
      <Image transParency={transParency} />
      <Slider value={transParency} setValue={setTransParency} />
    </div>
  );
}

export default App;

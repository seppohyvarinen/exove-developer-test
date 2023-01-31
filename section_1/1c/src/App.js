import "./App.css";
import Slider from "./components/Slider";
import Image from "./components/Image";
import { useState } from "react";

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

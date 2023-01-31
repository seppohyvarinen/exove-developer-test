import "./App.css";
import Slider from "./components/Slider";
import Image from "./components/Image";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(24);
  return (
    <div className="App">
      <Image />
      <Slider value={value} />
    </div>
  );
}

export default App;

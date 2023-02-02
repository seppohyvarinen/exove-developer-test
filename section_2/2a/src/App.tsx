import { Carousel } from "./components/Carousel";

import "./App.css";
import { useState } from "react";

function App() {
  const [rolling, setRolling] = useState<boolean>(true);

  const handleClick = () => {
    setRolling(!rolling);
  };
  return (
    <div className="App">
      <div className="mainContainer">
        {rolling ? (
          <button className="controlsStop" onClick={() => handleClick()}>
            ◼
          </button>
        ) : (
          <button className="controlsPlay" onClick={() => handleClick()}>
            ▶
          </button>
        )}

        <Carousel rolling={rolling} />
      </div>
    </div>
  );
}

export default App;

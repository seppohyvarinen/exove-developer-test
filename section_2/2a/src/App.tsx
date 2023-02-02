import { Carousel } from "./components/Carousel";

import "./App.css";
import { useState } from "react";

/*
    Simple React & TypeScript carousel. Has automatic image rolling function which can be toggled on or off.
*/

function App() {
  //This boolean state is passed to Carousel component and it defines whether automatic rolling is on or off
  const [rolling, setRolling] = useState<boolean>(true);

  //Toggles the rolling state to false or true
  const handleClick = () => {
    setRolling(!rolling);
  };
  return (
    <div className="App">
      <div className="mainContainer">
        {rolling ? (
          <button
            title="Stop the carousel"
            className="controlsStop"
            onClick={() => handleClick()}
          >
            ◼
          </button>
        ) : (
          <button
            title="Play the carousel"
            className="controlsPlay"
            onClick={() => handleClick()}
          >
            ▶
          </button>
        )}

        <Carousel rolling={rolling} />
      </div>
    </div>
  );
}

export default App;

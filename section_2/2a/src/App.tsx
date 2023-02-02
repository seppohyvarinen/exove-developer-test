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
          <button onClick={() => handleClick()}>Stop</button>
        ) : (
          <button onClick={() => handleClick()}>Play</button>
        )}

        <Carousel rolling={rolling} />
      </div>
    </div>
  );
}

export default App;

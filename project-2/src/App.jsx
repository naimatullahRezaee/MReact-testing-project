import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const clicked = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h2>{num}</h2>
      <button onClick={clicked}>Increase</button>
    </>
  );
}

export default App;

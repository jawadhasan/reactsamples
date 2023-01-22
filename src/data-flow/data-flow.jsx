import { useState } from "react";

import  Button  from "./button";
import  Display  from "./display"

const DataFalow = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div>
      <h5>DataFlow</h5>
      <Button onClickFunction={incrementCounter} />
      <Display message={counter} />
    </div>
  );
}

export default DataFalow;
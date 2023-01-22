
import { useState } from "react";

const ButtonCounter = () => {

  const [counter, setCounter] = useState(0);

  return (

    <div>
      <h5>ButtonCounter (useState Example)</h5>
      <button className="btn btn-info" onClick={() => setCounter(counter + 1)}>
        {counter}
      </button>
    </div>
  );
}

export default ButtonCounter;

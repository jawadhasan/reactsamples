import React from "react";

const Display = (props) => {
  return (
    <div className="text-success">
      {props.message}
    </div>
  );
}

export default Display;

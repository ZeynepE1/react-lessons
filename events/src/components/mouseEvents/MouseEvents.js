import "./mouseStyle.css";
import { useState } from "react";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState("");
  const [coordY, setCoordY] = useState("");

  /**
   * TODO list
   * click
   * doubleClick
   * mouseMove
   */
  // click event

  // mouseMove

  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  // click

  const handleClick = (e, name) => {
    console.log({name:"Hi " + name, target: e.target });
  };


  function handleDoubleClick(e){
    console.log(e.currentTarget);
  }

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X</span> and Y
      </p>
      <p>
        <span>{coordX}</span> {coordY}{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onMouseMove={handleMouseMove}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2" onClick={(e) => handleClick(e, "Emre")}>
            todo item 2 <span>X</span>
          </li>
          <li id="todo-3" onDoubleClick={handleDoubleClick}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
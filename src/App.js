import React from "react";
import "./App.css";
var arr = [];
function App() {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState("");
  const add = (e) => {
    e.preventDefault();
    setCount((count) => count + 1);
    arr.push(count);
  };
  const Li = ({ props }) => {
    return <li>Item {props}</li>;
  };
  const mouse = (e) => {
    setItem(e.target.textContent);
  };
  return (
    <div className="container">
      <span>clicked {item}</span>
      <ul onClick={mouse}>
        {arr.map((count) => {
          return <Li props={count} key={count} />;
        })}
      </ul>
      <button onClick={add}>Add</button>
    </div>
  );
}
export default App;

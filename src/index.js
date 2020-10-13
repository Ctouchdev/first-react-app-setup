import React from "react";
import ReactDOM from "react-dom";

var HelloWorldList = (
  <>
    <h1>Hello, this is my List.</h1>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  </>
);

ReactDOM.render(HelloWorldList, document.getElementById("root"));

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

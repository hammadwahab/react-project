import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World from React!");
const headingInJSX = <h1>Hello World from React Using JSX!</h1>;

console.log(heading);
console.log(headingInJSX);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

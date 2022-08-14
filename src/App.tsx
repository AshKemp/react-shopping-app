import React from "react";
import "./App.css";
import Greeter from "./components/Greeter";
function App() {
  return (
    <div className="App">
      <Greeter person={"Jil"} />
      <Greeter person={"Jung"} />
      <Greeter person={"Juck"} />
    </div>
  );
}

export default App;

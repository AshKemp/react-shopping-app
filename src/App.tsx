import React from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
function App() {
  const items = [
    {
      id: 1,
      product: "Mobile",
      price: 100,
    },
    {
      id: 2,
      product: "TV",
      price: 200,
    },
  ];
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

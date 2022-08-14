import React, { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

import Item from "./models/item";
function App() {
  const [items, setItems] = useState<Item[]>([]);
  const onAddItem = (product: string) => {
    setItems([...items, { id: getId(), product, price: 20 }]);
  };
  // const items = [
  //   {
  //     id: 1,
  //     product: "Mobile",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     product: "TV",
  //     price: 200,
  //   },
  // ];
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={onAddItem} />
    </div>
  );
}

export default App;

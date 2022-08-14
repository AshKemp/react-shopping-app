import React, { FormEvent, useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}
export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="product" ref={inputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

import React, { FormEvent, useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, price: number) => void;
}
export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps) {
  const productInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const newPrice = Number(priceInputRef.current!.value);

    onAddItem(newProduct, newPrice);
    productInputRef.current!.value = "";
    priceInputRef.current!.value = "1";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="product" ref={productInputRef} />
      <input type="number" name="price" ref={priceInputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

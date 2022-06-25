import * as React from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Home.css";
import { useState } from "react";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  category,
  formatter,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (change) => {
    setSearchTerm(change.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="home">
      <Hero />
      <Search handleOnChange={handleOnChange} />
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
        category={category}
        searchTerm={searchTerm}
        formatter={formatter}
      />
    </div>
  );
}

import * as React from "react"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"


export default function Home({ products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, category }) {
  return (
    <div className="home">
      <Hero />
      <Search />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart} category={category}/>
    </div>
  )
}

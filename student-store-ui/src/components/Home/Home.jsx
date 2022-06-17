import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import "./Home.css"
import Hero from "../Hero/Hero"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
      <About />
    </div>
  )
}

import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"
import Hero from "../Hero/Hero"

// Should render the Hero component
// Should render the ProductGrid component

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <p>Home link</p>
      <Hero />
      <ProductGrid products={products}/>
    </div>
  )
}

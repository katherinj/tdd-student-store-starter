import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import "./Home.css"
import Hero from "../Hero/Hero"
import Footer from "../Footer/Footer"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, category}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart} category={category}/>
      <About />
      <Footer />
    </div>
  )
}

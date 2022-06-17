import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import Search from "../Search/Search"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    
  return (
      <>
        {/* <Search /> */}
        <div className="product-grid">
          {products.map((product) => 
          <ProductCard product={product} showDescription="false" handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} key={product.id} />        
        )}
        </div>
      </>
    )
  }
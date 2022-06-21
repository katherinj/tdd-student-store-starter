import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, category}) {
  let productList = products;
  if(category!=""){
      productList = productList.filter(product => product.category == category)
  }
  return (
      <>
        <div className="product-grid">
          {productList.map((product) => 
          <ProductCard product={product} showDescription="false" handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} key={product.id} productId={product.id} shoppingCart={shoppingCart}/>        
        )}
        </div>
      </>
    )
  }
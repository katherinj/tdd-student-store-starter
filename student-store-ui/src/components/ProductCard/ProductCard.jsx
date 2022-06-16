import * as React from "react"
import "./ProductCard.css"

export default function ProductCard( {product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <div className="product-card">
      <p>Product Detail</p>
      <div className="product-name"> Product Name </div>
      <div className="product-price"> Product Price </div>
      <div className="description">Description if showDescription==true</div>      
      <img src="" alt="" />

      <button className="add" onClick={handleAddItemToCart(productId)}> add </button>
      <button className="remove" onClick={handleRemoveItemToCart(productId)}> remove </button>
      <div className="product-quantity"> Product Quantity </div>
    </div>
  )
}
import * as React from "react"
import "./ProductCard.css"
import {Link} from "react-router-dom"

export default function ProductCard( {product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {

  return (
    <div className="product-card">
      <div className="media">
        
        <Link to="products/{productId" >
          <img src={product.image} alt="" />
        </Link>
      
      </div>
      <div className="product-info">
        <div className="main-info">
          <div className="product-name"> {product.name} </div>
          <div className="product-price"> {product.price} </div>       
          <div className="description">{product.description}</div>
        </div>
        <div className="actions">
            <div className="buttonArea">
              <button className="add" onClick={handleAddItemToCart(productId)}> + </button>
              <button className="remove" onClick={handleRemoveItemToCart(productId)}> - </button>
            </div>
          <div className="product-quantity"> {quantity} </div>
        </div>
      </div>
    </div>
  )
}
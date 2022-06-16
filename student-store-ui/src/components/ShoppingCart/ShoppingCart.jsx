import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, products, shoppingCart}) {
  return (
    <div className="shopping-cart">
      <p>Shopping Cart</p>
      {shoppingCart.map(item => 
      <>
      <div className="cart-product-name"> Product name </div>
      <div className="cart-product-quantity"> Quantity </div>
      </>
      )}


    </div>
  )
}
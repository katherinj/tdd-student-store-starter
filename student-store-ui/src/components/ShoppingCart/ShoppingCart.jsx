import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  return (
    <div className="shopping-cart">
      <h3>
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      <CartTable shoppingCart={shoppingCart} products={products} />
    </div>
  );
}

export function CartTable({ shoppingCart, products }) {
  return (
    <div className="cart-table">
      <div className="header">
        <span className="flex-2"> Name </span>
        <span className="center"> Quantity </span>
        <span className="center"> Unit Price</span>
        <span className="center"> Cost </span>
      </div>
      {shoppingCart?.map((p) => (
        <ProductRow product={products[p.itemId - 1]} quantity={p.quantity} />
      ))}
    </div>
  );
}

export function ProductRow({ product, quantity }) {
  return (
    <div className="product-row">
      <div className="header">
        <span className="flex-2"> {product?.name} </span>
        <span className="center"> {quantity} </span>
        <span className="center"> {product?.price} </span>
        <span className="center"> {quantity * product?.price} </span>
      </div>
    </div>
  );
}

export function Receipt() {
  return <div className="receipt"></div>;
}

import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmityCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={isOpen ? "toggle-button open" : "toggle-button closed"}
          onClick={handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        {isOpen ? (
          <OpenSideBar shoppingCart={shoppingCart} products={products} />
        ) : (
          <ClosedSideBar />
        )}
      </div>
    </section>
  );
}

export function OpenSideBar({ shoppingCart, products }) {
  return (
    <div>
      <ShoppingCart shoppingCart={shoppingCart} products={products} />
      <CheckoutForm />
    </div>
  );
}

export function ClosedSideBar() {
  return (
    <div className="shopping-cart">
      <div className="cart-icons">
        <span className="cart-icon icon button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
        <span className="cart-icon icon button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
        <span className="cart-icon icon button">
          <i className="material-icons md-48">fact_check</i>
        </span>
      </div>
    </div>
  );
}

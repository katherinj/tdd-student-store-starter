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
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  formatter,
  showReceipt,
}) {
  let number = 0.324423;
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
          <OpenSideBar
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            isOpen={isOpen}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            formatter={formatter}
            showReceipt={showReceipt}
          />
        ) : (
          <ClosedSideBar />
        )}
      </div>
    </section>
  );
}

export function OpenSideBar({
  shoppingCart,
  products,
  checkoutForm,
  isOpen,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  formatter,
  showReceipt,
}) {
  return (
    <div>
      <ShoppingCart
        shoppingCart={shoppingCart}
        products={products}
        formatter={formatter}
        showReceipt={showReceipt}
      />
      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        showReceipt={showReceipt}
      />
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

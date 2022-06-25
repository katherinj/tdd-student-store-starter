import * as React from "react";
import "./CheckoutForm.css";
import axios from "axios";
import { useEffect } from "react";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  showReceipt,
}) {
  return (
    <>
      <div className="checkout-form">
        <h3 className="payment-label">
          {" "}
          Payment Information
          <span className="button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div className="input-field">
          <div className="label">Email</div>
          <div className="control">
            <input
              type="email"
              className="checkout-form-input"
              name="email"
              placeholder="student@codepath.org"
              value={checkoutForm.email}
              onChange={(event) =>
                handleOnCheckoutFormChange(
                  event.target.name,
                  event.target.value
                )
              }
            />
          </div>
        </div>
        <div className="input-field">
          <div className="label">Name</div>

          <input
            type="text"
            className="checkout-form-input"
            name="name"
            placeholder="Student Name"
            value={checkoutForm.name}
            onChange={(event) =>
              handleOnCheckoutFormChange(event.target.name, event.target.value)
            }
          />
        </div>
        <div className="button-area">
          <button
            className="checkout-button"
            onClick={handleOnSubmitCheckoutForm}
          >
            Checkout
          </button>
        </div>
      </div>
      <Receipt showReceipt={showReceipt} />
    </>
  );
}

export function Receipt({ showReceipt }) {
  console.log("Recepit");

  return (
    <div className="checkout-success">
      <h3>
        Checkout Info
        <span className="icon button">
          <i className="material-icons md-48">fact_check</i>
        </span>
      </h3>
      {showReceipt ? (
        <div className="card">
          <header className="card-head">
            <h4 className="card-title"> Receipt</h4>
          </header>
          <section className="card-body">
            <p className="header">
              Showing receipt for ____ available at ____@__.
            </p>
          </section>
        </div>
      ) : null}
    </div>
  );
}

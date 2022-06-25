import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  formatter,
}) {
  let subtotal = shoppingCart.reduce(calculateSubtotal, 0);

  function calculateSubtotal(total, p) {
    return total + p.quantity * products[p.itemId].price;
  }

  return (
    <div className="shopping-cart">
      <h3>
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      {shoppingCart.length > 0 ? (
        <CartTable
          shoppingCart={shoppingCart}
          products={products}
          subtotal={formatter.format(subtotal)}
          formatter={formatter}
        />
      ) : (
        <div className="notification">
          No items in shopping cart. Start shopping now!
        </div>
      )}
    </div>
  );
}

export function CartTable({ shoppingCart, products, subtotal, formatter }) {
  return (
    <div className="cart-table">
      <div className="header">
        <div className="header-row">
          <span className="flex-2"> Name </span>
          <span className="center"> Quantity </span>
          <span className="center"> Unit Price</span>
          <span className="center"> Cost </span>
        </div>
        {shoppingCart?.map((p) => (
          <ProductRow
            product={products[p.itemId - 1]}
            quantity={p.quantity}
            formatter={formatter}
          />
        ))}
      </div>

      <ChargesRow subtotal={subtotal} formatter={formatter} />
    </div>
  );
}

export function ProductRow({ product, quantity, formatter }) {
  return (
    <div className="product-row">
      <span className="cart-product-name"> {product?.name} </span>
      <span className="cart-product-quantity"> {quantity} </span>
      <span className="cart-product-price">
        {" $"}
        {formatter.format(product?.price)}{" "}
      </span>
      <span className="cart-product-cost">
        {" $"}
        {formatter.format(quantity * product?.price)}{" "}
      </span>
    </div>
  );
}

export function ChargesRow({ subtotal, formatter }) {
  let taxesAndFees = subtotal * 0.0875;
  let total = formatter.format(parseFloat(subtotal) + parseFloat(taxesAndFees));

  return (
    <div className="receipt">
      <div className="receipt-subtotal">
        <span className="label">Subtotal</span>
        <span className="subtotal"> ${subtotal}</span>
      </div>
      <div className="receipt-taxes">
        <span className="label">Taxes and Fees : </span>
        <span className="taxes">${formatter.format(taxesAndFees)}</span>
      </div>
      <div className="receipt-total">
        <span className="label">Total</span>
        <span className="total">${total}</span>
      </div>
    </div>
  );
}

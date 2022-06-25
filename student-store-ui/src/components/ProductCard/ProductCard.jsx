import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
  formatter,
}) {
  let url = "/products/" + productId;

  return (
    <div className="product-card">
      <div className="media">
        <Link to={url} productid={productId}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product-info">
        <TextInfo
          name={product.name}
          price={formatter.format(product.price)}
          description={product.description}
          showDescription={showDescription}
        />

        <div className="actions">
          <ProductButtons
            productId={productId}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
          />
          <Quantity quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export function TextInfo({ name, price, description, showDescription }) {
  return (
    <div className="main-info">
      <div className="product-name"> {name} </div>
      <div className="product-price"> ${price} </div>
      {showDescription ? (
        <div className="description">{description}</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export function ProductButtons({
  productId,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="button-area">
      <button className="add" onClick={() => handleAddItemToCart(productId)}>
        {" "}
        +{" "}
      </button>
      <button
        className="remove"
        onClick={() => handleRemoveItemToCart(productId)}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
}

export function Quantity({ quantity }) {
  return (
    <span className="product-quantity">
      {/* <span className="amount">{quantity}</span> */}
    </span>
  );
}

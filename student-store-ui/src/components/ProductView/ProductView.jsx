import * as React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  console.log("Product view product: ", product);
  return (
    <div className="product-view">
      <h1 className="product-id"> Product # {productId} </h1>

      <ProductCard
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        showDescription={true}
      />
    </div>
  );
}

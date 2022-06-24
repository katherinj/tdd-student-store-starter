import * as React from "react";
import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  products,
  setIsLoading,
  isLoading,
}) {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios.get(
        "https://codepath-store-api.herokuapp.com/store/" + productId
      );
      if (result?.data?.product) {
        setProduct(result.data.product);
      } else {
        setError("error no products");
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="product-detail">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ProductView
          product={product}
          productId={productId}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      )}
    </div>
  );
}

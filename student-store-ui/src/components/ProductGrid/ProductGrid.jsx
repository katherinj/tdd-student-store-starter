import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

// Should render JSX that is wrapped by a div element with a className of product-grid
//  Should accept at least the following props:
// products - an array of product objects
// handleAddItemToCart - handler function defined in the App.jsx component
// handleRemoveItemToCart - handler function defined in the App.jsx component
//  Should iterate over its products prop, rendering a ProductCard component for each one. Set the showDescription prop to false for all of the ProductCard components rendered in the ProductGrid component.

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    
  return (
      <div className="product-grid">
        {products.map(product => {<ProductCard product={product} showDescription="false" />})}
      </div>
    )
  }
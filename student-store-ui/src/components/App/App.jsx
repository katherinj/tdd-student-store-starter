import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import axios from "axios"

export default function App() {
  //state variables
  const [products, setProducts] = useState([]) 
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("Error")
  //bool representing whether Sidebar.jsx is open or closed 
  const [isOpen, setIsOpen] = useState(false) 
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState()

  //data fetching
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://codepath-store-api.herokuapp.com/store")
  
      //check if we got products 
      if(result?.data?.products){
        setProducts(result.data.products)
      }else{
        // error, no products, setError("error no products")
      }    
    }
    fetchData();
  }, [])


  //handler functions
  const handleOnToggle = () => { setIsOpen(!isOpen) }
  const handleAddItemToCart = (productId) => {
    
    // adds that product to the shoppingCart if it doesn't exist, and set its quantity to 1.
    // If it does exist, it should increase the quantity by 1.
    // adds the price of the product to the total price of the shoppingCart.

  }
  const handleRemoveItemFromCart = (productId) => {}
  const handleOnSubmitCheckoutForm = () => {}

  return (
    <div className="app"> 
      <BrowserRouter> 
        <main>
          {/* YOUR CODE HERE! */} 
          <Navbar />
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen}/>
          
          
          {/* 
          <Routes>
          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*"/>
        </Routes> */}
        </main>
      </BrowserRouter>
    </div>
  )
}

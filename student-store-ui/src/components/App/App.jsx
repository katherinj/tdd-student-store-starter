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
    console.log("added item id: " + productId + " index: " + shoppingCart.indexOf(productId))
    if(shoppingCart.indexOf(productId)<=-1){
      let item = [productId, 1]
      setShoppingCart(newShoppingCart => [...shoppingCart, item])
    } 
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
          
          <Routes>
            <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} category="" />}/>

            <Route path="/products/:productId" element={<ProductDetail producds={products}/>} />
            <Route path="/#About" element="#About"/>
            <Route path="*"/>
          
            <Route path="/Clothing" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} category="clothing" />}></Route>
          
            <Route path="/Food" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} category="food" />}></Route>
          
            <Route path="/Accessories" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} category="accessories" />}></Route>
          
            <Route path="/Tech" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} category="tech" />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("Error");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState([{ name: "", email: "" }]);
  const [searchText, setSearchText] = useState("");
  const [deatilIsLoading, setDetailIsLoading] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptInfo, setReceiptInfo] = useState([]);
  const formatMoney = Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/store");

      if (result?.data?.products) {
        setProducts(result.data.products);
      } else {
        setError("error no products");
      }
    };
    fetchData();
  }, []);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleAddItemToCart = (productId) => {
    let shoppingCartCopy = [...shoppingCart];

    if (shoppingCart.some((p) => p.itemId == productId)) {
      shoppingCartCopy.map((p) =>
        p.itemId == productId ? p.quantity++ : null
      );

      setShoppingCart(shoppingCartCopy);
    } else {
      setShowReceipt(false);
      let item = { itemId: productId, quantity: 1 };
      setShoppingCart([...shoppingCart, item]);
    }
  };
  const handleRemoveItemFromCart = (productId) => {
    let shoppingCartCopy = [...shoppingCart];
    let index = -1;
    let itemToRemove = -1;
    if (shoppingCart.some((p) => p.itemId == productId)) {
      shoppingCartCopy.map((p) => {
        index++;
        p.itemId == productId ? p.quantity-- : null;
        if (p.quantity == 0) {
          itemToRemove = index;
        }
      });
      if (itemToRemove > -1) {
        shoppingCartCopy.splice(itemToRemove, 1);
      }
      setShoppingCart(shoppingCartCopy);
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    let previousInfo = { name: checkoutForm.name, email: checkoutForm.email };
    if (name == "name") {
      previousInfo.name = value;
      setCheckoutForm(previousInfo);
    } else {
      previousInfo.email = value;
      setCheckoutForm(previousInfo);
    }
  };
  const handleOnSubmitCheckoutForm = async () => {
    let userInfo = { name: checkoutForm.name, email: checkoutForm.name };
    let newPurchase = { user: userInfo, shoppingCart: shoppingCart };
    try {
      axios.post("http://localhost:3001/purchases", {
        purchase: newPurchase,
      });
      setShoppingCart([]);
      setCheckoutForm({ name: "", email: "" });
      setShowReceipt(true);
    } catch (err) {
      setError(err);
    }

    //post request goes here
    //if post is successful,
    //set show receipt to true
    //empty shoppingncart
    //reset checkoutform to default state
    //else
    //display an error message inside a div className="error"
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            formatter={formatMoney}
            showReceipt={showReceipt}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  category=""
                  formatter={formatMoney}
                />
              }
            />

            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  setIsLoading={setDetailIsLoading}
                  isLoading={deatilIsLoading}
                  formatter={formatMoney}
                />
              }
            ></Route>

            <Route path="/#About" element="#About"></Route>
            <Route path="*" element={<NotFound></NotFound>} />

            <Route
              path="/Clothing"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  category="clothing"
                  formatter={formatMoney}
                />
              }
            ></Route>

            <Route
              path="/Food"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  category="food"
                  formatter={formatMoney}
                />
              }
            ></Route>

            <Route
              path="/Accessories"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  category="accessories"
                  formatter={formatMoney}
                />
              }
            ></Route>

            <Route
              path="/Tech"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                  category="tech"
                  formatter={formatMoney}
                />
              }
            ></Route>
          </Routes>
          <About></About>
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </BrowserRouter>
    </div>
  );
}

import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmityCheckoutForm, handleOnToggle}) {
  
  return (
    <section className={isOpen ?  "sidebar open" : "sidebar closed"}>
      <button className={isOpen ?  "toggle-button open" : "toggle-button closed"} onClick={handleOnToggle} >
        <i className="material-icons md-48">arrow_forward</i>
      </button>
    </section>
  )
}

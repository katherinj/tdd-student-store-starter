import * as React from "react"
import "./Hero.css"

// Should display an intro message inside an element with the className of intro. That message should contain the text "Welcome!" somewhere within it.
// Should render a hero image inside an img tag with the className of hero-img.

export default function Hero() {
    return (
      <div className="hero">
        <div className="display">
          <div className="intro"> 
            <h1>Welcome!</h1>
            <h1>Find your merch! </h1>
            <p> We have all kinds of goodies. Click on any of the items to start filling up your shopping art. Checkout whenever you're ready. </p> 
          </div>
          <div className="media">
            <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" className="hero-img" alt="" />
          </div>
        </div>
      </div>
    )
  }
  
import * as React from "react"
import "./Hero.css"

// Should display an intro message inside an element with the className of intro. That message should contain the text "Welcome!" somewhere within it.
// Should render a hero image inside an img tag with the className of hero-img.

export default function Hero() {
    return (
      <div className="hero">
        <div className="intro"> 
          Welcome! 
        </div>
        <img src="" className="hero-img" alt="" />
      </div>
    )
  }
  
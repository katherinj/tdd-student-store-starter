import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Link to="/">
          <Logo />
        </Link>

        {/* <Social />

        <Links /> 
        <ul className="links">

        </ul> */}

      </div>
    </nav>
  )
}

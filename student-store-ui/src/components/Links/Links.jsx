import * as React from "react"
import "./Links.css"
import Logo from "../Logo/Logo"
import Socials from "../Socials/Socials"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Links() {
  return (
    <ul className="links">
        <Link to = "/"> Home </Link>
        <Link to = "/#About"> About </Link>
        <Link to = "/#About"> Contact Us </Link>
        <Link to = "/#About"> Buy Now </Link>

    </ul>
  )
}


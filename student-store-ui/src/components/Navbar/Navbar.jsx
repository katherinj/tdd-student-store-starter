import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import Socials from "../Socials/Socials"
import Links from "../Links/Links"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo />
        <Socials />
        <Links />
      </div>
    </nav>
  )
}

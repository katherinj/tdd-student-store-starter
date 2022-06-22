import * as React from "react"
import "./Search.css"
import {Link} from "react-router-dom"

export default function Search({handleOnChange}) {
  return (
    <div className="search-area">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input className="search-input" type="text" name="search" placeholder="Search" onChange={handleOnChange}/>
                    <i className="material-icons">search</i>
                </div>
                <div className="links">
                    <span className="help">
                        <i className="material-icons">help</i>
                        Help
                    </span>
                    <div className="cart">
                        My Cart
                        <i className="material-icons">shopping_cart</i>
                    </div>
                </div>
            </div>
            <div className="row categoryrow">
                <Categories/>
            </div>
        </div>
    </div>
  )
}

export function Categories(){
    return (
        <ul className="category-menu">
            <Link to="/"> <button>All Categories</button> </Link>
            <Link to="/Clothing"> <button>Clothing</button> </Link>
            <Link to="/Food"> <button>Food</button> </Link>
            <Link to="/Accessories"> <button>Accessories</button> </Link>
            <Link to="/Tech"> <button>Tech</button> </Link>
        </ul>
    )
}
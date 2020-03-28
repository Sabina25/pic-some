import React from "react"
import "../styles.css"
import {Link} from "react-router-dom"


function Header() {
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <div>
                <Link to="/cart">
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png"/>
                </Link>
            </div>
        </header>
    )
}

export default Header

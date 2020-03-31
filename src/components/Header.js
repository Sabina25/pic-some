import React, {useContext} from "react"
import {Context} from "../Context"
import "../styles.css"
import {Link} from "react-router-dom"
import { func } from "prop-types"


function Header() {
    const {cartItems}=useContext(Context) 

    function bagIcon() {
        if(cartItems.length == 0 ) {
            return <img className="ri-shopping-cart-line ri-fw ri-2x" src="https://img.icons8.com/small/16/000000/shopping-bag.png"/>
        } else {
            return <img className="ri-shopping-cart-fill ri-fw ri-2x" src="https://img.icons8.com/small/16/000000/doctors-bag.png"/>
        }
    }

    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                {bagIcon()}
            </Link>   
        </header>
    )
}

export default Header

import React, {useContext} from "react"
import "../styles.css"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

import "../styles.css"

function Cart() {
    const {cartItems}=useContext(Context)

    const arrPhoto = cartItems.map(item=>{
        return <CartItem key={item.id}  item={item}/>
    })

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {arrPhoto}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart
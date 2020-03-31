import React, {useContext} from "react"
import {Context} from "../Context"

function CartItem ({item}){
    const {deletCart}=useContext(Context)
    return(
        <div className="cart-item">
            <img className="ri-delete-bin-line" 
                src="https://img.icons8.com/small/16/000000/cancel--v1.png"
                onClick={() => deletCart(item.id)}/>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
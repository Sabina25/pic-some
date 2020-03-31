import React from "react"

function CartItem ({item}){
    return(
        <div className="cart-item">
            <img className="ri-delete-bin-line" src="https://img.icons8.com/small/16/000000/cancel--v1.png"/>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"
import "../styles.css"
import PropTypes, { func } from "prop-types"


function Image ({className, img}) {
    const [isHovered, ref]=useHover()
    
    const {toggleFavorite, addToCart, cartItems, deletCart} = useContext(Context)

    function heartIcon() {
        if (img.isFavorite)  {
            return <img src="https://img.icons8.com/small/16/000000/filled-like.png"
            className="ri-heart-fill favorite"
            onClick={()=>toggleFavorite(img.id)}/>
        } else if (isHovered){
            return <img className="ri-heart-line favorite" 
            src="https://img.icons8.com/small/16/000000/hearts.png"
            onClick={()=>toggleFavorite(img.id)}/>
        }
    }

    function plusIcon () {
        const inBag = cartItems.some(item=>item.id===img.id)
        if(inBag) {
           return <img src="https://img.icons8.com/small/16/000000/shopping-bag.png" 
                className="ri-shopping-cart-fill cart"
                onClick={()=>deletCart(img.id)}/>
        } else if (isHovered) {
            return <img className="ri-add-circle-line cart" 
                src="https://img.icons8.com/material-outlined/16/000000/add.png"
                onClick={()=> addToCart(img)}/>
        }
    }

    return (
        <div className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url}  className="image-grid srr"/>
        {heartIcon()}   
        {plusIcon()}
            
        </div>
    )
}

Image.propTypes = {
    className:  PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
 }),
}

export default Image
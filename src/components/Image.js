import React, {useState, useContext, useCallback} from "react"
import {Context} from "../Context"
import "../styles.css"


function Image (props) {
    const [isHovered, setIsHovered]=useState(false)
    const {toggleFavorite} = useContext(Context)

    const stl ={
        display: "flex",
        justifyContent: "spaceB etween",
        position: "fixed",
        zIndex: "1",
    }

    const srr ={
        zIndex: "0"
    }

    const likeIcon = isHovered && <img className="ri-heart-line favorite" 
                                        src="https://img.icons8.com/small/16/000000/hearts.png"
                                        onClick={toggleFavorite(props.img.id)}/>
    const plusIcon = isHovered  && <img className="ri-add-circle-line cart" 
                                        src="https://img.icons8.com/material-outlined/16/000000/add.png"/>

    return (
        <div className={`${props.className} image-container`}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src={props.img.url}  className="image-grid srr"/>
            <div >
                {likeIcon}
            </div>
            
            {plusIcon}
            
        </div>
    )
}

export default Image
import React, {useContext} from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"


import "../styles.css"

function Photos() {
    const {allPhotos}=useContext(Context)

    const arrPhotos = allPhotos.map((img, i) => {
        return <Image key={img.id} img={img} className={getClass(i)} />
    })

    return (
        <main className="photos">
            {arrPhotos}
        </main>
    )
}

export default Photos
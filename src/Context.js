import React,  {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider (props) {
    const [allPhotos, setAllPhotos] = useState([]) 

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}



/*const delay = ms => {
    return new Promise (r => setTimeout(()=>r(), ms))
}

const url = "https://jsonplaceholder.typicode.com/posts"

async function fetchPhotos() {
    console.log("Started...")
    try {
        await delay(5000)
        const response = await fetch (url)
        const data = await response.json()
        setAllPhotos(data)
        console.log(allPhotos)
    } catch (e) {
        console.log(e)
    }
}

useEffect(()=>{
    fetchPhotos()
},[])*/
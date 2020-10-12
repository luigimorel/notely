import React, {useEffect} from 'react'

export const Favourites = () => {
    useEffect(() => {
        // Update the document title 
        document.title = "My Favs  - Notely"
    })
    return <div>
        <h1>Notely</h1>
        <p>These are the favs</p>
    </div>
}
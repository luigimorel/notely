import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
    return <div>
        <h1>Notedly </h1>
        <p>Home page</p>
        <Link to="/favourites">Favourites</Link>
    </div>
}
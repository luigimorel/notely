import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="mynotes">My Notes</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
            </ul>
        </nav>
    )
}
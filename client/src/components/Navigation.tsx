import React from 'react'
import { Link } from 'react-router-dom'
import {NavList, Nav} from '../styles'

export const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <li><Link to="home">Home</Link></li>
                <li><Link to="mynotes">My Notes</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
            </NavList>
        </Nav>
    )
}
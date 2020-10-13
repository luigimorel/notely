import React from 'react'
import { Link } from 'react-router-dom'
import { NavList, Nav } from '../styles'

export const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/">
                        <span aria-hidden="true" role="img">
                            🏠
            </span>
                        Home
          </Link>
                </li>
                <li>
                    <Link to="/mynotes">
                        <span aria-hidden="true" role="img">
                            📓
            </span>
                        My Notes
          </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <span aria-hidden="true" role="img">
                            🌟
            </span>
                        Favorites
          </Link>
                </li>
                <li>
                    <Link to="/new">
                        <span aria-hidden="true" role="img">
                            ➕
            </span>
                        New
          </Link>
                </li>
            </NavList>
        </Nav>
    )
}
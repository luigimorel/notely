import React from 'react'
import { HeaderBar, LogoText } from '../styles'
import logo from '../img/logo.png'

export const Header = () => {
    return (
        <HeaderBar>
            <img src={logo} alt="Logo for the company" />
            <LogoText>Notely</LogoText>

        </HeaderBar>
    )
}
import React from 'react'
import  Header  from './Header'
import { Navigation } from './Navigation'
import { Wrapper, Main } from './../styles'

interface LayoutProps {
    children: Object
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <Wrapper>
                <Navigation />
                <Main>{children}</Main>
            </Wrapper>
        </>
    )
}
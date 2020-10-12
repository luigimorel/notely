import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link , withRouter} from 'react-router-dom'
import { HeaderBar, LogoText, UserState } from '../styles'
import logo from '../img/logo.png'
import {ButtonAsLink} from '../styles'

//local query 
const IS_LOGGED_IN = gql`{
    isLoggedIn @client
}`

const Header = (props) => {
    const { data } = useQuery(IS_LOGGED_IN);

    return (
        <HeaderBar>
            <img src={logo} height="40" alt="Logo for the company" />
            <LogoText>Notely</LogoText>

            {/* If is logged in, display log out link  */}
            <UserState>

                {data.isLoggedIn ? (<ButtonAsLink onClick={() => {
                    // Remove the token 
                    localStorage
                        .removeItem('token'); 
                    // Clear the application's cache
                    clientInformation.resetStore();
                    // Update the local state
                    client.writeData({
                        data: {
                            isLoggedIn: false
                        }
                    })
                    // Redirect the user to the home page 
                    props.history.push('/')
                }}
                    
                >Log Out</ButtonAsLink>) :
                    (<p><Link to={'/signin'}>Sign In  </Link> or
                    
                    {'       '}
                    <Link to={'/signup'}>Sign Up</Link>
                </p>)}
            </UserState>

        </HeaderBar>
    )
}
export default withRouter(Header)
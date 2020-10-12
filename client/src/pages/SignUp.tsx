import React, { useEffect, useState } from 'react'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { SignUpWrapper, Form } from '../styles';



interface SignUpProps {
    props: string
}

export const SignUp = props => {

    const [values, setValues] = useState();

    const onChange = event => {
        setValues({ ...values, [event.target.value]: event.target.value })
    }
    useEffect(() => {
        document.title = "Sign Up -- Notely"
    })
    const SIGNUP_USER = gql`
mutation signUp($email:String! , $username: String!, $password:String!){
    signUp(email: $email, username: $username, password: $password)
}
    `
// Create the Apollo client 
    const client = new useApolloClient({
        link: authLink.concat(httpLink), cache, resolvers: {}, connectDevTools: true
    })

    const data = {
        isLoggedIn: !!localStorage.getItem('token')
    }
    // Write the cache data on initial load 
    caches.writeData({data})
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUp);
            // Update the local cache 
            client.writeData({
                data:{ isLoggedIn: true}
            })
            // Redirect the user to the home page 
            props.history.push('/');
        }
    });

    return (
        <SignUpWrapper>
            <Form onSubmit={event => {
                event.preventDefault();
                signUp({
                    variables: {
                    ...values
                    }
                })
            }}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required onChange={onChange} placeholder="Username" />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={onChange} id="email" required placeholder="Email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={onChange} id="password" placeholder="Password" />

                <button type="submit">Submit</button>
            </Form>
        </SignUpWrapper>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './../styles'
import { useQuery, gql } from "@apollo/client"
import ReactMarkdown from 'react-markdown'
import {NoteFeed} from '../components/NoteFeed' 

const GET_NOTES = gql`
query NoteFeed($cursor: 
    cursor
    hasNextPage
    notes {
        id
        createdAt
        content 
        favouritedCount
        author {
            username
            id
            avatar
        }
    })
`

export const Home = () => {
    // Query hook 
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

    // If the data is loading 
    if (loading) return <p>Loading...</p>

    // If there is an error fetching the data

    if (error) return <p>Error fetching the data </p>

    //Successfull fetching of the data 

    return (
        <NoteFeed notes={data.noteFeed.notes}/>
        )
}
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import {Note} from '../components/Note'



const GET_NOTE = gql`
query note($id: ID!){
	NOTE(id: $id){
	id
	createdAt 
	content 
	fovouriteCount
	author{
	username
	id
	avatar
	}
	}
}
`
export const NotePage = (props: any) => {
//Store the id found in the url 
//query hook, passing the id as a variable 

const {loading, error, data} = useQuery(GET_NOTE, {variables: {
	id
}})


//If the data is loading, show  loading message
if(loading) return <p>Loading....</p>
//Show the error if it occurs while fetching the data
if(error)return <p>Error: Not found </p>

//If the fetching is successful, show it 


    return (
        <Note note={data.note}/>)
}
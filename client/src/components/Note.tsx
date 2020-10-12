import React from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import { StyledNote, MetaData, MetaInfo, UserActions } from '../styles'

interface NoteProps {
    note: any
}
export const Note = ({ note }: NoteProps) => {
    return (

        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img src={note.author.avatar} alt="{note.author.username} avatar" height="50px" />{'  '}
                </MetaInfo>
                <MetaInfo>
                    <em>by</em>
                    {note.author.username} <br />
                    {format(note.createdAt, 'MM Do YYYY')}
                </MetaInfo>
                <UserActions>
                    <em>Favourites</em>
                    {note.favouriteCount}
                </UserActions>
            </MetaData>
            <ReactMarkdown source={note.content} />

        </StyledNote>)
}
import React from 'react'
import { Note } from './Note'
import {NoteWrapper} from '../styles'

interface NoteFeedProps {
    notes: any
    note:any
}
export const NoteFeed = ({notes}:NoteFeedProps) => {
    return <div>
        {notes.map(note => (<NoteWrapper key={note.id}>
            <Note note={note}/>
        </NoteWrapper>
        ))}
    </div>
}
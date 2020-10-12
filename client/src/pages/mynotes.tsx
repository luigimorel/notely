import React, { useEffect } from "react";

export const MyNotes = () => {
    useEffect(() => {
    // Update the document 
        document.title = "My Notes _ Notely"
    })
    return <div>
        <h1>Notely</h1>

        <p>These are the notes</p>
        
    </div>
    
}

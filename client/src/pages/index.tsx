import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { MyNotes } from './mynotes'
import { Favourites } from './favorites'


export const Pages = () => {
    return <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/mynotes" component={MyNotes} />
        <Route exact path="/favourites" component={Favourites}/>
    </Router>
}
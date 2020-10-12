import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { MyNotes } from './mynotes'
import { Favourites } from './favorites'
import { Layout } from './../components/Layout'
import { Note } from '../components/Note'
import { SignUp } from './SignUp'


export const Pages = () => {
    return <Router>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/mynotes" component={MyNotes} />
            <Route exact path="/favourites" component={Favourites} />
            <Route path='/signup' component={SignUp} />
            <Route path="/note/:id" component={Note} />
        </Layout>
    </Router>
}
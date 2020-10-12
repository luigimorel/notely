import React from 'react';
import './App.css';
import { Pages } from './pages'
import { GlobalStyle } from './styles'
import {ApolloClient, ApolloProvider, InMemoryCache} from '.@apollo/client'

export const App = () => {

  const uri = process.env.API_URI;
  const cache = new InMemoryCache();

  // Configuration for the Apollo client
  const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyle/>
      < Pages /></ApolloProvider>
  );
}


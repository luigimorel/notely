import React from 'react';
import './App.css';
import { Pages } from './pages'
import { GlobalStyle } from './styles'
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '.@apollo/client'

export const App = () => {

  const uri = process.env.API_URI;
  const cache = new InMemoryCache();

  // Check for a token and return the headers to the context 
  const authLink = setContext(( _, { headers }) => {
    return {
      headers: ...headers, 
      authorization: localStorage.getItem('token') || ' '
      // write the cache data on initial load 
      cache.writeData({ data })
      // Write the cache data after cache is reset 
      client.onResetStore(() => writeData({data}))
    }
  })

  // Configuration for the Apollo client
  const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyle/>
      < Pages />
    </ApolloProvider>
  );
}


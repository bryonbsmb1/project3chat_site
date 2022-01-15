import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

import Navbar from './components/Navbar/index';
import Leftbar from './components/Leftbar/index';
import Rightbar from './components/Rightbar/index';
import Feed from './components/Feed/index';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = createTheme({

});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar/>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/profiles/:profileId">
              <Profile />
            </Route>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
    
  )
}

export default App;

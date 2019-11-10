import React from 'react';
import 'mustard-ui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import List from './List';
import Add from './Add';
import { ethers } from 'ethers';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import getProvider from './getProvider'

interface State {
  gotProvider: boolean
  address: string | null
}

export default class App extends React.Component<any, State> {
  client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/id/QmWVv3Y19zTB6JVLQFzcD7BzACMdJVgAyucFUumxFCBVEL',
  })
  constructor(props: any) {
    super(props);
    this.state = {
      gotProvider: false,
      address: null,
    }
  }
  
  async componentDidMount() {
    let w: any = window

    if (w.ethereum) {
      console.log('using modern dapp browser')
      w.web3 = new w.Web3(w.ethereum);
      try {
        // Request account access if needed
        await w.ethereum.enable();
        console.log('enabled');
        w.provider = new ethers.providers.Web3Provider(w.web3.currentProvider);
        const accounts = await getProvider().listAccounts()
        if (accounts.length) {
          const address = accounts[0]
          this.setState({
            gotProvider: true,
            address,
          })
        }
      } catch (error) {
        // User denied account access...
        console.log(error)
      }
    } else if (w.web3) {
      w.web3 = new w.Web3(w.web3.currentProvider);
      w.provider = new ethers.providers.Web3Provider(w.web3.currentProvider);
      w.provider = new ethers.providers.Web3Provider(w.web3.currentProvider);
      const accounts = await getProvider().listAccounts()
      if (accounts.length) {
        const address = accounts[0]
        this.setState({
          gotProvider: true,
          address,
        })
      }
    }
  }
  
  render() {
    const { gotProvider, address } = this.state

    if (!gotProvider || !address) {
      return (
        <header>
          trying to get provider...
        </header>
      )
    }
    
    return (
      <ApolloProvider client={this.client}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list">
              <List address={address} />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

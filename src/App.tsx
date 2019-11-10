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
    const web3 = (window as any).web3

    if (web3) {
      (window as any).provider = new ethers.providers.Web3Provider(web3.currentProvider);
      const accounts = await getProvider().listAccounts()
      const address = accounts[0]
      this.setState({
        gotProvider: true,
        address,
      })
      
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

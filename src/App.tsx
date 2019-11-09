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

interface State {
  gotProvider: boolean
}

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      gotProvider: false,
    }
  }
  
  componentDidMount() {
    const web3 = (window as any).web3

    if (web3) {
      (window as any).provider = new ethers.providers.Web3Provider(web3.currentProvider);
      this.setState({
        gotProvider: true,
      })
    }
  }
  
  render() {
    const { gotProvider } = this.state

    if (!gotProvider) {
      return (
        <header>
          trying to get provider...
        </header>
      )
    }
    
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    );
  }
}

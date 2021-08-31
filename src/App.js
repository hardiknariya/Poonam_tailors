import React, { Component } from 'react';
import {Switch, Route , Redirect } from 'react-router-dom';
import './App.scss';
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Menu from './Component/Menu';
import About from './pages/About Us';
import Order from './pages/Order';

class App extends Component {

  constructor(props){
    super(props)

    this.state ={

    }
  }

  componentDidMount () {
    
  }  

  render() {
    return (
      <>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Customer" component={Customer} />
          <Route exact path="/Order" component={Order} />
          <Route exact path="/About" component={About} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
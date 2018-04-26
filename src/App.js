import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
          <CartFooter />
        </header>
      </div>
    );
  }
}

export default App;

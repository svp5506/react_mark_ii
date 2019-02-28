import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from "./components/login";
import Signup from './components/form/signup';
import Header from "./components/header";

class App extends Component {
  render() {
    return (
<div>
<Header />
  <BrowserRouter>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
  </BrowserRouter>
</div>

    );
  }
}

export default App;

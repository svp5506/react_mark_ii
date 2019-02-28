import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
<div class="main">
<div class="ui two column centered grid">
  <div class="one column centered row">
    <h1>Welcome to Aquantum Solar</h1>
</div>
  <div class="four column centered row">
    <div class="column">

{/* Login Form Starts Here */}

<form class="ui large form">
  <div class="ui raised segment">
      <div class="field">
          <div class="ui left icon input">
            <i class="user icon" />
            <input type="text" name="email" placeholder="Email Address" />
          </div>
      </div>
      <div class="field">
          <div class="ui left icon input">
            <i class="lock icon" />
            <input type="text" name="password" placeholder="Password" />
          </div>
      </div>
       <button class="ui fluid large submit teal button">Login</button>
  </div>
 
  <div class="field">
    <div id="signup" class="ui small message">
        New to us? 
        <Link to="/signup"> Sign Up</Link>
    </div>
  </div>
</form>



    </div>
  </div>
</div>
</div>

  );
};

export default Login;
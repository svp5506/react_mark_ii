import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './formstyle.css';

class Success extends Component{
    render(){
        return(
        <div>
<div class="ui two column centered grid" id="main">
  <div class="one column centered row">
</div>
  <div class="centered row">
    <div class="column">
        <div class="ui raised segment">
            
            <h3 className="ui align centered">Details Successfully Saved</h3>
            <Link to="/"><button class="ui teal button">Login</button></Link>
            
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Success;
import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './formstyle.css';

class Address extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }



    render(){
        const { values } = this.props
        return(
            <div>
<div class="ui two column centered grid" id="main">
  <div class="one column centered row">
</div>
  <div class="centered row">
    <div class="column">
        <div class="ui raised  segment">
        <div class="ui large form">
            <h1 className="ui centered">Enter Your Address</h1>
            <div class="field">
                <label>Address</label>
                <input placeholder='Address'
                onChange={this.props.handleChange('address')}
                defaultValue={values.address}
                />
            </div>
            <Link to="/"><button class="ui teal button">Back</button></Link>
            <button class="ui teal button" onClick={this.saveAndContinue}>Save And Continue </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}

export default Address;
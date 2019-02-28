import React, { Component } from 'react';
import './formstyle.css';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, phnumber, age, address }} = this.props;

        return(
<div class="ui two column centered grid" id="main">
  <div class="one column centered row">
</div>
  <div class="centered row">
    <div class="column">
        <div class="ui raised  segment">
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
            <div class="ui list">
              <div class="item">
                <i class="user icon"></i>
                <div class="content">
                  {firstName}
                </div>
              </div>
              <div class="item">
                <i class="user icon outline"></i>
                <div class="content">
                  {lastName}
                </div>
              </div>
              <div class="item">
                <i class="mail icon"></i>
                <div class="content">
                  {email}
                </div>
              </div>
              <div class="item">
                <i class="address book icon"></i>
                <div class="content">
                  {phnumber}
                </div>
              </div>
                <div class="item">
                <i class="map marker icon"></i>
                <div class="content">
                  {address}
                </div>
              </div>
            </div>

                    <div>
                    <div class="ui checkbox">
                      <input type="checkbox"/>
                      <label>I agree to the Terms and Conditions</label>
                    </div>
                  </div>
                <div class="ui horizontal divider" />
                <button class="ui teal button" onClick={this.back}>Back</button>
                <button class="ui teal submit button" onClick={this.saveAndContinue}>Confirm</button>
            </div>
            </div>
            </div>
            </div>
             
        )
    }
}

export default Confirmation;
import React, { Component } from 'react';
import './formstyle.css';

class PersonalDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    
        back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
        <div id="main">
            <div class="ui four column centered grid">
                <div class="column">
                <div class="ui raised segment">
            <div class="ui large form">
                <h1 className="ui centered">Enter User Details</h1>
                <div class="field">
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </div>
                <div class="field">
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </div>
                                <div class="field">
                    <label>Phone Number</label>
                    <input
                    type='phnumber'
                    placeholder='(___)-___-____'
                    onChange={this.props.handleChange('phnumber')}
                    defaultValue={values.phnumber}
                    />
                </div>
                <button class="ui teal button" onClick={this.back}>Back</button>
                <button class="ui teal button" onClick={this.saveAndContinue}>Save And Continue</button>
            </div>
            </div>
             </div>
               </div>
               </div>
        )
    }
}

export default PersonalDetails;
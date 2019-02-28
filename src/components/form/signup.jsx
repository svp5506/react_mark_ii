import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Address from './address';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class Signup extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        email: '',
        phnumber: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    
    render(){
        
        const {step} = this.state;
        const { firstName, lastName, email, phnumber, age, address } = this.state;
        const values = { firstName, lastName, email, phnumber, age, address };
        switch(step) {
        case 1:
            return <Address 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

export default Signup;
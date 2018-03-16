import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SignupComponent from '../components/signup/SignupComponent'



export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/signup" component={SignupComponent} />
        
      </div>
    )
  }
}
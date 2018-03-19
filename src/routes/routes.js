import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomeComponent from '../components/homeComponent'
import SignupComponent from '../components/signup/SignupComponent'
import SigninComponent from '../components/signin/SigninComponent'



export default class Routes extends Component {
  render() {
    return (
      <div>

        <Route exact path="/" component={HomeComponent} />
        <Route path="/signup" component={SignupComponent} />
        <Route path="/signin" component={SigninComponent} />

      </div>
    )
  }
}

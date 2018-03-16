import React, { Component } from 'react'
import { connect } from 'react-redux'
import signUp from '../../actions/user/signup'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}



class SignupComponent extends Component {

  submitForm(event) {
    console.log(this.refs)
    const user = {
      name: this.refs.name.input.value,
      email: this.refs.email.input.value,
      password: this.refs.password.input.value
    }
    this.props.signUp(user);
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="name" type="text" hintText="Name" />
          </div>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"  />
          </div>
          <div className="input">
            <TextField ref="password2" type="password" hintText="Confirm Password"  />
          </div>
          
          <FlatButton
            label="Sign in" />

          <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Sign up" 
          primary={true} />
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = () => ({
 
})


export default connect(mapStateToProps, { signUp } )(SignupComponent)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter ,BrowserRouter } from 'react-router-dom'
import signin from '../../actions/user/signin'

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



class SigninComponent extends Component {

  submitForm(event) {
    console.log(this.refs)
    const user = {

      email: this.refs.email.input.value,
      password: this.refs.password.input.value
    }
    this.props.signin(user);
  }

  render() {
    return (
      <Paper style={ dialogStyle }>


        <form onSubmit={this.submitForm.bind(this)}>

          <div className="input">
            <TextField ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"  />
          </div>


          <FlatButton
            label="Sign in" />

          <RaisedButton
          style={ buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Sign in"
          primary={true} />
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = () => ({

})


export default connect(mapStateToProps, { signin } )(SigninComponent)

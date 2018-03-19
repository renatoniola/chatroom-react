import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter,BrowserRouter ,Link } from 'react-router-dom'
import Routes from './routes/routes.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    const Logged = (props) => (
      <div>{ props.email }</div>
    )
    const Login = () => (
      <div>login</div>
    )

    return (


      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <AppBar
          title="Chatroom"


          iconElementRight={!this.props.current_user ? <Login /> : <Logged email={this.props.current_user}/> }
        />
        <Routes />
      </div>
      </MuiThemeProvider>

    )
  }
}

const mapStateToProps = ({ user }) => {

  const current_user = user.email ? user.email : 'guest';

  return {
     current_user
  }
}
export default withRouter(connect(mapStateToProps)(App))

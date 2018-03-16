import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
    return (
     

      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <AppBar
          title="Chatroom"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Routes />
      </div>
      </MuiThemeProvider>

    )
  }
}

export default App
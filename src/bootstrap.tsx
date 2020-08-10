import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiTheme } from './theme/MuiTheme'

import App from './pages/app'

// const createStoreWithMiddleware = applyMiddleware()(createStore)

import './style/main.scss'

function main() {
  ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <BrowserRouter>
            {screen.width < 600 ?
            // Mobile Mode
            <Switch>
              <Route exact path="/" component={App}/>
            </Switch>
            : // Desktop Mode
            <Switch>
              <Route exact path="/" component={App}/>
            </Switch>
            }
          
        </BrowserRouter>
      </ThemeProvider>
    // </Provider>
    , document.querySelector('.app-wrapper'))
}

document.addEventListener('DOMContentLoaded', main)

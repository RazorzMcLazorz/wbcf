import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiTheme } from './theme/MuiTheme'

import App from './pages/App'
import Inventory from './pages/Inventory'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'

import './style/main.scss'

function main() {
  ReactDOM.render(
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <BrowserRouter>
        {screen.width < 600 ?
          // Mobile Mode
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
          </Switch>
          : // Desktop Mode
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
          </Switch>
        }
      </BrowserRouter>
    </ThemeProvider>
    , document.querySelector('.app-wrapper'))
}

document.addEventListener('DOMContentLoaded', main)

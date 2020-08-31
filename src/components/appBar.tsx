import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CustomDrawer from './CustomDrawer'

interface IAppBar {
  dontHide?: boolean
}

export default class ButtonAppBar extends Component<IAppBar> {
  state = {
    isHide: this.props.dontHide ? true : false,
    scrollPos: window.scrollY
  }

  hideBar = () => {
    window.scrollY > 100 ?
      this.setState({ isHide: true })
      :
      this.setState({ isHide: false });
  }

  componentDidMount() {
    this.props.dontHide ? undefined :
      window.addEventListener('scroll', this.hideBar, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }



  render() {
    return (
      <AppBar position="sticky" onScroll={this.hideBar}>
        <Toolbar style={{ justifyContent: 'space-between' }}>

          <CustomDrawer />

          <a href='/' style={{ color: 'white', textDecoration: 'none' }} >
            {this.state.isHide &&
              <Typography variant="h6">
                Wolf's Bane Cabinetry and Furniture
              </Typography>
            }
          </a>

          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    )
  }
}
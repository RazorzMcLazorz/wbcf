import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CustomDrawer from './Drawer'

export default class ButtonAppBar extends Component {
  state = {
    isHide: false,
    scrollPos: window.scrollY
  }

  hideBar = () => {

    window.scrollY > 10 ?
      this.setState({ isHide: true })
      :
      this.setState({ isHide: false });

    console.log(window.scrollY)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.hideBar);
    console.log(this.state.scrollPos)
    console.log(window.scrollY)
  }

  render() {
    console.log(window.scrollY)
    return (
      <AppBar position="sticky" onScroll={this.hideBar}>
        <Toolbar style={{ justifyContent: 'space-between' }}>

          <CustomDrawer icon={<MenuIcon />} list={
            [
              'Inventory',
            ]
          } />

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
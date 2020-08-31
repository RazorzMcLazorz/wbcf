import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

interface IDrawer {
}

class CustomDrawer extends Component<IDrawer> {
  state = {
    open: false,
    list: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Inventory',
        link: '/inventory'
      },
      {
        name: 'Cart',
        link: '/cart'
      },
      {
        name: 'Contact Us',
        link: '/contact'
      },
      {
        name: 'Login',
        link: '/login'
      }
    ]
  }

  render() {
    return (
      <div>
        <IconButton color="inherit" onClick={() => this.setState({ open: true })}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.open}
          onClose={() => this.setState({ open: false })}>
          <div className='defaultBackground drawerInner'>
            <List>
              {this.state.list.map((val, key) =>
                <ListItem key={key} button onClick={() => window.location.href = val.link}>
                  <ListItemText primary={val.name} className='drawerText' />
                </ListItem>
              )}
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default CustomDrawer
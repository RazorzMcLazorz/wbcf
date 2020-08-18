import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'

interface IDrawer {
}

class CustomDrawer extends Component<IDrawer> {
  state = {
    open: false,
    list: [
      'Inventory',
      'Gate Way'
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
          <div style={{ width: 250 }}>
            <Typography>ima list</Typography>
            <List style={{ width: 250 }} component='div'>
              {this.state.list.map(item => {
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              })}
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default CustomDrawer
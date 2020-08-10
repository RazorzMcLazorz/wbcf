import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Drawer from '../components/Drawer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppBar/>
        
        <Drawer/>
      </div>
    )
  }
}
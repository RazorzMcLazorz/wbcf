import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'

export default class Cart extends Component {

  render() {
    return (
      <div className='cart'>
        <AppBar dontHide />
        <Footer />
      </div>
    )
  }
}
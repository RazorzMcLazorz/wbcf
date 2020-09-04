import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'

export default class Contact extends Component {

  render() {
    return (
      <div className='contact'>
        <AppBar dontHide />
        <Footer />
      </div>
    )
  }
}
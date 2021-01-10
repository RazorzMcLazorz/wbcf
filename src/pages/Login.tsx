import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <AppBar dontHide />
        <Footer />
      </div>
    )
  }
}

import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'

export default class Inventory extends Component {

  state = {
    items: ['p1'],

    picture: {
      p1: 'projectjpg',
      p2: 'project2.jpg',
      p3: 'project3.jpg',
      p4: 'project4.jpg',
      p5: 'project5.jpg',
      p6: 'project6.jpg'
    }
  }


  render() {
    return (
      <div className='inventory'>
        <AppBar dontHide />
        <div className='invBody'>
        </div>
        <Footer />
      </div>
    )
  }
}
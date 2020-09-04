import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'

export default class Inventory extends Component {

  state = {
    items: ['p1'],



  }

  picture = [
    'project1.jpg',
    'project2.jpg',
    'project3.jpg',
    'project4.jpg',
    'project5.jpg',
    'project6.jpg']

  render() {
    return (
      <div className='inventory'>
        <AppBar dontHide />
        <div>
          <div>
            {this.picture.map((img, key) => (
              <img key={key} style={{ width: 250, height: 250 }} src={`assets/${img}`}></img>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
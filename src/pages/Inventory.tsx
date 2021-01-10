import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'
import ItemBox from '../components/ItemBox'

export default class Inventory extends Component {
  state = {}

  itemHover: {}

  picture = [
    { img: 'project1.jpg', label: 'project1' },
    { img: 'project2.jpg', label: 'project2' },
    { img: 'project3.jpg', label: 'project3' },
    { img: 'project4.jpg', label: 'project4' },
    { img: 'project5.jpg', label: 'project5' },
    { img: 'project6.jpg', label: 'project6' },
    { img: 'project1.jpg', label: 'project1' },
    { img: 'project2.jpg', label: 'project2' },
    { img: 'project3.jpg', label: 'project3' },
    { img: 'project4.jpg', label: 'project4' },
    { img: 'project5.jpg', label: 'project5' },
    { img: 'project6.jpg', label: 'project6' },
    { img: 'project1.jpg', label: 'project1' },
    { img: 'project2.jpg', label: 'project2' },
    { img: 'project3.jpg', label: 'project3' },
    { img: 'project4.jpg', label: 'project4' },
    { img: 'project5.jpg', label: 'project5' },
    { img: 'project6.jpg', label: 'project6' }
  ]

  render() {
    return (
      <div className='inventory'>
        <AppBar dontHide />
        <div className='invBody'>
          <div className='itemList'>
            {this.picture.map(({ img, label }, key) => (
              <ItemBox img={img} label={label} key={key} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

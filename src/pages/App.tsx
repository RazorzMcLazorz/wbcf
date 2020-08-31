import React, { Component } from 'react'
import AppBar from '../components/appBar'
import JustinsName from '../components/JustinsName'
import Typography from '@material-ui/core/Typography'
import Footer from '../components/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <AppBar />
        <div className='landingpartone'>
          <JustinsName />
          <img className='firstSetup' src='assets/firstSetup.jpg' />
        </div>
        <div className='landingparttwo'>
          <Typography variant='h4' className='rowText'>
            Expect the unexpected. And whenever possible, be the unexpected.
          </Typography>
          <div className='row'>
            <div className='imgbox'>
              <img className='img' src='assets/project1.jpg' />
            </div>
            <div className='imgbox'>
              <img className='img' src='assets/project2.jpg' />
            </div>
          </div>
          <Typography variant='h4' className='rowText'>
            Challenge the unknown.
          </Typography>
          <div className='row'>
            <div className='imgbox'>
              <img className='img' src='assets/project3.jpg' />
            </div>
            <div className='imgbox'>
              <img className='img' src='assets/project5.jpg' />
            </div>
          </div>
          <Typography variant='h4' className='rowText'>
            Every Detail matters.
          </Typography>
          <div className='row'>
            <div className='imgbox'>
              <img className='img' src='assets/project4.jpg' />
            </div>
            <div className='imgbox'>
              <img className='img' src='assets/project6.jpg' />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
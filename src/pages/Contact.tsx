import React, { Component } from 'react'
import AppBar from '../components/appBar'
import Footer from '../components/Footer'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <AppBar dontHide />
        <div className='ContactInfo'>
          <div>You can find the creator at these links</div>
          <div className='MYLinks'>
            <a href='https://github.com/RazorzMcLazorz' target='_blank'>
              <GitHubIcon className='icon' />
            </a>
            <a href='https://www.facebook.com/RazorzMcLazorz' target='_blank'>
              <FacebookIcon className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/nate-p-young/' target='_blank'>
              <LinkedInIcon className='icon' />
            </a>
          </div>
          <div>Or</div>
          <div className='MYLinksTop'>Manually message me at: </div>

          <div className='MYLinksTop3' id='email'>
            nateyoungdev@gmail.com
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

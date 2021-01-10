import React, { Component } from 'react'

interface IProps {
  img: string
  label: string
}

interface IState {
  hovered: boolean
}

export default class Inventory extends Component<IProps, IState> {
  state = {
    hovered: false
  }

  onHover() {
    this.setState({ hovered: true })
  }

  offHover() {
    this.setState({ hovered: false })
  }

  itemClicked() {
    console.log('trigger text')
  }

  render() {
    return (
      <div
        className='itemBox'
        onMouseOver={() => this.onHover()}
        onMouseLeave={() => this.offHover()}
        onClick={() => this.itemClicked()}>
        <img src={`assets/${this.props.img}`} />
        {this.state.hovered ? (
          <>
            <div className='itemOverlay' />
            <div className='itemOverlayTag'>
              <div>{this.props.label}</div>
              <div>more info...</div>
            </div>
          </>
        ) : null}
      </div>
    )
  }
}

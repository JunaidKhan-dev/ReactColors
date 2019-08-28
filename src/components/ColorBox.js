import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'
import './Palette.css'
class ColorBox extends Component {
  state = { 
    copied: false
  }

  changeCopyState = () =>{
    this.setState({
      copied: true
    }, () => {
      setTimeout(()=>{
        this.setState({
          copied: false
        })
      } ,1500)
    })
  }
  render () {
    const { name, background } = this.props
    const {copied} = this.state
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{ background: background }} className='ColorBox'>
        {/* popup modal for copied start */}
          <div className={`copy-overlay ${copied && 'show'}`} style={{ background: background }} ></div>
          <div  className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
        {/* popup modal for copied Ends */}
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
      </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox

import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'

class Palette extends Component {
  state = { 
    level: 500,
    format: 'hex'
  }

  changeLevel = (newLevel)=>{
    this.setState({
      level: newLevel
    })
  }
  handleFormat = (e) => {
   this.setState({
    format: e.target.value
   })
  }
  render () {
    const {level, format} = this.state
    const colorsBoxes = this.props.palette.colors[level].map(box => {
      return (
        <ColorBox key={box.name} background={box[format]} name={box.name} />
      )
    })
    return (
      <div className='Palette'>
        <Navbar changeLevel={this.changeLevel} handleChange={this.handleFormat}/>
        <div className='Palette-colors'>
          {colorsBoxes}
        </div>
        {/* footer here */}
      </div>
    )
  }
}

export default Palette

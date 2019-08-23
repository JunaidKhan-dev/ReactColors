import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'

class Palette extends Component {
  state = { 
    level: 500
  }

  changeLevel = (newLevel)=>{
    this.setState({
      level: newLevel
    })
  }
  render () {
    const {level} = this.state
    const colorsBoxes = this.props.palette.colors[level].map(box => {
      return (
        <ColorBox key={box.name} background={box.hex} name={box.name} />
      )
    })
    return (
      <div className='Palette'>
        <Navbar changeLevel={this.changeLevel}/>
        <div className='Palette-colors'>
          {colorsBoxes}
        </div>
        {/* footer here */}
      </div>
    )
  }
}

export default Palette

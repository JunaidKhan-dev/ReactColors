import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
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
        <div className='slider'>
        <Slider defaultValue={level} min={100} max={900}
         onAfterChange={this.changeLevel} step={100} />
        </div>
        <div className='Palette-colors'>
          {colorsBoxes}
        </div>
        {/* footer here */}
      </div>
    )
  }
}

export default Palette

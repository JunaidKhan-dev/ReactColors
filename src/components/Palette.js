import React, { Component } from 'react'
import ColorBox from './ColorBox'
class Palette extends Component {
  state = { }
  render () {
    const colorsBoxes = this.props.palette.colors[300].map(box => {
      return (
        <ColorBox key={box.name} background={box.hex} name={box.name} />
      )
    })
    return (
      <div className='Palette'>
        <div className='Palette-colors'>
          {colorsBoxes}

        </div>
        {/* footer here */}
      </div>
    )
  }
}

export default Palette

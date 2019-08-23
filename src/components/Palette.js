import React, { Component } from 'react'
import ColorBox from './ColorBox'
class Palette extends Component {
  state = { }
  render () {
    const colorsBoxes = this.props.colors.map(box => {
      return (
        <ColorBox key={box.name} background={box.color} name={box.name} />
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

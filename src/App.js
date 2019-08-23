import React, { Component } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorsHelpers' 
class App extends Component {
  state = { }
  render () {
    console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palette {...seedColors[5]} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from "./colorsHelpers" 
import './App.css'
class App extends Component {
  state = { }
  render () {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    )
  }
}

export default App

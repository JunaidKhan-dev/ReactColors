import React, { Component, Fragment } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from "./colorsHelpers" 
import './App.css'
class App extends Component {
  state = { }
  render () {
    return (
      <Fragment>
        <Palette palette={generatePalette(seedColors[4])} />
      </Fragment>
    )
  }
}

export default App

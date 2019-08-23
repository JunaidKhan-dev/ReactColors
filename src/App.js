import React, { Component } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
class App extends Component {
  state = { }
  render () {
    return (
      <div>
        <Palette {...seedColors[5]} />
      </div>
    )
  }
}

export default App

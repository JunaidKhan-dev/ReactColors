import React, { Component } from 'react'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import seedColors from './seedColors'
import {Route, Switch} from 'react-router-dom'
import { generatePalette } from "./colorsHelpers" 
import './App.css'
class App extends Component {
  state = { }
  render () {
    return (
      <div>
        <Switch>
        <Route exact path='/' render={()=>{ return <PaletteList palettes = {seedColors}/> } } /> 
        <Route exact path='/palette/:id'
          render={(routeProps)=>{ return <Palette palette={generatePalette(seedColors[Number(routeProps.match.params.id)])} />  } } /> 
        </Switch>
        
      </div>
    )
  }
}

export default App

// {Number(routeProps.match.params.id)}
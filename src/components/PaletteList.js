import React, { Component, Fragment } from 'react'
import Minipalette from './Minipalette'
import {Link}  from 'react-router-dom'
class PaletteList extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <Minipalette />
        {
          this.props.palettes.map((p, i)=>{
            return (
            <p>
            <Link key={(Math.random()*i) + p } to={`/palette/${i}`} >{p.paletteName}</Link>
            </p>
            ) 
          })
        }
      </Fragment>
     )
  }
}
 
export default PaletteList
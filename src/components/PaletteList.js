import React, { Component, Fragment } from 'react'
import {Link}  from 'react-router-dom'
class PaletteList extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        {
          this.props.palettes.map((p, i)=>{
            return (
            <p>
            <Link key={p+i} to={`/palette/${i}`} >{p.paletteName}</Link>
            </p>
            ) 
          })
        }
      </Fragment>
     )
  }
}
 
export default PaletteList
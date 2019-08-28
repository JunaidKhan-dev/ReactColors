import React, { Component, Fragment } from 'react'
import Minipalette from './Minipalette'
import {Link}  from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const styles = {
  root:{
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container:{
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav:{
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  }
}
class PaletteList extends Component {
  state = {  }
  render() { 
  // console.log(this.props.classes)
    return ( 
      <div className={this.props.classes.root}>
        <div className={this.props.classes.container}>
          <nav className={this.props.classes.nav}>
            <h1> React Colors </h1>
          </nav>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            {
              this.props.palettes.map((p, i)=>{
                return (
                <Link to={`/palette/${i}`} >
                  <Minipalette {...p} />
                </Link>
                ) 
              })
            }
            </Grid>
          </div>
        </div>
     )
  }
}
 
export default withStyles(styles)(PaletteList)
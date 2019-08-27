import React from 'react'
import { withStyles } from '@material-ui/styles'
const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    '& h1': {
      color: 'white'
    },
    '& h1:hover':{
      color: 'black'
    }
  }
}

const Minipalette = (props) => {
  const { classes } = props
  console.log(classes)
  return (
    <div className={classes.main}>
      <h1>mini palette</h1>
    </div>
  )
}

export default withStyles(styles)(Minipalette)
